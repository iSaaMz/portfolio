import { useState } from 'react';
import { skillsData } from '../../assets/data/skills';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  const [expanded, setExpanded] = useState(false);
  
  // limite le nombre de compétences affichées par défaut
  const displayLimit = expanded ? 100 : 6;

  // fonction pour basculer l'affichage complet/réduit
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section id="skills" className="section py-12">
      <div className="container">
        <h2 className="section-title mb-8">Mes compétences</h2>
        
        {/* catégories tab */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 animate-on-scroll">
          {skillsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-3 py-1.5 text-sm rounded-full transition-all ${
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
              <div key={category.category} className="space-y-4">
                {/* Skills grid in 2 columns on mobile, 3 on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                  {category.skills.slice(0, displayLimit).map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Show more/less button if there are more than the display limit */}
                {category.skills.length > 6 && (
                  <div className="flex justify-center mt-4">
                    <button 
                      onClick={toggleExpand}
                      className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      {expanded ? (
                        <>
                          <ChevronUp size={16} />
                          <span>Afficher moins</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          <span>Afficher plus ({category.skills.length - 6} autres)</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
        
        {/* Toutes les compétences techniques avec icônes (visible sur écrans larges) */}
        <div className="mt-12 animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6 text-center">Toutes mes compétences techniques</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {skillsData.flatMap(category => 
              category.skills.map(skill => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center justify-center p-2 rounded-lg border border-border bg-card text-center transition-all duration-300 hover:shadow-md hover:border-primary"
                >
                  {/* icone compétence */}
                  <div className="mb-1.5 h-10 w-10 flex items-center justify-center">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  {/* nom compétence */}
                  <span className="text-xs font-medium line-clamp-2">{skill.name}</span>
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