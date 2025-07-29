import React from 'react';

const projects = [
  {
    title: '3D Scene Reconstruction from a Single 360° Panorama',
    tags: ['Computer Vision', '3D Reconstruction', 'Deep Learning', 'Inpainting'],
    description:
      'Developed a pipeline to reconstruct 3D scenes from a single 360° panorama using 360MonoDepth and RGB fusion. Generated novel views via Fibonacci-sphere sampling and inpainting, and trained a 3D Gaussian Splatting model for inverse rendering tasks.',
    demo: '',
    github: 'https://github.com/Soham-Gaonkar/panoto3D',
    stars: 1,
  },
  {
    title: 'Ultrasound Segmentation of Histotripsy Ablation',
    tags: ['Deep Learning', 'Medical Imaging', 'Computer Vision', 'PyTorch'],
    description:
      'Built a DeepLabV3-based segmentation pipeline for ultrasound ablation imagery using Dice-Focal loss. Achieved 83% mean IoU and 97% accuracy. Collaborated with University of Chicago for annotated data.',
    demo: '',
    github: 'https://github.com/adi776borate/BubbleSegmentation.git',
    stars: 2,
  },
  {
    title: 'MiniTorch — A Lightweight PyTorch Clone',
    tags: ['Deep Learning', 'Python', 'Machine Learning', 'NumPy'],
    description:
      'Built a minimalist deep learning framework using NumPy, featuring custom autograd engine, tensor broadcasting, and computation graph visualizer.',
    demo: '',
    github: 'https://github.com/Umang-Shikarvar/miniTorch',
    stars: 3,
  },
  {
    title: 'JPEG Compression on FPGA',
    tags: ['Hardware', 'FPGA', 'Computer Vision', 'Verilog'],
    description:
      'Designed a complete JPEG compression pipeline on Verilog with UART communication between Basys3 FPGA and host. Achieved 50% compression (PSNR > 30).',
    demo: '',
    github: 'https://github.com/Reckadon/JPEG-Compression',
    stars: 2,
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
            {project.tags && (
              <div className="flex flex-wrap gap-3 mb-6 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-200">
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