import React from 'react';

const projects = [
  {
    title: '3D Scene Reconstruction from a Single 360° Panorama',
    tags: ['360° Images', '3D Reconstruction', 'Computer Vision', 'Inpainting'],
    description:
      'Developed a pipeline to reconstruct 3D scenes from a single 360° panorama using 360MonoDepth and RGB fusion. Generated novel views via Fibonacci-sphere sampling and inpainting, and trained a 3D Gaussian Splatting model for inverse rendering tasks.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/panoto3D',
    stars: 3,
  },
  {
    title: 'Ultrasound Segmentation of Histotripsy Ablation',
    tags: ['PyTorch', 'Medical Imaging', 'Deep Learning'],
    description:
      'Built a DeepLabV3-based segmentation pipeline for ultrasound ablation imagery using Dice-Focal loss. Achieved 83% mean IoU and 97% accuracy. Collaborated with University of Chicago for annotated data.',
    demo: '',
    github: 'https://github.com/adi776borate/BubbleSegmentation.git',
    stars: 2,
  },
  {
    title: 'MiniTorch — A Lightweight PyTorch Clone',
    tags: ['Python', 'NumPy', 'Deep Learning'],
    description:
      'Built a minimalist deep learning framework using NumPy, featuring custom autograd engine, tensor broadcasting, and computation graph visualizer.',
    demo: '',
    github: 'https://github.com/Umang-Shikarvar/miniTorch',
    stars: 1,
  },
  {
    title: 'JPEG Compression on FPGA',
    tags: ['Verilog', 'FPGA', 'JPEG'],
    description:
      'Designed a complete JPEG compression pipeline on Verilog with UART communication between Basys3 FPGA and host. Achieved 50% compression (PSNR > 30).',
    demo: '',
    github: 'https://github.com/Reckadon/JPEG-Compressiont',
    stars: 5,
  },
];

const Projects: React.FC = () => (
  <section className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300 py-20 px-4 font-sans">
    <div className="max-w-screen-2xl mx-auto px-4 md:px-16">
      <h1 className="text-5xl font-extrabold text-black dark:text-white mb-2">All My Builds</h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-10">From just-for-fun to beating SOTA.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-md p-8 flex flex-col relative hover:shadow-lg transition-all"
          >
            {/* Stars badge in its own row, above the title */}
            <div className="flex justify-end mb-2">
              {project.stars !== undefined && (
                <span className="flex items-center gap-1 border border-orange-300 text-orange-600 px-3 py-1 rounded-full text-base font-semibold bg-white dark:bg-zinc-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                  {project.stars} stars
                </span>
              )}
            </div>
            {/* Title */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl font-bold underline text-black dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {project.title}
            </a>
            {/* Description */}
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 flex-1">
              {project.description}
            </p>
            {/* Tags/keywords at bottom */}
            <div className="flex flex-wrap gap-3 mb-6 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            {/* Demo link (if available) */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-2"
              >
                Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" /></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
    {/* Go to Top Link */}
    <div className="flex justify-center mt-12">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-lg text-blue-600 underline hover:text-blue-800 transition font-semibold"
        aria-label="Go to top"
      >
        Go to Top
      </button>
    </div>
  </section>
);

export default Projects; 