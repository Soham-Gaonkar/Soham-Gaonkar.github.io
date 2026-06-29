import React from 'react';
import { trackProjectOutboundClick } from '../utils/analytics';

const projects = [
  {
    title: '3D Scene Reconstruction from a Single 360° Panorama',
    tags: ['Computer Vision', '3D Reconstruction', 'Deep Learning', 'Inpainting'],
    description:
      'Designed PanoTo3D, an end-to-end pipeline for single-panorama 3D scene reconstruction and novel view synthesis using 3D Gaussian Splatting. Combined monocular depth estimation with RGB panoramas to construct dense point clouds; synthesized multi-view supervision via inpainting to stabilize geometry learning.',
    demo: 'https://antimatter15.com/splat/?url=https://raw.githubusercontent.com/Soham-Gaonkar/splat-host/main/pointcloud_newroom2.splat',
    github: 'https://github.com/Soham-Gaonkar/panoto3D',
    stars: 3,
  },
  {
    title: 'Ultrasound Segmentation of Histotripsy Ablation',
    tags: ['Deep Learning', 'Medical Imaging', 'Computer Vision', 'PyTorch'],
    description:
      'Developed a DeepLabV3-based segmentation model with custom combined Dice–Focal loss to segment histotripsy ablation bubble clouds in clinical ultrasound imagery. Improved mean IoU from 76% to 83% and accuracy from 95% to 97% over prior baselines. Accepted at IEEE IUS 2025, Netherlands.',
    demo: '',
    github: 'https://github.com/adi776borate/BubbleSegmentation.git',
    stars: 2,
  },
  {
    title: 'LLM Compression via Neural Alignment & Layer Merging',
    tags: ['Deep Learning', 'LLMs', 'Model Compression', 'Optimization'],
    description:
      'Investigated representation alignment limits in LLaMA-3 (8B), analyzing representation decay. Optimized merge weights via gradient and Bayesian search, and proposed neuron-aligned merging using the Hungarian algorithm, achieving +0.0864 MMLU improvement at 12.5% compression.',
    demo: '',
    github: 'https://github.com/Jain-Laksh/Layer-Merging-via-Manifold-Alignment',
    stars: 3,
  },
  {
    title: 'SWaT Anomaly Detection & Root Cause Analysis',
    tags: ['Anomaly Detection', 'LSTM Autoencoders', 'Causal Modeling', 'Industrial AI'],
    description:
      'Engineered a 15-stage LSTM Autoencoder anomaly detection pipeline for the SWaT industrial testbed dataset. Integrated Bayesian Networks for causal modeling and reconstruction-based root cause analysis (RCA), and local LLM path validation.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/RFC',
    stars: 2,
  },
  {
    title: 'NebulaEdit — AI Image Editor',
    image: '/assets/projects/nebulaedit.png',
    tags: ['Inter IIT Adobe PS', 'Deep Learning', 'Diffusion Models', 'React', 'FastAPI'],
    description:
      'Developed a prompt-driven image editing system using diffusion models and optimized inference pipelines. Submitted for the Adobe Inter IIT TechMeet challenge 2025, bringing professional-grade AI editing tools to the web.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/NebulaEdit',
    stars: 3,
  },
  {
    title: 'Graph Streaming Library',
    tags: ['Python', 'Jupyter Notebook', 'Graph Algorithms', 'Data Structures'],
    description:
      'Implemented algorithms and utilities for streaming graph data structures, enabling efficient analysis of large-scale graphs on-the-fly. Designed and validated using Python and Jupyter Notebooks.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/GraphStreamingLibrary',
    stars: 2,
  },
  {
    title: 'MiniTorch — A Lightweight PyTorch Clone',
    tags: ['Deep Learning', 'Python', 'Machine Learning', 'NumPy'],
    description:
      'Built a NumPy-only deep learning library from scratch supporting reverse-mode autograd, dynamic computation graphs, broadcasting, neural layers, and SGD/Adam optimizers.',
    demo: '',
    github: 'https://github.com/Umang-Shikarvar/miniTorch',
    stars: 2,
  },
  {
    title: 'JPEG Compression on FPGA',
    tags: ['Hardware', 'FPGA', 'Computer Vision', 'Verilog'],
    description:
      'Designed synthesizable Verilog modules and FSMs on Basys3 FPGA for discrete cosine transform (DCT) and coefficient pruning, achieving 50% compression with PSNR > 30 dB.',
    demo: '',
    github: 'https://github.com/Reckadon/JPEG-Compression',
    stars: 1,
  },
  // New projects appended below
  {
    title: 'Human Activity Recognition (HAR) Using Machine Learning',
    tags: ['Machine Learning', 'Python', 'Deep Learning', 'Data Analysis'],
    description:
      'Developed a HAR model using accelerometer data from the UCI‑HAR dataset. Applied exploratory data analysis (EDA), zero‑shot and few‑shot learning via the Groq API. Validated performance using Leave‑One‑Out and k‑fold cross‑validation.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/Human-Activity-Recognition.git',
    stars: 0,
  },
  {
    title: 'Text Generator Streamlit Application',
    tags: ['Machine Learning', 'NLP', 'Deep Learning', 'Streamlit'],
    description:
      'Built a next‑word generator using an MLP trained on recipe datasets. Trained 16 model variants across different context lengths, embedding dimensions, activations, and seeds. Visualized learned embeddings with t‑SNE for semantic insights.',
    demo: 'https://recipe-next-word-generator.streamlit.app/',
    github: 'https://github.com/ShardulJunagade/Next-Word-Generator',
    stars: 0,
  },
  {
    title: 'Image Classification Using Deep Learning Architectures',
    tags: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Machine Learning'],
    description:
      'Designed multiple VGG‑based architectures on a custom binary dataset. Achieved 100% test accuracy with full VGG19 fine‑tuning; 97.5% when tuning only final MLP layers. Enhanced performance via data augmentation (+5.5% testing accuracy).',
    demo: '',
    github: 'https://github.com/ShardulJunagade/ES-335-Assignment-4-2024-Fall.git',
    stars: 0,
  },
  {
    title: 'Image Reconstruction and Super-Resolution',
    tags: ['Computer Vision', 'Machine Learning', 'Deep Learning', 'Image Processing'],
    description:
      'Engineered image compression & reconstruction using matrix factorization and linear ridge regression. Enhanced feature mapping with Random Fourier Features (RFF) by removing dataset patches strategically. Achieved a Peak Signal‑to‑Noise Ratio (PSNR) of 32 dB.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/Image-Reconstruction.git',
    stars: 0,
  },
  {
    title: 'Facial Image Generation and Editing Using Variational Autoencoders',
    tags: ['Deep Learning', 'Computer Vision', 'Machine Learning', 'Image Generation'],
    description:
      'Developed a Variational Autoencoder trained on the CelebA dataset for realistic face generation. Performed latent‑space arithmetic to manipulate facial attributes (e.g., neutral → smiling). Demonstrated controlled image editing and expression modification via VAEs.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/VAE_celeba',
    stars: 0,
  },
  {
    title: 'FAQ NLP Assistant – Saras AI Institute',
    tags: ['NLP', 'Machine Learning', 'Web Development', 'Python'],
    description:
      'Built an NLP backend for an intelligent FAQ system to assist students. Preprocessed text with spaCy (lemmatization) & pyspellchecker (spelling correction). Implemented TF‑IDF retrieval with cosine‑similarity scoring for answer ranking.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/FAQ_website/',
    stars: 0,
  },
  {
    title: 'RoboRig: 2R Manipulator Simulation – HackRush 2024 (Runner‑Up)',
    tags: ['Robotics', 'Machine Learning', 'Python', 'Control Systems'],
    description:
      'Simulated a 2R robotic arm with trajectory planning, motion control, and energy optimization. Supported circular & custom user‑defined paths using feedforward/feedback control. Visualized real‑time arm motion with matplotlib animations.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/HackRush_Robotics',
    stars: 0,
  }
];

