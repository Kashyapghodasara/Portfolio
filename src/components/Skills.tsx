import { skills } from '../data/portfolio-data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {['frontend', 'backend', 'tools'].map((category, index) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-semibold text-white capitalize mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-purple-600/10 border border-purple-500/20 
                               text-purple-400 rounded-lg hover:bg-purple-600/20 
                               transition-all duration-300 hover:scale-105 cursor-default
                               animate-fadeIn"
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;