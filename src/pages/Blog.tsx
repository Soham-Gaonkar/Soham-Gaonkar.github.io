import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'iit-gandhinagar-ai-journey',
    title: 'From Theory to SOTA: My Journey in Artificial Intelligence at IIT Gandhinagar',
    date: 'June 2026',
    readTime: '5 min read',
    tags: ['IIT Gandhinagar', 'Artificial Intelligence', 'Research', 'Life'],
    excerpt: 'Reflecting on my first three years at IITGN: achieving Department Rank 1, conducting medical imaging and computer vision research, and mentoring the next batch of AI enthusiasts.',
    content: [
      'Joining the Indian Institute of Technology Gandhinagar (IITGN) in 2023 as part of the newly launched B.Tech program in Artificial Intelligence was a major milestone. Over the past three years, the journey has transitioned from learning foundational calculus to building state-of-the-art model compression algorithms and presenting medical imaging research on international stages.',
      'Here is a look back at my experiences, milestones, and what makes the AI journey at IITGN so unique.',
      'image:/assets/logos/iitgn-logo.png',
      '### 1. Navigating the Foundations: Academics and Mentorship',
      'IIT Gandhinagar\'s academic curriculum is designed to be highly hands-on and interdisciplinary. Early on, I dived into rigorous coursework like Mathematical Foundations for AI, Computer Vision, and Software Tools for AI. The hard work paid off: I achieved Department Rank 1 in the Artificial Intelligence branch with a CPI of 9.3/10, was placed on the Dean\'s List, and received the Academic Excellence Scholarship for the 2024-2025 academic year.',
      'But learning is only half the equation; teaching solidifies it. In late 2024, I served as an ADH Mentor for MA 103: Calculus of Single Variable and Linear Algebra, leading problem-solving sessions for over 300 first-year students. Later, I joined the core committee of the IITGN Machine Learning Club, organizing workshops and mentoring junior students as they stepped into their first neural network projects.',
      'image:/assets/iitgn-bg.jpg',
      '### 2. Dive into Research: CVIG Lab & Medical Imaging',
      'Research at IITGN isn\'t restricted to graduate students. In the summer of 2025, I joined the Computer Vision and Image Graphics (CVIG) Lab under the guidance of Prof. Shanmuganathan Raman. My work focused on PanoTo3D—reconstructing dense 3D scene geometry and novel view synthesis from single 360° panoramas using 3D Gaussian Splatting.',
      'In parallel, I collaborated with Prof. Himanshu Shekhar on histotripsy ultrasound segmentation. We designed a DeepLabV3 segmentation pipeline incorporating a custom Dice-Focal loss function to isolate ablation bubble clouds under heavy speckle noise. The results were outstanding: we improved mean IoU to 83% and accuracy to 97% over existing baselines. Our manuscript was accepted for presentation at the IEEE International Ultrasonics Symposium (IUS 2025) in the Netherlands!',
      'image:/assets/iitgn-start.png',
      '### 3. Engineering and Hackathons',
      'Beyond theoretical research, the annual hackathons and tech meets at IITGN provided a canvas to build fast and push boundaries. At HackRush (our annual hackathon), my team secured the Runner-Up position in the Robotics track by building RoboRig—a 2R manipulator arm simulation with real-time feedback controls and trajectory optimization.',
      'Later, we competed in the highly selective Amazon ML Challenge, placing in the Top 200 out of over 20,000 teams nationwide. These experiences taught me how to work effectively in cross-functional teams under intense time constraints.',
      '### 4. Looking Ahead',
      'Reflecting on these first three years, IIT Gandhinagar has given me the perfect environment to grow as a researcher and developer. As I prepare for my upcoming research internship at Samsung R&D Institute Noida, I am excited to carry forward the skills, friendships, and curiosity cultivated here.'
    ]
  },
  {
    id: 'life-at-samsung-rnd-noida',
    title: 'Beyond the Code: My Experience Interning at Samsung R&D Institute Noida',
    date: 'June 2026',
    readTime: '5 min read',
    tags: ['Samsung R&D', 'Internship', 'Life', 'Noida'],
    excerpt: 'An inside look at the workspace culture, life in Noida/Delhi, and the rewarding day-to-day experience of interning at Samsung R&D Institute (SRI-N) beyond the technical tasks.',
    content: [
      'While the technical challenges of optimizing vision-language models for mobile NPUs have been fascinating, an internship at a major corporate R&D center like Samsung R&D Institute Noida (SRI-N) is about so much more than just writing code. From exploring the massive campus in Sector 62 to navigating the Delhi Metro and grabbing tea with team members, the day-to-day life here has been a vibrant journey.',
      'Here is an inside look at what it is actually like to work at Samsung R&D Noida, and the life experiences that defined my summer here.',
      '### 1. The Campus and Daily Life at SRI-N',
      'Located in Noida Sector 62, the Samsung office is a massive, modern complex. Walking in for the first time, you immediately feel the scale of the operation—thousands of engineers working on cutting-edge features for Samsung\'s global ecosystem. The workspace is open, bustling, and designed for collaboration.',
      'One of the highlights of daily office life has to be the dining and cafeteria facilities. With a wide variety of food options, coffee stations, and recreational spaces, it is easy to unwind during breaks. Grab-and-go snack bars and tea-coffee machines serve as the perfect spots for meeting other interns from different departments and exchanging research ideas.',
      'image:/assets/samsung.jpeg',
      '### 2. Team Culture and Mentorship',
      'Working at the Next Level Labs within the on-device AI team has been incredibly welcoming. The culture is collaborative rather than hierarchical. Senior researchers and managers are always approachable, happy to white-board a complex optimization problem, or chat about the latest industry trends over lunch.',
      'We have regular team bonding sessions and informal gatherings that help break the ice. It is a space where asking questions is highly encouraged, and even as an intern, your ideas on model compilation and hardware efficiency are listened to and valued.',
      '### 3. Living in Noida and Navigating Delhi NCR',
      'Apart from the office, adjusting to life in Noida and the wider Delhi NCR region has been an adventure in itself. Noida\'s wide roads, high-rise buildings, and sprawling shopping hubs like DLF Mall of India contrast beautifully with the historic, bustling heart of Delhi just a metro ride away.',
      'Commuting on the Delhi Metro has become a staple experience—navigating the Blue Line during rush hour is a rite of passage for anyone in NCR! On weekends, this connectivity made it incredibly easy to escape the corporate routine, explore the historical monuments of Old Delhi, visit local street food spots, or hang out with friends in Connaught Place.',
      '### 4. Key Takeaways',
      'An internship is a golden window to understand what corporate research looks like, but it is also about building a network of peers and mentors who share your passions. The friendships, tea breaks, and weekend explorations in NCR have made my time at Samsung R&D Noida an unforgettable chapter of my undergraduate years.'
    ]
  },
  {
    id: 'on-device-vlm-optimization',
    title: 'On-Device VLM & LLM Inference: Optimizing Attention Layouts for Mobile Chipsets',
    date: 'June 2026',
    readTime: '6 min read',
    tags: ['On-Device AI', 'Model Compression', 'Samsung R&D', 'Mobile GPU/NPU'],
    excerpt: 'An in-depth look at memory bandwidth bottlenecks in modern transformers and strategies to deploy multimodal models on mobile chipsets using custom attention layouts and quantization.',
    content: [
      'As Large Language Models (LLMs) and Vision-Language Models (VLMs) become central to user experiences, deploying them locally on mobile devices has transitioned from a luxury to a necessity. On-device inference guarantees user privacy, zero latency variation due to network conditions, and offline capability. However, the hardware constraints of mobile chipsets (especially NPUs and mobile GPUs) present extreme execution bottlenecks.',
      'The primary bottleneck in transformer inference is not raw compute power, but memory bandwidth—specifically during the autoregressive decoding stage (KV cache access). In this article, I outline key optimizations that enable running dense multimodal models locally.',
      '### 1. The KV Cache Bandwidth Bottleneck',
      'During LLM token generation, the model processes tokens sequentially. For each new token, the Key and Value states of all previous tokens must be retrieved from memory to compute attention. This operation is highly memory-bound: the arithmetic intensity (compute-to-memory ratio) is extremely low, meaning the NPU spends most of its cycles waiting for data to arrive from RAM rather than doing matrix multiplications.',
      'To mitigate this on mobile chipsets, we optimize the KV cache layout using Page-styled memory allocations (mirroring PagedAttention) to reduce cache fragmentation and avoid expensive memory copies during token generation.',
      '### 2. Quantization-Aware Deployment',
      'Standard FP16 weights are too large for mobile devices, leading to rapid thermal throttling and high battery drain. Quantizing weights to INT4 or INT8 is essential. However, naive post-training quantization (PTQ) often degrades VLM visual reasoning scores (such as spatial layout estimation or fine-grained details).',
      'By applying Quantization-Aware Training (QAT) and identifying "activation outliers" (channels with abnormally high activations), we selectively keep sensitive attention layers in FP16 while quantizing the feed-forward networks (FFN) to INT4. This hybrid precision approach preserves the model\'s visual grounding accuracy while reducing its size by 70%.',
      '### 3. Profiling Attention on Mobile GPUs/NPUs',
      'Mobile system-on-chips (SoCs) utilize shared unified memory architectures. Using custom kernel profiling, we identified that standard multi-head attention kernels trigger excessive global memory roundtrips. Writing custom fused-attention kernels that cache intermediate queries and keys directly in the GPU\'s local shared memory (SRAM) reduces overall memory access overhead by up to 40%, yielding a 1.8x speedup in time-to-first-token latency.'
    ]
  },
  {
    id: 'representation-manifold-layer-merging',
    title: 'Why Static Similarity Fails in LLM Layer Merging: A Representation Manifold View',
    date: 'October 2025',
    readTime: '5 min read',
    tags: ['Model Compression', 'Representation Learning', 'Research', 'Optimization'],
    excerpt: 'Exploring how representation manifolds shift across deep networks and how neuron-aligned weight permutation via the Hungarian algorithm salvages layer merging in LLaMA-3.',
    content: [
      'Layer merging has emerged as a promising technique for LLM compression. Unlike pruning, which drops entire layers and leaves structural gaps, layer merging compresses a model by aligning and combining adjacent neural blocks. However, standard manifold-alignment techniques assume a static representational geometry across layers—an assumption that breaks down under rigorous evaluation.',
      'In this article, I share insights from my research into layer similarity and our proposed neuron-aligned merging framework.',
      '### 1. The Flaw of Static Similarity Assumptions',
      'Most merging algorithms calculate the similarity between Layer N and Layer N+1 by feeding a fixed calibration dataset and measuring the cosine similarity of their hidden state outputs. However, deep networks construct abstract representation manifolds that deform dynamically based on the input prompt language and task domain.',
      'Our analysis of representation manifolds in LLaMA-3 (8B) revealed that task-specific features decay rapidly when forced through a static, average-aligned merge. This representational drift results in immediate catastrophic forgetting of complex reasoning abilities.',
      '### 2. Gradient and Bayesian Weight Optimization',
      'To prevent this decay, we optimize the interpolation merge weights (α) dynamically. Instead of using a global α value, we implement a Bayesian optimization search over a validation set to compute layer-specific merge weights. This ensures that layers representing critical semantic abstractions are weighted more heavily, while redundant, noise-dominated layers are compressed more aggressively.',
      '### 3. Permutation Alignment via the Hungarian Algorithm',
      'One major issue in merging weights directly is that corresponding neurons in adjacent layers are not necessarily index-aligned. A neuron at index K in Layer N might serve a completely different semantic function than the neuron at index K in Layer N+1.',
      'To solve this, we formulated the neuron alignment problem as a linear sum assignment problem. By calculating the bipartite matching cost matrix between weight representations and applying the Hungarian algorithm, we permute the weights of Layer N+1 to match Layer N before merging. This alignment step alone preserved LLaMA-3\'s language consistency, leading to a +0.0864 MMLU score improvement at 12.5% compression over unaligned baselines.'
    ]
  },
  {
    id: 'ultrasound-segmentation-dice-focal-loss',
    title: 'Ultra-Deep Segmentation: DeepLabV3 with custom Dice-Focal loss for Histotripsy Delineation',
    date: 'April 2025',
    readTime: '4 min read',
    tags: ['Computer Vision', 'Medical Imaging', 'Deep Learning', 'PyTorch'],
    excerpt: 'An investigation into segmenting low-contrast ablation bubble clouds in clinical ultrasound imagery, overcoming severe speckle noise and label imbalance.',
    content: [
      'Histotripsy is an emerging non-invasive ablation technology that uses focused ultrasound pulses to mechanically destroy target tissue. Delineating the ablation zone in real-time ultrasound imaging is critical to ensure complete treatment and avoid damaging surrounding healthy organs. However, ultrasound imagery is notoriously difficult to segment automatically due to severe speckle noise, low target contrast, and acoustic shadowing.',
      'In collaboration with researchers from the University of Chicago radiology department, we designed a robust CNN-based segmentation pipeline to address these challenges.',
      '### 1. The Challenge of Imbalanced Ablation Zones',
      'In clinical ultrasound sweeps, the histotripsy bubble cloud (the active ablation region) often occupies only a tiny fraction of the total frame area. When training standard segmentors (like UNet or DeepLabV3) with binary cross-entropy (BCE) loss, the model quickly gets biased toward predicting background pixels, resulting in low sensitivity (recall) and missed target edges.',
      '### 2. Formulating the Dice-Focal Loss',
      'To solve the extreme foreground-background class imbalance, we combined Dice Loss (which optimizes region overlap directly) with Focal Loss (which downweights easy background pixels and focuses the network on hard, ambiguous edge pixels).',
      'The custom combined loss is formulated as:',
      '$$L_{total} = \\lambda L_{Dice} + (1 - \\lambda) L_{Focal}$$',
      'Through controlled hyperparameter sweeps, we found that setting λ = 0.6 balanced global shape overlap with boundary precision, preventing the model from collapsing under high acoustic shadow noise.',
      '### 3. Robustness on Early-Pulse Frames',
      'A key challenge in clinical deployment is segmenting the early phase of the ultrasound pulse, where the bubble cloud is faint and low-contrast. By introducing target-mask jittering and noise injection augmentations during training, our model raised mean Intersection over Union (IoU) to 83% (an absolute +7% increase over baseline) and test accuracy to 97%, guaranteeing safe monitoring throughout the entire ablation cycle.'
    ]
  }
];

