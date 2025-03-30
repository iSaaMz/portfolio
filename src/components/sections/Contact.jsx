import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  // gère les modifs des champs du formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // gère envoi formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    try {
      // simultation envoi du email avec délai
      // TODO : à changer => en prod, utiliser un emailjs ou un autre service d'email pour l'envoi du mail
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // reset champs du formulaire après envoi
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({ submitting: false, submitted: true, error: false });
      
      // reset message succès
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Parlons de votre projet</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Vous avez un projet en tête ou vous souhaitez discuter de possibilités de collaboration ? 
              N&apos;hésitez pas à me contacter via le formulaire ou directement par email ou téléphone.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:sami.assiakh@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sami.assiakh@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Téléphone</h4>
                  <a 
                    href="tel:+33782282296" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    07 82 28 22 96
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Adresse</h4>
                  <address className="text-muted-foreground not-italic">
                    Argenteuil, Île-de-France, France
                  </address>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sami-assiakh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/sami-assiakh
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm animate-on-scroll">
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            {formStatus.submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-green-100 text-green-600 rounded-full p-3 mb-4">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-xl font-medium mb-2">Message envoyé avec succès !</h4>
                <p className="text-muted-foreground text-center">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-1"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium mb-1"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
                
                {formStatus.error && (
                  <div className="p-3 bg-red-100 text-red-600 rounded-md text-sm">
                    Une erreur s&apos;est produite lors de l&apos;envoi du message. Veuillez réessayer plus tard.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;