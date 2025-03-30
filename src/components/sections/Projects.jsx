import { useState } from 'react';
import { projectsData, projectCategories } from '../../assets/data/projects';
import { Github, ExternalLink, ChevronRight, FolderKanban, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [expandedProject, setExpandedProject] = useState(null);

  // filtrage projets par catégorie
  const filteredProjects = activeCategory === "Tous"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // bascule l'expansion des détails du projet
  const toggleProjectDetails = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Mes projets</h2>
        
        {/* filtres catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll">
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
        
        {/* grille projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card flex flex-col h-full animate-on-scroll">
              {/* overlay projet */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image || `/assets/images/projects/placeholder.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
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
              
              {/* contenu du projet */}
              <div className="flex-grow p-5 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* stacks utilisées */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* bouton affichage détails extensibles */}
                <button
                  onClick={() => toggleProjectDetails(project.id)}
                  className="mt-auto flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <span>{expandedProject === project.id ? "Voir moins" : "Voir plus"}</span>
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${
                      expandedProject === project.id ? "rotate-90" : ""
                    }`}
                  />
                </button>
                
                {/* details étendus */}
                {expandedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-border animate-slide-up">
                    <h4 className="text-lg font-medium mb-2">Fonctionnalités</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-4">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    {/* toutes les stacks */}
                    <h4 className="text-lg font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* liens */}
                    <div className="flex gap-4 mt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github size={16} />
                          Code source
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Voir le projet
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* aucun projet trouvé */}
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