const Projects: React.FC = () => (
  <section className="min-h-screen bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 py-12 md:py-20 px-4 font-sans">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-2">All My Builds</h1>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 md:mb-10">From just-for-fun to beating SOTA.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md p-4 md:p-8 flex flex-col relative hover:shadow-lg transition-all overflow-hidden"
          >
            {('image' in project && project.image) && (
              <div className="-mx-4 -mt-4 md:-mx-8 md:-mt-8 mb-5 h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-700 border-b border-zinc-200 dark:border-zinc-700">
                <img 
                  src={project.image as string} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            )}
            {/* Title */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProjectOutboundClick(project.title, 'github')}
              className="block text-lg md:text-2xl font-bold underline text-black dark:text-white mb-3 md:mb-4 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {project.title}
            </a>
            {/* Description */}
            <p className="text-sm md:text-lg text-gray-700 dark:text-gray-200 mb-6 md:mb-8 flex-1">
              {project.description}
            </p>
            {/* Tags/keywords at bottom */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 md:px-4 py-1 md:py-2 bg-zinc-100 dark:bg-zinc-700 text-xs md:text-base font-medium rounded-full text-gray-700 dark:text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {/* Demo link (if available) */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProjectOutboundClick(project.title, 'demo')}
                className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                Demo
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" /></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
    {/* Go to Top Link */}
    <div className="flex justify-center mt-8 md:mt-12">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-base md:text-lg text-blue-600 underline hover:text-blue-800 transition font-semibold"
        aria-label="Go to top"
      >
        Go to Top
      </button>
    </div>
  </section>
);

export default Projects; 