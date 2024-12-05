import React, { useState, useEffect } from 'react';

// Component for individual project cards
const ProjectCard = ({ title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <a href="3" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
  </div>
);

// Footer social media icon component
const FooterIcon = ({ href, iconPath }) => (
  <a href={href} className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300" aria-label="GitHub">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={iconPath} />
    </svg>
  </a>
);

// Main App component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check for dark mode preference on load
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (storedDarkMode || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
  const toggleMobileMenu = () => setMobileMenuOpen(prevState => !prevState);

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-300">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-primary-light dark:text-primary-dark">Muzakki </a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">Projects</a>
              <a href="#contact" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">Contact</a>
            </div>
            <div className="flex items-center">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 mr-4" aria-label="Toggle dark mode">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
              <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none" aria-label="Toggle mobile menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 transition-colors duration-300">
            <a href="#about" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Abouts</a>
            <a href="#projects" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Projects</a>
            <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Contact</a>
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 py-20">
        <section id="about" className="mb-20 pt-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-light dark:text-primary-dark">Hi, I'm Muzakki fadlil</h1>
          <p className="text-mb mb-8">a student at Prakarya Internasional High School, specializing in software development and game design. I’m deeply passionate about technology and coding, and I’m excited to explore how programming can shape the digital experiences of tomorrow. Currently, I’m focused on mastering the fundamentals of software development while diving into game design and exploring different game types.<br></br>
          Skills:
          Web Development: HTML, CSS, JavaScript, Laravel
          Game Development: Unity, C#, Game Mechanics
          Programming: Python, Java
          Version Control: Git, GitHub
          Problem-Solving: Algorithm design, debugging, optimization
          Soft Skills: Collaboration, Communication, Time Management<br></br>
          im always looking for new challenges and opportunities to learn and grow. If you re interested in working together or just want to talk tech, feel free to reach out!</p>
          <a href="#contact" className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">Get in touch</a>
        </section>

        <section id="projects" className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 text-primary-light dark:text-primary-dark">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="Responsive Blog Platform" description="A fully responsive blog platform built with Next.js and Tailwind CSS." />
            <ProjectCard title="Task Management App" description="A React-based task management application with drag-and-drop functionality." />
            <ProjectCard title="E-commerce Website" description="A full-stack e-commerce platform built with Node.js, Express, and MongoDB." />
            <ProjectCard title="Weather Dashboard" description="A weather dashboard using OpenWeatherMap API and Chart.js for data visualization." />
          </div>
        </section>

        <section id="contact" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 text-primary-light dark:text-primary-dark">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all duration-300" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-all duration-300" required></textarea>
            </div>
            <button type="submit" className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-12 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 . All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterIcon href="https://github.com/Badrnej?tab=repositories" iconPath="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237" />
            <FooterIcon href="https://www.linkedin.com/in/badr-nejaa" iconPath="M19.618 19.618c2.484-2.483 2.484-6.513 0-9.596-2.485-2.483-6.513-2.483-9.596 0" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
