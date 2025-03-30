export const projectsData = [
    {
      id: 1,
      title: "HardWareHouse",
      description: "Plateforme de gestion de devis et de factures pour les PME du secteur informatique.",
      image: "/assets/images/projects/hardwarehouse.png",
      technologies: ["Symfony 6.2", "Twig", "JavaScript", "TailwindCSS", "SASS", "PostgreSQL"],
      features: [
        "Création, modification et suppression de devis et factures",
        "Gestion complète des clients et des produits",
        "Envoi d'e-mails automatiques",
        "Suivi des paiements et gestion des statuts",
        "Génération de rapports financiers",
        "Gestion des utilisateurs, rôles et droits d'accès"
      ],
      github: "https://github.com",
      demo: null,
      category: "Gestion & finance"
    },
    {
      id: 2,
      title: "TerraFlora",
      description: "Site web e-commerce de vente de fleurs avec fonctionnalités avancées et conformité RGPD.",
      image: "/assets/images/projects/terraflora.png",
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
      github: "https://github.com",
      demo: null,
      category: "E-commerce"
    },
    {
      id: 3,
      title: "VroomVroomAuto",
      description: "Plateforme de gestion de flotte de motos Triumph avec architecture clean code et microservices.",
      image: "/assets/images/projects/vroomvroomauto.png",
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
      github: "https://github.com",
      demo: null,
      category: "Gestion & microservices"
    },
    {
      id: 4,
      title: "Chifoumi",
      description: "Jeu de Pierre-Feuille-Ciseaux développé en React avec appels à une API existante.",
      image: "/assets/images/projects/chifoumi.png",
      technologies: ["React", "JSX", "API Rest"],
      features: [
        "Interface de jeu interactive",
        "Statistiques de parties",
        "Système de score",
        "Animations ludiques"
      ],
      github: "https://github.com",
      demo: "https://demo-chifoumi.example.com",
      category: "Jeux"
    },
    {
      id: 5,
      title: "Pipeline CI/CD pour Microservices",
      description: "Mise en place d'un pipeline CI/CD complet pour une application e-commerce en microservices.",
      image: "/assets/images/projects/cicd.png",
      technologies: ["GitLab CI/CD", "Docker", "Docker Swarm", "SonarQube", "Trivy", "Snyk", "Prometheus", "Grafana"],
      features: [
        "Configuration de GitLab CI/CD pour différents environnements",
        "Workflow Git basé sur GitFlow",
        "Intégration d'outils de sécurité (Trivy, SonarQube, Snyk)",
        "Déploiement automatisé via SSH",
        "Monitoring avec Prometheus et Grafana",
        "Optimisation des pipelines avec caches et artefacts"
      ],
      github: "https://gitlab.com",
      demo: null,
      category: "DevOps & CI/CD"
    },
    {
      id: 6,
      title: "TypeScript et Domain-Driven Design",
      description: "Cours avancé sur TypeScript et Domain-Driven Design pour le développement d'API Node.js.",
      image: "/assets/images/projects/ts-ddd-node.png",
      technologies: ["TypeScript", "Node.js", "Express.js", "TypeORM", "Postman"],
      features: [
        "Documentation de cours complète",
        "API de gestion de bibliothèque",
        "Application des principes DDD",
        "Structuration en couches (domain, application, infrastructure)",
        "Système d'emprunt et de retour de livres"
      ],
      github: "https://github.com",
      demo: null,
      category: "Formations & architecture"
    },
    {
      id: 7,
      title: "Airtable Portfolio",
      description: "Portfolio de la filière Ingénierie du Web utilisant Airtable pour la gestion des données.",
      image: "/assets/images/projects/airtable-portfolio.png",
      technologies: ["Nuxt.js", "Vue.js", "API Airtable"],
      features: [
        "Liste des projets étudiants",
        "Détail des projets avec informations associées",
        "Système de like",
        "Recherche par mots-clés",
        "Interface d'administration sécurisée",
        "Dashboard avec statistiques"
      ],
      github: "https://github.com",
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