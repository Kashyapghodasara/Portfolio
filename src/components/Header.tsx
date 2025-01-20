import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
/* import { socialLinks } from '../data/portfolio-data'; */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['About', 'Skills', 'Education', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">Portfolio</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a href={"https://github.com/Kashyapghodasara"} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href={"https://www.linkedin.com/in/kashyap-ghodasara-323b11314/"} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
             {/*  <a href={'https://twitter.com/@Kashyap_patel15'} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;