import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className='mb-5'>Hi, I'm</span>
              <span className="block bg-gradient-to-r mt-6 from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Kashyap Ghodasara
              </span>
            </h1>
            <p className="text-xl text-gray-300">
            "Passionate Full Stack Developer focusing on the MERN Stack and building scalable, user-friendly web applications. Eager to learn Cyber Security and Future Technologies"
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-purple-600 rounded-full hover:bg-purple-600/10 transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
              <img
                src="../../Profile image.jpg"
                alt="Profile"
                className="absolute inset-2 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;