import { useState } from 'react';
import { skillsData } from '../../assets/data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Mes compétences</h2>
        
        {/* catégories tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-on-scroll">
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        {/* compétences visualisation */}
        <div className="animate-on-scroll">
          {skillsData
            .filter(category => category.category === activeCategory)
            .map((category) => (
              <div key={category.category} className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
        
        {/* Toutes les compétences techniques avec icônes (visible sur écrans larges) */}
        <div className="mt-16 animate-on-scroll hidden md:block">
          <h3 className="text-2xl font-semibold mb-8 text-center">Toutes mes compétences techniques</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData.flatMap(category => 
              category.skills.map(skill => (
                <div 
                  key={skill.name} 
                  className="skill-item group"
                  style={{
                    backgroundColor: `rgba(var(--primary-rgb), ${skill.level / 200})`,
                    borderColor: `rgba(var(--primary-rgb), ${skill.level / 100})`
                  }}
                >
                  {/* icone compétence */}
                  <div className="mb-3 h-16 w-16 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  {/* nom compétence */}
                  <div>
                    <span className="font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                    {/* indicateur de niveau de la compétence */}
                    <div className="mt-2 w-12 h-1 mx-auto rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;