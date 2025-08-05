import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';

const EMAILJS_SERVICE_ID = 'service_bzyg4pp';
const EMAILJS_TEMPLATE_ID = 'template_s4x5i9s';
const EMAILJS_USER_ID = '6hkz-MrEPXUlpBqb_'; //PUBLIC KEY

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
    error: false,
    errorMessage: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  
  // gère les modifs des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // validation à la saisie
    validateField(name, value);
  };
  
  // validation des champs
  const validateField = (name, value) => {
    let errors = {...formErrors};
    
    switch (name) {
      case 'name':
        if (value.trim() === '') {
          errors.name = 'Le nom est requis';
        } else if (value.length < 2) {
          errors.name = 'Le nom doit contenir au moins 2 caractères';
        } else {
          delete errors.name;
        }
        break;
      case 'email':
        { const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') {
          errors.email = 'L\'email est requis';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Format d\'email invalide';
        } else {
          delete errors.email;
        }
        break; }
      case 'subject':
        if (value.trim() === '') {
          errors.subject = 'Le sujet est requis';
        } else if (value.length < 5) {
          errors.subject = 'Le sujet doit contenir au moins 5 caractères';
        } else {
          delete errors.subject;
        }
        break;
      case 'message':
        if (value.trim() === '') {
          errors.message = 'Le message est requis';
        } else if (value.length < 10) {
          errors.message = 'Le message doit contenir au moins 10 caractères';
        } else {
          delete errors.message;
        }
        break;
      default:
        break;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // valide tout le formulaire
  const validateForm = () => {
    const fields = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    fields.forEach(field => {
      const fieldIsValid = validateField(field, formData[field]);
      if (!fieldIsValid) isValid = false;
    });
    
    return isValid;
  };
  
  // gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation complète avant envoi
    if (!validateForm()) return;
    
    setFormStatus({ ...formStatus, submitting: true, submitted: false, error: false });
    
    try {
      // envoi du formulaire via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      
      // réinitialiser les champs du formulaire après envoi
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({ submitting: false, submitted: true, error: false, errorMessage: '' });
      
      // réinitialiser le message de succès après un certain temps
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false, errorMessage: '' });
      }, 5000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: true,
        errorMessage: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    }
  };
  
  // animation de notification toast
  const Toast = ({ message, type, onClose }) => (
    <div className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 ${
      type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    } animate-in slide-in-from-right-full`}>
      {type === 'success' ? 
        <CheckCircle size={20} className="text-green-600" /> : 
        <AlertCircle size={20} className="text-red-600" />
      }
      <p>{message}</p>
      <button 
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-white/20"
        aria-label="Fermer"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
  
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Parlons de votre projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Vous avez un projet en tête ou vous souhaitez discuter de possibilités de collaboration ? 
                N&apos;hésitez pas à me contacter via le formulaire ou directement par email ou téléphone.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:sami.assiakh@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sami.assiakh@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <a 
                      href="tel:+33782282296" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      07 82 28 22 96
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <address className="text-muted-foreground not-italic">
                      Argenteuil, Île-de-France, France
                    </address>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
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
            </CardContent>
          </Card>
          
          {/* Contact form */}
          <Card className="animate-on-scroll">
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
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
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={formErrors.name ? 'border-red-500' : ''}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        className={formErrors.email ? 'border-red-500' : ''}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs">{formErrors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      className={formErrors.subject ? 'border-red-500' : ''}
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-xs">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Votre message..."
                      className={formErrors.message ? 'border-red-500' : ''}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full"
                    size="lg"
                  >
                    {formStatus.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Notification Alert */}
      {formStatus.error && (
        <Alert className="fixed bottom-4 right-4 z-50 max-w-md bg-destructive text-destructive-foreground">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {formStatus.errorMessage}
          </AlertDescription>
        </Alert>
      )}
    </section>
  );
}

export default Contact;