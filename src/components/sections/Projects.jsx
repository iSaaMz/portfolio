import { useState } from 'react';
import PropTypes from 'prop-types';
import { projectsData, projectCategories } from '../../assets/data/projects';
import { Github, ExternalLink, ChevronDown, ChevronUp, FolderKanban, Calendar } from 'lucide-react';

const ProjectListItem = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden mb-6 transition-all duration-300 
      hover:shadow-lg hover:border-primary/50 transform hover:-translate-y-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* project image */}
        <div className="relative h-64 md:h-full overflow-hidden" style={{ minHeight: "250px", maxHeight: "300px" }}>
          <img 
            src={project.image || "/assets/images/projects/placeholder.jpg"} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
            {/* badge categorie du projet */}
            <div className="p-3 flex justify-end">
              <span className={`px-3 py-1 text-xs rounded-full ${
                project.category === "E-commerce" ? "bg-blue-100 text-blue-800" :
                project.category === "Gestion & finance" ? "bg-green-100 text-green-800" :
                project.category === "Gestion & microservices" ? "bg-purple-100 text-purple-800" :
                project.category === "Jeux" ? "bg-yellow-100 text-yellow-800" :
                project.category === "DevOps & CI/CD" ? "bg-indigo-100 text-indigo-800" :
                project.category === "Formations & architecture" ? "bg-pink-100 text-pink-800" :
                project.category === "Portfolio" ? "bg-orange-100 text-orange-800" :
                "bg-gray-100 text-gray-800"
              }`}>
                {project.category}
              </span>
            </div>
            
            {/* title, links */}
            <div className="p-4 flex justify-between items-center">
              <span className="text-white font-medium">{project.title}</span>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-black/50 p-2 rounded-full hover:bg-primary transition-colors"
                    aria-label="Voir le code sur GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-black/50 p-2 rounded-full hover:bg-primary transition-colors"
                    aria-label="Voir la démo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* infos projet */}
        <div className="p-4 md:col-span-2">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          {/* technos */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          {/* button voir plus/moins */}
          <div className="flex justify-between items-center">
            <button
              onClick={toggleExpand}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              {expanded ? (
                <>
                  <span>Voir moins</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>Voir plus</span>
                  <ChevronDown size={16} />
                </>
              )}
            </button>
            
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm"
                >
                  <Github size={16} />
                  <span>Code source</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Voir le projet</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* expanded content, visible si expanded = true */}
      {expanded && (
        <div className="p-4 border-t border-border animate-slide-up">
          {/* Fonctionnalités */}
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Fonctionnalités</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {/* technos détaillées */}
          <div>
            <h4 className="text-lg font-medium mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// proptype definition
ProjectListItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    category: PropTypes.string.isRequired
  }).isRequired
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // filtrage  projets par catégorie
  const filteredProjects = activeCategory === "Tous" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Mes projets</h2>
        
        {/* filtrage par catégorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-on-scroll">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-background hover:bg-background/80 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* listing projets */}
        <div className="animate-on-scroll">
          {filteredProjects.map((project) => (
            <ProjectListItem key={`${project.id}-${project.title}`} project={project} />
          ))}
        </div>
        
        {/* si aucun projet trouvé */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FolderKanban size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
            <p className="text-muted-foreground">
              Aucun projet ne correspond à cette catégorie. Veuillez sélectionner une autre catégorie.
            </p>
          </div>
        )}
        
        {/* projets à venir */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Calendar size={18} />
            <span className="font-medium">Plus de projets à venir</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Mon portfolio est constamment mis à jour avec de nouveaux projets. 
            Revenez régulièrement pour découvrir mes dernières réalisations !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;