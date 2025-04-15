export const projectsData = [
    {
      id: 1,
      title: "HardWareHouse",
      description: "Plateforme de gestion de devis et de factures pour les PME du secteur informatique.",
      image: "/assets/images/projects/hardwarehouse.png",
      images: [
        "/assets/images/projects/hardwarehouse.png",
        "/assets/images/projects/hardwarehouse-facture.png", 
        "/assets/images/projects/hardwarehouse-dashboard.jpeg",
        "/assets/images/projects/hardwarehouse-rapports-financiers.jpeg",
        "/assets/images/projects/hardwarehouse-product-category.jpeg",
        "/assets/images/projects/hardwarehouse-pdf-generated.jpeg", 
      ],
      technologies: ["Symfony 6.2", "Twig", "JavaScript", "TailwindCSS", "SASS", "PostgreSQL"],
      features: [
        "Création, modification et suppression de devis et factures",
        "Gestion complète des clients et des produits",
        "Envoi d'e-mails automatiques",
        "Suivi des paiements et gestion des statuts",
        "Génération de rapports financiers",
        "Gestion des utilisateurs, rôles et droits d'accès"
      ],
      github: "https://github.com/LlamasScripters/HardWareHouse",
      demo: null,
      category: "Gestion & finance"
    },
    {
      id: 2,
      title: "TerraFlora",
      description: "Site web e-commerce de vente de fleurs avec fonctionnalités avancées et conformité RGPD.",
      image: "/assets/images/projects/terraflora.png",
      images: [
        "/assets/images/projects/terraflora.png",
        "/assets/images/projects/terraflora-boutique.png",
        "/assets/images/projects/terraflora-cart.png", 
        "/assets/images/projects/terraflora-cookies.png", 
        "/assets/images/projects/terraflora-dashboard.png", 
        "/assets/images/projects/terraflora-list-products.png", 
        "/assets/images/projects/terraflora-newproducts.png", 
        "/assets/images/projects/terraflora-preferences.png", 
        "/assets/images/projects/terraflora-product-detail.png",
        "/assets/images/projects/terraflora-store.png",
        "/assets/images/projects/terraflora-stripe.png",

      ],
      technologies: ["Vue.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TailwindCSS"],
      features: [
        "Authentification sécurisée avec confirmation par mail",
        "Recherche avancée de produits avec facettes",
        "Gestion d'alertes par e-mail personnalisables",
        "Système de réservation de panier pendant 15 minutes",
        "Intégration de l'API de paiement Stripe",
        "Gestion des stocks et alertes de fin de stock",
        "Conformité RGPD complète"
      ],
      github: "https://github.com/LlamasScripters/TerraFlora",
      demo: "https://terraflora.store/",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "VroomVroomAuto",
      description: "Plateforme de gestion de flotte de motos Triumph avec architecture clean code et microservices.",
      image: "/assets/images/projects/vroomvroomauto.png",
      images: [
        "/assets/images/projects/vroomvroomauto.png",
      ],
      technologies: ["React", "Angular", "TypeScript", "Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB"],
      features: [
        "Double front-end en React et Angular",
        "Double back-end avec Node.js/Express et NestJS",
        "Double BDD en SQL (PostgreSQL) et NoSQL (MongoDB)",
        "Gestion des entretiens préventifs et curatifs",
        "Suivi des pièces détachées et des stocks",
        "Gestion des essais et des conducteurs",
        "Application de la Clean Architecture"
      ],
      github: "https://github.com/LlamasScripters/VroomVroomAuto",
      demo: null,
      category: "Gestion & microservices"
    },
    {
      id: 4,
      title: "Chifoumi",
      description: "Jeu de Pierre-Feuille-Ciseaux développé en React avec appels à une API existante.",
      image: "/assets/images/projects/chifoumi.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["React", "JSX", "API Rest"],
      features: [
        "Interface de jeu interactive",
        "Statistiques de parties",
        "Système de score",
        "Animations ludiques"
      ],
      github: "https://github.com/iSaaMz/chifoumi",
      demo: "https://chifoumi-ivory.vercel.app/login",
      category: "Jeux"
    },
    {
      id: 5,
      title: "Pipeline CI/CD pour Microservices",
      description: "Mise en place d'un pipeline CI/CD complet pour une application e-commerce en microservices.",
      image: "/assets/images/projects/cicd.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["GitLab CI/CD", "Docker", "Docker Swarm", "SonarQube", "Trivy", "Snyk", "Prometheus", "Grafana"],
      features: [
        "Configuration de GitLab CI/CD pour différents environnements",
        "Workflow Git basé sur GitFlow",
        "Intégration d'outils de sécurité (Trivy, SonarQube, Snyk)",
        "Déploiement automatisé via SSH",
        "Monitoring avec Prometheus et Grafana",
        "Optimisation des pipelines avec caches et artefacts"
      ],
      github: "https://gitlab.com/test5835945/e-commerce-vue",
      demo: null,
      category: "DevOps & CI/CD"
    },
    {
      id: 6,
      title: "TypeScript et Domain-Driven Design",
      description: "Cours avancé sur TypeScript et Domain-Driven Design pour le développement d'API Node.js.",
      image: "/assets/images/projects/ts-ddd-node.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["TypeScript", "Node.js", "Express.js", "TypeORM", "Postman"],
      features: [
        "Documentation de cours complète",
        "API de gestion de bibliothèque",
        "Application des principes DDD",
        "Structuration en couches (domain, application, infrastructure)",
        "Système d'emprunt et de retour de livres"
      ],
      github: "https://github.com/iSaaMz/ddd-library",
      demo: "https://github.com/iSaaMz/ddd-library/blob/main/TypeScript%20et%20Domain-Driven%20Design.pdf",
      category: "Formations & architecture"
    },
    {
      id: 7,
      title: "Airtable Portfolio",
      description: "Portfolio de la filière Ingénierie du Web utilisant Airtable pour la gestion des données.",
      image: "/assets/images/projects/airtable-portfolio.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["Nuxt.js", "Vue.js", "API Airtable"],
      features: [
        "Liste des projets étudiants",
        "Détail des projets avec informations associées",
        "Système de like",
        "Recherche par mots-clés",
        "Interface d'administration sécurisée",
        "Dashboard avec statistiques"
      ],
      github: "https://github.com/LlamasScripters/PortfolioAirtable",
      demo: null,
      category: "Portfolio"
    },
    {
      id: 8,
      title: "Gestion d'association sportive",
      description: "Application de gestion pour l'Association Sportive Omnisports de Pierrefitte-sur-Seine.",
      image: "/assets/images/en-cours-de-dev.png",
      technologies: ["Vue.js", "Tailwind CSS", "Node.js", "TypeScript", "Express.js", "PostgreSQL", "MongoDB"],
      features: [
        "Gestion des adhérents et des cotisations",
        "Organisation des activités sportives",
        "Gestion des événements socio-sportifs",
        "Administration et finances",
        "Communication interne",
        "Interface adaptative (responsive)"
      ],
      github: "https://github.com",
      demo: null,
      category: "Applications métier"
    },
    {
      id: 9,
      title: "CoplayLab",
      description: "Hackathon WorkAdventure 2024 - Développement d'une plateforme de co-visionnage de vidéos YouTube en temps réel.",
      image: "/assets/images/projects/coplaylab.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["HTML", "CSS", "TypeScript", "Google Cloud Console", "API YouTube"],
      features: [
        "Téléportation d'un joueur spécifique sur une autre map (exclusion)",
        "Système de sondage interactif (création, diffusion, participation et affichage des résultats)",
        "Recherche et lancement des vidéos via l'API YouTube",
        "Animation et intégration d'effets sonores et visuels",
        "Barre de réaction dynamique avec effets sonores"
      ],
      github: "https://github.com/iSaaMz/CoplayLab",
      demo: "https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto",
      category: "Applications métier",
      details: "WorkAdventure est une plateforme permettant de concevoir des mondes virtuels collaboratifs entièrement personnalisables. Avec votre avatar, vous pouvez interagir spontanément avec vos collègues, clients, partenaires, etc. La plateforme est 100% française, conforme au RGPD et open source."
    },
    {
      id: 10,
      title: "Terrain Confus",
      description: "Projet SEO - Optimisation du référencement pour apparaître en première position sur Google.",
      image: "/assets/images/projects/terrain-confus.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["Vue.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Google Lighthouse", "Google Search Console"],
      features: [
        "Optimisation SEO avancée",
        "Mise en place de sitemap.xml et robots.txt",
        "Tests de performance avec Google Lighthouse",
        "Suivi des performances avec Google Search Console"
      ],
      github: "https://github.com/iSaaMz/terrain-confus",
      demo: "https://www.terrain-confus-info.com/",
      category: "Applications métier",
    },
    {
      id: 11,
      title: "Mon portfolio",
      description: "Site web personnel présentant mon parcours, mes compétences et mes projets.",
      image: "/assets/images/projects/portfolio-sami.png",
      technologies: [
        "React", 
        "Vite", 
        "TailwindCSS", 
        "JavaScript", 
        "Framer Motion", 
        "React Scroll", 
        "File-Saver"
      ],
      features: [
        "Design responsive adapté à tous les appareils",
        "Interface moderne avec animations fluides et sections interactives",
        "Curseur personnalisé pixelisé avec effets de lueur",
        "Thème sombre/clair avec toggle",
        "Filtrage dynamique des projets par catégorie",
        "Affichage détaillé des compétences techniques avec niveau de maîtrise",
        "Chronologie interactive pour le parcours et les expériences",
        "Formulaire de contact avec validation",
        "Téléchargement de CV directement depuis le site",
        "Présentation complète de tous mes projets avec détails techniques"
      ],
      github: "https://github.com/iSaaMz/portfolio",
      demo: "https://www.samiassiakh.fr/",
      category: "Portfolio"
    },
    {
      id: 12,
      title: "Recettes AI",
      description: "Système de génération et de gestion de recettes de cuisine personnalisées avec analyse nutritionnelle.",
      image: "/assets/images/projects/recette-ai.png",
      images: [
        // "/assets/images/projects/terraflora.png",
        // "/assets/images/projects/terraflora.png", 
      ],
      technologies: ["React", "TailwindCSS", "shadcn", "TypeScript", "TanStack", "Airtable", "IA"],
      features: [
        "Visualisation de la liste des recettes créées",
        "Détail des recettes avec analyse nutritionnelle complète (calories, protéines, glucides, lipides, vitamines, minéraux)",
        "Recherche de recettes par nom, ingrédient ou type de plat",
        "Création de nouvelles recettes personnalisées selon les ingrédients, nombre de personnes et intolérances",
        "Interface utilisateur moderne et épurée",
        "Base de données gérée avec Airtable"
      ],
      github: "https://github.com/LlamasScripters/RecettesAirtable",
      demo: null,
      category: "Applications métier",
    }
  ];  
  
  export const projectCategories = [
    "Tous",
    "Gestion & finance",
    "E-commerce",
    "Gestion & microservices",
    "Jeux",
    "DevOps & CI/CD",
    "Formations & architecture",
    "Portfolio",
    "Applications métier"
  ];