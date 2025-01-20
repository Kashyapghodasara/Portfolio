import { education } from '../data/portfolio-data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate-fadeIn">
          Education Journey
        </h2>
        <div className="relative">
          {/* Timeline line with gradient animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 animate-pulse"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''
                  } animate-fadeIn`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-1/2"></div>
                <div
                  className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                           rounded-full border-4 border-purple-600 bg-black 
                           transition-all duration-300 hover:scale-125 hover:border-pink-500
                           hover:rotate-45"
                ></div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div
                    className="bg-black p-6 rounded-xl transform hover:-translate-y-2 
                             transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20
                             group"
                  >
                    <span className="text-purple-500 font-semibold inline-block mb-2 
                                   transform group-hover:scale-110 transition-transform duration-300">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 bg-gradient-to-r 
                                 from-purple-500 to-pink-500 bg-clip-text text-transparent 
                                 animate-gradient">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 mt-1 font-medium ">
                      {edu.institution}
                    </p>

                    {/* Academic Details with Fade-in Animation */}
                    <div className="space-y-2 mt-4 opacity-0 transform translate-y-4 
                                  group-hover:opacity-100 group-hover:translate-y-0 
                                  transition-all duration-300">
                      {edu.sem && (
                        <p className="text-gray-500">
                          <span className="font-semibold text-gray-400">Current Semester</span>: {edu.sem.toString()}
                        </p>
                      )}
                      {edu.SGPA && (
                        <p className="text-gray-500">
                          <span className="font-semibold text-gray-400">SGPA</span>: {edu.SGPA.toString()}
                        </p>
                      )}
                      {edu.CGPA && (
                        <p className="text-gray-500">
                          <span className="font-semibold text-gray-400">CGPA</span>: {edu.CGPA.toString()}
                        </p>
                      )}
                      {edu.PR && (
                        <p className="text-gray-500">
                          <span className="font-semibold text-gray-400">PR</span>: {edu.PR.toString()}
                        </p>
                      )}
                      {edu.description && (
                        <p className="text-gray-500 mt-2 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;