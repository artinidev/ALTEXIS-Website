export interface OfferFormula {
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
}

export interface CommercialOffer {
  id: string;
  slug: string;
  number: string;
  category: 'DOMICILIATION' | 'ESPACE DE TRAVAIL' | 'ENTREPRISE' | 'DIGITAL';
  categoryLabel: string;
  title: string;
  pricePrefix?: string;
  priceMain: string;
  priceSuffix?: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaActionType: 'formulas' | 'quote' | 'reserve' | 'contact';
  isLargeFeatured?: boolean;
  editorialSubtitle?: string;
  keyStats?: { label: string; value: string }[];
  formulas?: OfferFormula[];
  fullFeaturesList?: string[];
}

export const COMMERCIAL_OFFERS: CommercialOffer[] = [
  {
    id: '01-domiciliation',
    slug: 'domiciliation',
    number: '01',
    category: 'DOMICILIATION',
    categoryLabel: 'Domiciliation d’entreprise',
    title: 'Domiciliation d’entreprise',
    pricePrefix: 'À partir de',
    priceMain: '7 000 DZD',
    priceSuffix: '/ mois',
    description: 'Une adresse professionnelle à Dély Ibrahim, la gestion de votre courrier et un accompagnement adapté à votre activité.',
    highlights: [
      'Silver',
      'Business',
      'Gold',
      'Gestion du courrier',
      'Création à distance',
    ],
    ctaLabel: 'Découvrir les formules',
    ctaActionType: 'formulas',
    isLargeFeatured: true,
    editorialSubtitle: 'Adresse fiscale & juridique à Dély Ibrahim (Alger)',
    keyStats: [
      { label: 'Adresse', value: 'Dély Ibrahim, Alger' },
      { label: 'Formules', value: 'Silver / Business / Gold' },
      { label: 'Gestion', value: 'Courrier & Colis' },
    ],
    formulas: [
      {
        name: 'Formule Silver',
        price: '7 000 DZD',
        period: '/ mois (facturation annuelle)',
        features: [
          'Adresse commerciale et siège social légal à Dély Ibrahim',
          'Réception et tri du courrier quotidien',
          'Notification immédiate par email et SMS à chaque réception',
          'Mise à disposition du courrier aux horaires d’ouverture',
          'Attestation de domiciliation pour le CNRC & services fiscaux',
        ],
      },
      {
        name: 'Formule Business',
        price: '12 000 DZD',
        period: '/ mois',
        popular: true,
        features: [
          'Tous les avantages de la Formule Silver',
          'Numérisation (scan) instantanée et archivage sécurisé du courrier',
          'Réexpédition postale sur demande',
          '4 heures de salle de réunion incluses par mois',
          'Permanence téléphonique et accueil personnalisé de vos visiteurs',
        ],
      },
      {
        name: 'Formule Gold',
        price: '18 000 DZD',
        period: '/ mois',
        features: [
          'Tous les avantages de la Formule Business',
          '8 jours d’accès coworking par mois inclus',
          '8 heures de salle de réunion par mois',
          'Accompagnement administratif et fiscal prioritaire',
          'Gestion des procurations et formalités auprès des administrations',
        ],
      },
    ],
    fullFeaturesList: [
      'Adresse de prestige à la Résidence El Ferdous, Dély Ibrahim',
      'Contrat de domiciliation conforme aux exigences du CNRC',
      'Gestion du courrier avec traçabilité et scan sécurisé',
      'Création et domiciliation 100% gérable à distance',
      'Accueil professionnel de vos partenaires et clients',
    ],
  },
  {
    id: '02-coworking',
    slug: 'coworking',
    number: '02',
    category: 'ESPACE DE TRAVAIL',
    categoryLabel: 'Espace de travail partagé',
    title: 'Coworking',
    pricePrefix: 'À partir de',
    priceMain: '700 DZD',
    priceSuffix: '/ jour',
    description: 'Un espace de travail flexible pour freelances, entrepreneurs, étudiants et entreprises.',
    highlights: [
      'Pass journée',
      'Carte 10 accès',
      'Abonnements',
      'Tarifs étudiants',
    ],
    ctaLabel: 'Voir les formules',
    ctaActionType: 'formulas',
    isLargeFeatured: false,
    editorialSubtitle: 'Flexibilité totale dans un cadre d’affaires haut de gamme',
    keyStats: [
      { label: 'Connexion', value: 'Fibre 200 Mbps' },
      { label: 'Accès', value: 'Du lundi au samedi' },
      { label: 'Services', value: 'Café & Boissons inclus' },
    ],
    formulas: [
      {
        name: 'Pass Journée',
        price: '700 DZD',
        period: '/ journée',
        features: [
          'Accès libre à l’espace coworking de 8h30 à 19h00',
          'Connexion internet très haut débit par fibre optique',
          'Sièges ergonomiques et postes électrifiés',
          'Café de spécialité, thés et eau minérale inclus',
          'Accès aux espaces détente et phone booths',
        ],
      },
      {
        name: 'Carte 10 Accès',
        price: '6 000 DZD',
        period: 'valable 3 mois',
        popular: true,
        features: [
          '10 journées complètes sans contrainte calendaire',
          'Flexibilité totale sans engagement mensuel',
          'Tous les services du Pass Journée inclus',
          'Priorité de réservation sur les postes de travail',
        ],
      },
      {
        name: 'Abonnement Mensuel',
        price: '14 000 DZD',
        period: '/ mois',
        features: [
          'Accès illimité 6j/7 aux heures d’ouverture',
          'Casier individuel sécurisé avec clé',
          '2 heures de salle de réunion offertes chaque mois',
          'Tarif préférentiel sur les événements & ateliers',
        ],
      },
    ],
    fullFeaturesList: [
      'Environnement calme et propice à la concentration et au networking',
      'Prises USB-C et secteur individuelles sur chaque poste',
      'Cabines acoustiques insonorisées pour vos appels et visioconférences',
      'Espace cuisine équipé (micro-ondes, réfrigérateur, machine espresso)',
    ],
  },
  {
    id: '03-bureaux-privatifs',
    slug: 'bureaux',
    number: '03',
    category: 'ESPACE DE TRAVAIL',
    categoryLabel: 'Mobilier & Bureaux privatifs',
    title: 'Bureaux privatifs',
    pricePrefix: '',
    priceMain: 'Sur devis',
    priceSuffix: '',
    description: 'Un espace de travail fermé, confortable, meublé et équipé pour travailler seul ou avec votre équipe.',
    highlights: [
      'Bureau privatif',
      'Meublé et équipé',
      'Espace professionnel',
      'Services complémentaires',
    ],
    ctaLabel: 'Demander un devis',
    ctaActionType: 'quote',
    isLargeFeatured: false,
    editorialSubtitle: 'Bureaux fermés et confidentiels de 1 à 8 personnes',
    keyStats: [
      { label: 'Capacités', value: '1 à 8 postes' },
      { label: 'Isolation', value: 'Acoustique premium' },
      { label: 'Accès', value: 'Sécurisé 24/7' },
    ],
    fullFeaturesList: [
      'Bureaux entièrement meublés : rangements verrouillables, bureaux de direction & chaises ergonomiques',
      'Climatisation réversible et éclairage naturel dans chaque bureau',
      'Accès internet sécurisé par réseau privé VLAN et fibre dédiée',
      'Ménage quotidien et entretien inclus',
      'Plaque professionnelle signalétique à l’entrée du bureau',
      'Crédits d’heures offerts en salles de réunion',
    ],
  },
  {
    id: '04-location-de-salles',
    slug: 'salles',
    number: '04',
    category: 'ESPACE DE TRAVAIL',
    categoryLabel: 'Salles de réunion & Formations',
    title: 'Salles de réunion',
    pricePrefix: 'À partir de',
    priceMain: '500 DZD',
    priceSuffix: '/ heure',
    description: 'Des espaces professionnels adaptés aux réunions, formations, présentations et rendez-vous clients.',
    highlights: [
      '2 à 20 personnes',
      'Vidéoprojecteur',
      'Tableau',
      'Café & thé inclus',
    ],
    ctaLabel: 'Réserver une salle',
    ctaActionType: 'reserve',
    isLargeFeatured: false,
    editorialSubtitle: 'Espaces de réunion équipés et modulables',
    keyStats: [
      { label: 'Capacité', value: 'Jusqu’à 20 personnes' },
      { label: 'Écran', value: '4K & Vidéoprojecteur' },
      { label: 'Service', value: 'Café & Thé inclus' },
    ],
    formulas: [
      {
        name: 'Tarif Horaire',
        price: '500 DZD',
        period: '/ heure (salle d’entretien 2-4 pers.)',
        features: [
          'Idéal pour entretiens d’embauche ou réunions en binôme',
          'Connexion Wi-Fi haute vitesse',
          'Café d’accueil et eau pour les participants',
        ],
      },
      {
        name: 'Salle Boardroom (6-12 pers.)',
        price: '1 200 DZD',
        period: '/ heure (ou 4 500 DZD / demi-journée)',
        popular: true,
        features: [
          'Écran interactif 4K 65" avec système de visioconférence Polycom',
          'Tableau blanc magnétique et feutres',
          'Prises intégrées au centre de table',
          'Pause-café complète incluse',
        ],
      },
      {
        name: 'Salle de Formation (jusqu’à 20 pers.)',
        price: '2 000 DZD',
        period: '/ heure (ou 7 500 DZD / demi-journée)',
        features: [
          'Disposition modulable : théâtre, classe ou U',
          'Vidéoprojecteur haute luminosité + sonorisation',
          'Espace d’accueil dédié pour émargement',
        ],
      },
    ],
    fullFeaturesList: [
      'Équipements audiovisuels de dernière génération pour visioconférences hybrides',
      'Service d’accueil et orientation de vos invités par notre équipe',
      'Service traiteur et pauses gourmandes sur demande préalable',
    ],
  },
  {
    id: '05-creation-d-entreprise',
    slug: 'creation-entreprise',
    number: '05',
    category: 'ENTREPRISE',
    categoryLabel: 'Création & Statuts juridiques',
    title: 'Création d’entreprise',
    pricePrefix: '',
    priceMain: 'Sur devis',
    priceSuffix: '',
    description: 'Un accompagnement pour créer votre entreprise en Algérie, avec des solutions adaptées à votre projet.',
    highlights: [
      'SARL',
      'EURL',
      'Autres statuts',
      'Création depuis l’étranger',
      'Domiciliation',
    ],
    ctaLabel: 'Découvrir l’accompagnement',
    ctaActionType: 'quote',
    isLargeFeatured: false,
    editorialSubtitle: 'Conseil juridique et démarches administratives clé en main',
    keyStats: [
      { label: 'Formes', value: 'SARL, EURL, SPA, SNC' },
      { label: 'Démarches', value: 'CNRC, NIF, NIS, Notaire' },
      { label: 'Diaspora', value: 'Création 100% à distance' },
    ],
    fullFeaturesList: [
      'Conseil sur le choix de la structure juridique la plus avantageuse',
      'Rédaction des statuts en conformité avec le droit commercial algérien',
      'Coordination avec le notaire pour l’enregistrement des actes',
      'Obtenez votre registre de commerce (CNRC), NIF, NIS et extrait de rôle',
      'Pack complet : Domiciliation du siège social + Création juridique combinée',
      'Assistance spéciale pour investisseurs étrangers et membres de la diaspora',
    ],
  },
  {
    id: '06-conseils-et-accompagnement',
    slug: 'accompagnement',
    number: '06',
    category: 'ENTREPRISE',
    categoryLabel: 'Conseil & Accompagnement',
    title: 'Conseils & accompagnement',
    pricePrefix: '',
    priceMain: 'Sur devis',
    priceSuffix: '',
    description: 'Un accompagnement personnalisé pour vous aider à avancer sereinement dans votre projet.',
    highlights: [
      'Législation',
      'Fiscalité',
      'Conseil personnalisé',
      'Accompagnement professionnel',
    ],
    ctaLabel: 'Nous contacter',
    ctaActionType: 'contact',
    isLargeFeatured: false,
    editorialSubtitle: 'Expertise fiscale, réglementaire et financière continue',
    keyStats: [
      { label: 'Expertise', value: 'Droit des affaires & Fiscalité' },
      { label: 'Format', value: 'Sur-mesure & Confidentialité' },
      { label: 'Audits', value: 'Conformité & Stratégie' },
    ],
    fullFeaturesList: [
      'Conseil et veille fiscale continue en Algérie (déclarations G50, bilan fiscal)',
      'Accompagnement en droit du travail, contrats commerciaux et négociation',
      'Assistance lors des contrôles fiscaux et réglementaires',
      'Structuration de partenariats commerciaux et fusions-acquisitions',
      'Conseil stratégique pour le développement et la mise à l’échelle de votre activité',
    ],
  },
  {
    id: '07-transformation-digitale',
    slug: 'transformation-digitale',
    number: '07',
    category: 'DIGITAL',
    categoryLabel: 'Transformation digitale & Tech',
    title: 'Transformation digitale',
    pricePrefix: '',
    priceMain: 'Sur devis',
    priceSuffix: '',
    description: 'Audit, sécurisation et optimisation de vos sites web, applications et plateformes digitales.',
    highlights: [
      'Audit sécurité',
      'Optimisation',
      'Conseil stratégique',
      'Solutions digitales',
    ],
    ctaLabel: 'Demander un devis',
    ctaActionType: 'quote',
    isLargeFeatured: true,
    editorialSubtitle: 'Modernisation technologique, cybersécurité & performance web',
    keyStats: [
      { label: 'Audits', value: 'Vulnérabilités & Performance' },
      { label: 'Stack', value: 'Architecture Cloud & Web' },
      { label: 'Impact', value: 'Sécurisation & ROI B2B' },
    ],
    fullFeaturesList: [
      'Audit de sécurité approfondi de vos plateformes web, applications et serveurs',
      'Optimisation de la vitesse de chargement (Core Web Vitals) et de l’expérience utilisateur (UX)',
      'Développement de plateformes web et solutions B2B robustes et évolutives',
      'Intégration d’outils de gestion (ERP/CRM) et automatisation de processus métiers',
      'Accompagnement stratégique à la digitalisation globale de l’entreprise',
    ],
  },
];
