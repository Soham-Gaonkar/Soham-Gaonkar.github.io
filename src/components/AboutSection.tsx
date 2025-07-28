import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          {/* About Content */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate aspiring web developer with a strong foundation in modern web technologies. 
              I love creating beautiful, responsive, and user-friendly websites that make a difference. 
              My journey in web development started with curiosity and has evolved into a deep passion for 
              crafting digital experiences that users love.
            </p>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mt-6">
              I'm constantly learning and exploring new technologies to stay up-to-date with the latest 
              trends in web development. When I'm not coding, you can find me exploring new frameworks, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 