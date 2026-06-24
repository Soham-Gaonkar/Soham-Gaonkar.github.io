import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useTheme } from '../contexts/ThemeContext';
import { getBestMove, evaluateBoard } from '../utils/chessAI';

const ChessGame: React.FC = () => {
  const { theme } = useTheme();
  
  // Game instance state
  const [game, setGame] = useState(() => new Chess());
  const [gameFen, setGameFen] = useState(game.fen());
  const [playerColor, setPlayerColor] = useState<'white' | 'black'>('white');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [statusMsg, setStatusMsg] = useState<string>('Your Turn');
  const [isThinking, setIsThinking] = useState(false);

  // Load game from localStorage on mount
  useEffect(() => {
    const savedFen = localStorage.getItem('chess_game_fen');
    const savedColor = localStorage.getItem('chess_player_color') as 'white' | 'black';
    const savedDifficulty = localStorage.getItem('chess_difficulty') as 'easy' | 'medium' | 'hard';

    if (savedFen) {
      try {
        const newGame = new Chess(savedFen);
        setGame(newGame);
        setGameFen(newGame.fen());
        setMoveHistory(newGame.history());
      } catch (e) {
        localStorage.removeItem('chess_game_fen');
      }
    }
    if (savedColor) {
      setPlayerColor(savedColor);
    }
    if (savedDifficulty) {
      setDifficulty(savedDifficulty);
    }
  }, []);

  // Save game state helper
  const saveGameState = (currentGame: Chess, color: 'white' | 'black', diff: 'easy' | 'medium' | 'hard') => {
    localStorage.setItem('chess_game_fen', currentGame.fen());
    localStorage.setItem('chess_player_color', color);
    localStorage.setItem('chess_difficulty', diff);
  };

  // Check game over state
  const getGameOverMessage = (g: Chess) => {
    if (g.isCheckmate()) {
      const winner = g.turn() === 'w' ? 'Black' : 'White';
      return `Checkmate! ${winner} wins.`;
    }
    if (g.isStalemate()) return 'Draw! Stalemate.';
    if (g.isThreefoldRepetition()) return 'Draw! Threefold repetition.';
    if (g.isInsufficientMaterial()) return 'Draw! Insufficient material.';
    if (g.isDraw()) return 'Draw!';
    return '';
  };

  // AI thinking logic
  useEffect(() => {
    if (game.isGameOver()) {
      setStatusMsg(getGameOverMessage(game));
      return;
    }

    const currentTurn = game.turn(); // 'w' or 'b'
    const isPlayerTurn = currentTurn === playerColor[0];

    if (!isPlayerTurn) {
      setIsThinking(true);
      setStatusMsg('AI is thinking...');

      const timer = setTimeout(() => {
        const bestMove = getBestMove(game, difficulty);
        if (bestMove) {
          game.move(bestMove);
          setGameFen(game.fen());
          setMoveHistory(game.history());
          saveGameState(game, playerColor, difficulty);
        }
        setIsThinking(false);
        if (game.isGameOver()) {
          setStatusMsg(getGameOverMessage(game));
        } else {
          setStatusMsg('Your Turn');
        }
      }, 400); // 400ms delay to make it feel natural

      return () => clearTimeout(timer);
    } else {
      setStatusMsg(game.inCheck() ? 'Your Turn (Check!)' : 'Your Turn');
      setIsThinking(false);
    }
  }, [gameFen, playerColor, difficulty, game]);

  // Handle piece drops
  const onDrop = ({ piece, sourceSquare, targetSquare }: { piece: { pieceType: string }; sourceSquare: string; targetSquare: string | null }) => {
    if (game.isGameOver() || isThinking || !targetSquare) return false;
    if (game.turn() !== playerColor[0]) return false;

    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: piece.pieceType[1]?.toLowerCase() ?? 'q', // Default promotion to Queen
      });

      if (move === null) return false;

      setGameFen(game.fen());
      setMoveHistory(game.history());
      saveGameState(game, playerColor, difficulty);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Reset current game
  const handleReset = () => {
    const newGame = new Chess();
    setGame(newGame);
    setGameFen(newGame.fen());
    setMoveHistory([]);
    setIsThinking(false);
    setStatusMsg(playerColor === 'white' ? 'Your Turn' : 'AI is thinking...');
    saveGameState(newGame, playerColor, difficulty);
  };

  // Undo move (undoes both player move & AI response)
  const handleUndo = () => {
    if (isThinking || moveHistory.length === 0) return;
    
    if (moveHistory.length >= 2) {
      game.undo();
      game.undo();
    } else {
      game.undo();
    }
    
    setGameFen(game.fen());
    setMoveHistory(game.history());
    saveGameState(game, playerColor, difficulty);
  };

  // Swap sides
  const handleColorChange = (newColor: 'white' | 'black') => {
    if (isThinking) return;
    setPlayerColor(newColor);
    saveGameState(game, newColor, difficulty);
  };

  // Change difficulty
  const handleDifficultyChange = (newDiff: 'easy' | 'medium' | 'hard') => {
    if (isThinking) return;
    setDifficulty(newDiff);
    saveGameState(game, playerColor, newDiff);
  };

  // Calculate material balance & evaluation for UI visual meter
  const boardEvaluation = useMemo(() => {
    try {
      const score = evaluateBoard(game.board());
      // Convert centipawns to pawns value
      return score / 100;
    } catch (e) {
      return 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameFen, game]);

  // Generate readable move history list
  const formattedMoves = useMemo(() => {
    const pairs: { index: number; white: string; black?: string }[] = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      pairs.push({
        index: Math.floor(i / 2) + 1,
        white: moveHistory[i],
        black: moveHistory[i + 1],
      });
    }
    return pairs;
  }, [moveHistory]);

  // Chessboard styling parameters
  const darkSquareColor = theme === 'dark' ? '#334155' : '#64748b'; // slate-700 / slate-500
  const lightSquareColor = theme === 'dark' ? '#1e293b' : '#f1f5f9'; // slate-800 / slate-100

  // Calculate progress of evaluation bar (from 0 to 100%)
  // Center is 50%, White lead goes towards 100%, Black lead goes towards 0%
  const evaluationBarProgress = useMemo(() => {
    const clampedScore = Math.max(-10, Math.min(10, boardEvaluation)); // Clamp to [-10, 10]
    return 50 + clampedScore * 5; // maps [-10, 10] to [0, 100]
  }, [boardEvaluation]);

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 py-10 px-4 font-sans text-slate-800 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
              Chess Engine
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-base md:text-lg">
              Challenge a client-side Minimax AI engine running locally in your browser.
            </p>
          </div>
          <Link
            to="/"
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Board & Evaluation Bar */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center">
            {/* Evaluation Meter (Vertical on desktop, Horizontal on mobile) */}
            <div className="w-full md:w-6 h-4 md:h-[500px] flex flex-row md:flex-col items-center bg-zinc-300 dark:bg-slate-800 rounded-lg overflow-hidden shadow-inner relative">
              <div 
                className="bg-sky-500 dark:bg-sky-600 transition-all duration-500" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  transform: `scaleY(${evaluationBarProgress / 100})`,
                  transformOrigin: 'bottom'
                }}
              />
              <span className="absolute text-[9px] font-bold text-black dark:text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/50 px-1 rounded">
                {boardEvaluation > 0 ? `+${boardEvaluation.toFixed(1)}` : boardEvaluation.toFixed(1)}
              </span>
            </div>

            {/* Chessboard */}
            <div className="w-full max-w-[500px] aspect-square bg-white dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 shadow-2xl rounded-2xl overflow-hidden relative">
              <Chessboard
                options={{
                  id: "local-ai-board",
                  position: gameFen,
                  onPieceDrop: onDrop,
                  boardOrientation: playerColor,
                  darkSquareStyle: { backgroundColor: darkSquareColor },
                  lightSquareStyle: { backgroundColor: lightSquareColor },
                  allowDragging: !isThinking && !game.isGameOver(),
                }}
              />
              
              {/* Thinking overlay */}
              {isThinking && (
                <div className="absolute inset-0 bg-black/15 dark:bg-black/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-all">
                  <div className="bg-white/90 dark:bg-slate-900/90 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-3 border border-zinc-100 dark:border-slate-800">
                    <svg className="animate-spin h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">AI is planning...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Game Info & Controls */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Status Panel */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-zinc-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-md">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                Match Status
              </h2>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-zinc-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  {/* Status Indicator Pulse */}
                  <span className={`relative flex h-3 w-3`}>
                    {game.isGameOver() ? (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    ) : isThinking ? (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    ) : (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${game.isGameOver() ? 'bg-red-500' : isThinking ? 'bg-sky-500' : 'bg-emerald-500'}`}></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {statusMsg}
                  </span>
                </div>
                
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider bg-slate-200/50 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  {game.turn() === 'w' ? 'White Move' : 'Black Move'}
                </span>
              </div>
            </div>

            {/* Game Configuration */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-zinc-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-md">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Settings
              </h2>

              {/* Side Selector */}
              <div className="mb-5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Play Side</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleColorChange('white')}
                    className={`py-2 px-4 text-sm font-semibold rounded-xl transition-all duration-200
                      ${playerColor === 'white'
                        ? 'bg-sky-500 dark:bg-sky-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    White
                  </button>
                  <button
                    onClick={() => handleColorChange('black')}
                    className={`py-2 px-4 text-sm font-semibold rounded-xl transition-all duration-200
                      ${playerColor === 'black'
                        ? 'bg-sky-500 dark:bg-sky-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    Black
                  </button>
                </div>
              </div>

              {/* Difficulty Level */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">AI Difficulty</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['easy', 'medium', 'hard'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => handleDifficultyChange(level)}
                      className={`py-2 text-xs font-semibold rounded-xl capitalize transition-all duration-200
                        ${difficulty === level
                          ? 'bg-sky-500 dark:bg-sky-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Game Logs / History */}
            <div className="bg-white dark:bg-slate-800/80 backdrop-blur-md border border-zinc-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-md flex-1 flex flex-col min-h-[220px]">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Move History
              </h2>

              <div className="flex-1 overflow-y-auto max-h-[140px] pr-1.5 border border-zinc-100 dark:border-slate-800 rounded-xl p-3 bg-slate-50 dark:bg-slate-900/60 custom-scrollbar">
                {formattedMoves.length === 0 ? (
                  <span className="text-xs text-slate-400 italic block text-center py-6">No moves made yet</span>
                ) : (
                  <div className="grid grid-cols-3 gap-y-1.5 text-sm">
                    {formattedMoves.map((pair) => (
                      <React.Fragment key={pair.index}>
                        <span className="text-slate-400 font-medium">{pair.index}.</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{pair.white}</span>
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{pair.black || '...'}</span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {/* Game Control Actions */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <button
                  onClick={handleUndo}
                  disabled={isThinking || moveHistory.length === 0}
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-all duration-200 shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                  </svg>
                  Undo Move
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-all duration-200 shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Reset Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChessGame;
