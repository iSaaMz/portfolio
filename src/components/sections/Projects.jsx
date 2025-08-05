import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { projectsData, projectCategories } from '../../assets/data/projects';
import { Github, ExternalLink, ChevronDown, ChevronUp, FolderKanban, Calendar, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Separator } from '../ui/separator';

// modal component display images
const ImageModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  if (!isOpen) return null;
  
  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // empeche la propagation du clic sur l'image au modal
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  const handleClose = (e) => {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
    onClose(e);
  };
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose(e);
      if (e.key === 'ArrowLeft') handlePrevImage(e);
      if (e.key === 'ArrowRight') handleNextImage(e);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-hidden"
      onClick={handleClose}
    >
      <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col">
        {/* Bouton de fermeture */}
        <button 
          className="absolute top-2 right-2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          onClick={handleClose}
          aria-label="Fermer"
        >
          <X size={24} />
        </button>
        
        {/* Conteneur d'image avec contrôles de navigation */}
        <div className="relative flex-grow flex items-center justify-center">
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Image précédente"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={handleNextImage}
                className="absolute right-4 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Image suivante"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Image actuelle */}
          <div className="w-full h-full flex items-center justify-center" onClick={handleImageClick}>
            <img
              src={images[currentIndex]}
              alt={`Image en plein écran ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        
        {/* Indicateur de position */}
        {images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Compteur d'images */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired
};

// slider d'images component
const ImageSlider = ({ images, projectTitle, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const imageArray = Array.isArray(images) && images.length > 0 
    ? images 
    : [images || "/assets/images/placeholder.jpg"];
  
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (imageArray.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imageArray.length]);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden group">
      {/* Images */}
      <div className="relative h-full w-full">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onClick={() => onImageClick(currentIndex)}
          >
            <img
              src={image}
              alt={`${projectTitle} - image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
            {/* Zoom icon pour indiquer que l'image est cliquable */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={36} className="text-white" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Contrôles du slider */}
      {imageArray.length > 1 && (
        <>
          {/* Flèches de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Indicateurs de position */}
          <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center space-x-2">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  projectTitle: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired
};

const ProjectListItem = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openImageModal = (index) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const hasMultipleImages = project.images && Array.isArray(project.images) && project.images.length > 0;
  const projectImages = hasMultipleImages ? project.images : [project.image];

  const getCategoryColor = (category) => {
    const colors = {
      "E-commerce": "bg-blue-500",
      "Gestion & finance": "bg-green-500",
      "Gestion & microservices": "bg-purple-500",
      "Jeux": "bg-yellow-500",
      "DevOps & CI/CD": "bg-indigo-500",
      "Formations & architecture": "bg-pink-500",
      "Portfolio": "bg-orange-500"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <Card className="mb-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Project image */}
        <div className="relative h-64 md:h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
          <img 
            src={project.image || "/assets/images/projects/placeholder.jpg"} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openImageModal(0)}
          />
          <div className="absolute top-3 right-3">
            <Badge className={getCategoryColor(project.category)}>
              {project.category}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn size={36} className="text-white" />
          </div>
        </div>
        
        {/* Project info */}
        <div className="md:col-span-2 p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          
          <CardContent className="p-0 space-y-4">
            {/* Technologies preview */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ChevronDown size={16} />
                    Voir plus
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      {project.title}
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Image gallery */}
                    {hasMultipleImages && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Galerie d&apos;images</h4>
                        <div className="h-80 rounded-lg overflow-hidden bg-black/5">
                          <ImageSlider 
                            images={projectImages} 
                            projectTitle={project.title} 
                            onImageClick={openImageModal}
                          />
                        </div>
                      </div>
                    )}
                    
                    <Separator />
                    
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Fonctionnalités</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    {/* All technologies */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </Button>
              )}
              
              {project.demo && (
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Démo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
      
      {/* Modal d'image plein écran */}
      <ImageModal 
        isOpen={modalOpen}
        onClose={closeImageModal}
        images={projectImages}
        currentIndex={modalImageIndex}
        setCurrentIndex={setModalImageIndex}
      />
    </Card>
  );
};

// proptype definition
ProjectListItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    category: PropTypes.string.isRequired
  }).isRequired
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // filtrage projets par catégorie
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
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
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
          <Card className="text-center py-12">
            <CardContent className="pt-6">
              <FolderKanban size={48} className="mx-auto text-muted-foreground mb-4" />
              <CardTitle className="mb-2">Aucun projet trouvé</CardTitle>
              <CardDescription>
                Aucun projet ne correspond à cette catégorie. Veuillez sélectionner une autre catégorie.
              </CardDescription>
            </CardContent>
          </Card>
        )}
        
        {/* projets à venir */}
        <Card className="mt-16 text-center animate-on-scroll">
          <CardContent className="pt-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar size={18} className="text-primary" />
              <span className="font-medium text-primary">Plus de projets à venir</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mon portfolio est constamment mis à jour avec de nouveaux projets. 
              Revenez régulièrement pour découvrir mes dernières réalisations !
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;