const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const location = useLocation();

  // Scroll to top on page or post change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePost]);

  // Support direct linking via hash or search queries (e.g. /blog?post=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const postId = params.get('post');
    if (postId) {
      const matched = blogPosts.find((p) => p.id === postId);
      if (matched) {
        setActivePost(matched);
      }
    } else {
      setActivePost(null);
    }
  }, [location.search]);

  // Support back navigation
  const handleBackToList = () => {
    setActivePost(null);
    window.history.pushState({}, '', '/blog');
  };

  const handleReadPost = (post: BlogPost) => {
    setActivePost(post);
    window.history.pushState({}, '', `/blog?post=${post.id}`);
  };

  if (activePost) {
    return (
      <article className="min-h-screen bg-zinc-50 dark:bg-slate-900 transition-colors duration-300 py-10 md:py-20 px-4 font-sans text-slate-800 dark:text-slate-100">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 mb-8 text-blue-600 dark:text-blue-400 font-semibold hover:underline group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </button>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {activePost.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-zinc-200 dark:bg-slate-700 text-xs font-semibold rounded-full text-slate-700 dark:text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight mb-4" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
              {activePost.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-400 font-medium">
              <span>{activePost.date}</span>
              <span>•</span>
              <span>{activePost.readTime}</span>
            </div>
          </header>

          <hr className="border-zinc-200 dark:border-slate-800 mb-10" />

          {/* Body Content */}
          <div className="text-base sm:text-lg leading-relaxed space-y-6 select-text">
            {activePost.content.map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl font-bold text-black dark:text-white mt-10 mb-4 pt-4" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('$$')) {
                return (
                  <div key={index} className="flex justify-center my-8 select-text">
                    <div className="px-6 py-4 bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700/50 rounded-2xl font-serif text-lg sm:text-2xl text-center shadow-inner text-slate-800 dark:text-slate-200 leading-normal">
                      <span className="italic font-semibold">L</span><sub>total</sub> = &lambda; &middot; <span className="italic font-semibold">L</span><sub>Dice</sub> + (1 - &lambda;) &middot; <span className="italic font-semibold">L</span><sub>Focal</sub>
                    </div>
                  </div>
                );
              }
              if (paragraph.startsWith('image:')) {
                const imagePath = paragraph.replace('image:', '').trim();
                const isLogo = imagePath.includes('logo');
                return (
                  <div key={index} className={`my-8 overflow-hidden mx-auto ${isLogo ? 'max-w-[140px]' : 'rounded-2xl shadow-lg border border-zinc-200 dark:border-slate-700/50 max-w-2xl bg-white dark:bg-slate-800 p-1'}`}>
                    <img 
                      src={imagePath} 
                      alt="Blog visual" 
                      className={`h-auto object-contain mx-auto ${isLogo ? 'w-[140px]' : 'w-full max-h-[480px] rounded-xl'}`} 
                    />
                  </div>
                );
              }
              return (
                <p key={index} className="text-gray-700 dark:text-slate-200">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <hr className="border-zinc-200 dark:border-slate-800 mt-16 mb-8" />

          {/* Footer Back button */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBackToList}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Articles
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-500 hover:text-black dark:hover:text-white transition font-medium"
            >
              Back to Top
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-100 dark:bg-slate-900 transition-colors duration-300 py-12 md:py-20 px-4 font-sans text-slate-800 dark:text-slate-100">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white mb-4" style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}>
            Research & Thoughts
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
            Explaining deep learning optimizations, model alignment, and medical imaging work.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 border border-zinc-200/50 dark:border-slate-700/50 group"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-400 dark:text-slate-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <button
                  onClick={() => handleReadPost(post)}
                  className="text-left block text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 hover:underline mb-4 leading-snug"
                  style={{ fontFamily: 'Inter, DM Sans, sans-serif' }}
                >
                  {post.title}
                </button>

                {/* Excerpt */}
                <p className="text-sm md:text-base text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom tag + read link */}
              <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-zinc-100 dark:border-slate-700/50">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-zinc-100 dark:bg-slate-900 text-xs font-semibold rounded text-slate-500 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleReadPost(post)}
                  className="w-full text-center py-3 bg-zinc-100 dark:bg-slate-900 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black font-semibold text-sm md:text-base rounded-2xl transition duration-300"
                >
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;