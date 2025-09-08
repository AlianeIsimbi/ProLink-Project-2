import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    institutions: 'Institutions',
    impact: 'Impact',
    about: 'About',
    login: 'Login',
    register: 'Register',
    
    // Registration
    studentRegistration: 'Student Registration',
    graduateRegistration: 'Graduate Registration',
    institutionRegistration: 'Institution Registration',
    companyRegistration: 'Company Registration',
    
    // Student Registration
    personalInfo: 'Personal Information',
    educationLevel: 'Education Level',
    tvetInterests: 'TVET Program Interests',
    reviewInfo: 'Review Your Information',
    
    // Common
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    welcome: 'Welcome',
    dashboard: 'Dashboard',
    
    // Dashboard
    explorePrograms: 'Explore TVET Programs',
    jobOpportunities: 'Job Opportunities',
    collaborationHub: 'Collaboration Hub',
    myProgress: 'My Progress',
    saved: 'Saved',
    funZone: 'Fun Zone',
    
    // Collaboration Hub
    shareThoughts: 'Share your thoughts, ask questions, or post opportunities...',
    send: 'Send',
    all: 'All',
    successStories: 'Success Stories',
    studyGroups: 'Study Groups',
    opportunities: 'Opportunities',
    hiring: 'Hiring',
    
    // Registration Forms
    personalInfo: 'Personal Information',
    educationLevel: 'Education Level',
    tvetInterests: 'TVET Program Interests',
    reviewInfo: 'Review Your Information',
    currentSchoolLevel: 'Current School Level',
    currentSchool: 'Current School/Institution',
    subjectsOfInterest: 'Subjects of Interest',
    whyInterested: 'Why are you interested in TVET programs?',
    selectLevel: 'Select your current level',
    enterSchoolName: 'Enter your current school name',
    tellUsWhy: 'Tell us why you\'re interested in TVET programs and what you hope to achieve...',
    
    // Form Steps
    step1of4: 'Step 1 of 4',
    step2of4: 'Step 2 of 4',
    step3of4: 'Step 3 of 4',
    step4of4: 'Step 4 of 4',
    complete: 'Complete',
    
    // Buttons
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    createAccount: 'Create Account',
    registering: 'Registering...',
    
    // Fun Zone
    memoryMatch: 'Memory Match',
    tvetQuiz: 'TVET Quiz',
    speedTyping: 'Speed Typing',
    wordSearch: 'Word Search',
    takeBreak: 'Take a break and enjoy some educational games!',
    playGame: 'Play Game',
    score: 'Score',
    congratulations: 'Congratulations!',
    youWon: 'You won!',
    nextQuestion: 'Next Question',
    finishQuiz: 'Finish Quiz',
    typeWord: 'Type the word above...',
    wordsToFind: 'Words to find:',
    
    // Stats
    availablePrograms: 'Available Programs',
    partnerInstitutions: 'Partner Institutions',
    activeStudents: 'Active Students',
    jobPlacementRate: 'Job Placement Rate',
    availableJobs: 'Available Jobs',
    partnerCompanies: 'Partner Companies',
    activeGraduates: 'Active Graduates',
    successRate: 'Success Rate'
  },
  fr: {
    // Navigation
    home: 'Accueil',
    features: 'Fonctionnalités',
    institutions: 'Institutions',
    impact: 'Impact',
    about: 'À propos',
    login: 'Connexion',
    register: 'S\'inscrire',
    
    // Registration
    studentRegistration: 'Inscription Étudiant',
    graduateRegistration: 'Inscription Diplômé',
    institutionRegistration: 'Inscription Institution',
    companyRegistration: 'Inscription Entreprise',
    
    // Student Registration
    personalInfo: 'Informations Personnelles',
    educationLevel: 'Niveau d\'Éducation',
    tvetInterests: 'Intérêts Programmes TVET',
    reviewInfo: 'Vérifier Vos Informations',
    
    // Common
    firstName: 'Prénom',
    lastName: 'Nom de Famille',
    email: 'Email',
    phone: 'Téléphone',
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    welcome: 'Bienvenue',
    dashboard: 'Tableau de Bord',
    
    // Dashboard
    explorePrograms: 'Explorer les Programmes TVET',
    jobOpportunities: 'Opportunités d\'Emploi',
    collaborationHub: 'Hub de Collaboration',
    myProgress: 'Mon Progrès',
    saved: 'Sauvegardé',
    
    // Collaboration Hub
    shareThoughts: 'Partagez vos pensées, posez des questions ou publiez des opportunités...',
    send: 'Envoyer',
    all: 'Tout',
    successStories: 'Histoires de Succès',
    studyGroups: 'Groupes d\'Étude',
    opportunities: 'Opportunités',
    hiring: 'Embauche',
    
    // Dashboard
    explorePrograms: 'Explorer les Programmes TVET',
    jobOpportunities: 'Opportunités d\'Emploi',
    collaborationHub: 'Hub de Collaboration',
    myProgress: 'Mon Progrès',
    saved: 'Sauvegardé',
    funZone: 'Zone de Jeu',
    
    // Registration Forms
    personalInfo: 'Informations Personnelles',
    educationLevel: 'Niveau d\'Éducation',
    tvetInterests: 'Intérêts Programmes TVET',
    reviewInfo: 'Vérifier Vos Informations',
    currentSchoolLevel: 'Niveau Scolaire Actuel',
    currentSchool: 'École/Institution Actuelle',
    subjectsOfInterest: 'Matières d\'Intérêt',
    whyInterested: 'Pourquoi êtes-vous intéressé par les programmes TVET?',
    selectLevel: 'Sélectionnez votre niveau actuel',
    enterSchoolName: 'Entrez le nom de votre école actuelle',
    tellUsWhy: 'Dites-nous pourquoi vous êtes intéressé par les programmes TVET et ce que vous espérez accomplir...',
    
    // Form Steps
    step1of4: 'Étape 1 sur 4',
    step2of4: 'Étape 2 sur 4',
    step3of4: 'Étape 3 sur 4',
    step4of4: 'Étape 4 sur 4',
    complete: 'Complet',
    
    // Buttons
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    createAccount: 'Créer un Compte',
    registering: 'Inscription...',
    
    // Fun Zone
    memoryMatch: 'Jeu de Mémoire',
    tvetQuiz: 'Quiz TVET',
    speedTyping: 'Frappe Rapide',
    wordSearch: 'Mots Croisés',
    takeBreak: 'Prenez une pause et profitez de jeux éducatifs!',
    playGame: 'Jouer',
    score: 'Score',
    congratulations: 'Félicitations!',
    youWon: 'Vous avez gagné!',
    nextQuestion: 'Question Suivante',
    finishQuiz: 'Terminer le Quiz',
    typeWord: 'Tapez le mot ci-dessus...',
    wordsToFind: 'Mots à trouver:',
    
    // Stats
    availablePrograms: 'Programmes Disponibles',
    partnerInstitutions: 'Institutions Partenaires',
    activeStudents: 'Étudiants Actifs',
    jobPlacementRate: 'Taux de Placement',
    availableJobs: 'Emplois Disponibles',
    partnerCompanies: 'Entreprises Partenaires',
    activeGraduates: 'Diplômés Actifs',
    successRate: 'Taux de Réussite'
  },
  rw: {
    // Navigation
    home: 'Urugo',
    features: 'Ibiranga',
    institutions: 'Amashuri',
    impact: 'Ingaruka',
    about: 'Ibyerekeye',
    login: 'Kwinjira',
    register: 'Kwiyandikisha',
    
    // Registration
    studentRegistration: 'Kwiyandikisha Umunyeshuri',
    graduateRegistration: 'Kwiyandikisha Umwarimu',
    institutionRegistration: 'Kwiyandikisha Ishami',
    companyRegistration: 'Kwiyandikisha Isosiyete',
    
    // Student Registration
    personalInfo: 'Amakuru y\'umuntu',
    educationLevel: 'Urwego rw\'amashuri',
    tvetInterests: 'Ibyifuza by\'amashuri ya TVET',
    reviewInfo: 'Reba Amakuru Yawe',
    
    // Common
    firstName: 'Izina ry\'umubyeyi',
    lastName: 'Izina ry\'umuryango',
    email: 'Imeli',
    phone: 'Telefone',
    next: 'Komeza',
    previous: 'Subira',
    submit: 'Ohereza',
    welcome: 'Murakaza neza',
    dashboard: 'Ikibaho',
    
    // Dashboard
    explorePrograms: 'Shakisha Amashuri ya TVET',
    jobOpportunities: 'Amahirwe y\'Akazi',
    collaborationHub: 'Ikiganiro cy\'Abantu',
    myProgress: 'Imbere Yanjye',
    saved: 'Byabitswe',
    
    // Collaboration Hub
    shareThoughts: 'Sangira ibitekerezo byawe, ibibazo cyangwa amahirwe...',
    send: 'Ohereza',
    all: 'Byose',
    successStories: 'Inkuru z\'Intsinzi',
    studyGroups: 'Amatsinda y\'Abanyeshuri',
    opportunities: 'Amahirwe',
    hiring: 'Gushakisha Abakozi',
    
    // Dashboard
    explorePrograms: 'Shakisha Amashuri ya TVET',
    jobOpportunities: 'Amahirwe y\'Akazi',
    collaborationHub: 'Ikiganiro cy\'Abantu',
    myProgress: 'Imbere Yanjye',
    saved: 'Byabitswe',
    funZone: 'Ikibuga cy\'Imikino',
    
    // Registration Forms
    personalInfo: 'Amakuru y\'umuntu',
    educationLevel: 'Urwego rw\'amashuri',
    tvetInterests: 'Ibyifuza by\'amashuri ya TVET',
    reviewInfo: 'Reba Amakuru Yawe',
    currentSchoolLevel: 'Urwego rw\'ishuli rya none',
    currentSchool: 'Ishuli/Ishami rya none',
    subjectsOfInterest: 'Ibyigishwa Byifuza',
    whyInterested: 'Ni iki gituma wifuza amashuri ya TVET?',
    selectLevel: 'Hitamo urwego rwawe rwa none',
    enterSchoolName: 'Shyiramo izina ry\'ishuli ryawe rya none',
    tellUsWhy: 'Dutangire iki gituma wifuza amashuri ya TVET n\'ibyo ushaka gukora...',
    
    // Form Steps
    step1of4: 'Intambwe ya 1 muri 4',
    step2of4: 'Intambwe ya 2 muri 4',
    step3of4: 'Intambwe ya 3 muri 4',
    step4of4: 'Intambwe ya 4 muri 4',
    complete: 'Byuzuye',
    
    // Buttons
    next: 'Komeza',
    previous: 'Subira',
    submit: 'Ohereza',
    createAccount: 'Kora Konti',
    registering: 'Kwiyandikisha...',
    
    // Fun Zone
    memoryMatch: 'Icyumweru cy\'Ubwoba',
    tvetQuiz: 'Ikibazo cya TVET',
    speedTyping: 'Gukanda Vuba',
    wordSearch: 'Gushakisha Amagambo',
    takeBreak: 'Kora ikinyoma kandi ukunze imikino y\'uburezi!',
    playGame: 'Kina',
    score: 'Amagambo',
    congratulations: 'Twishimiye!',
    youWon: 'Watsinze!',
    nextQuestion: 'Ikibazo Gikurikira',
    finishQuiz: 'Gira Ikibazo',
    typeWord: 'Andika ijambo riri hejuru...',
    wordsToFind: 'Amagambo agomba gushakishwa:',
    
    // Stats
    availablePrograms: 'Amashuri Ashoboka',
    partnerInstitutions: 'Amashuri y\'Abafatanyabikorwa',
    activeStudents: 'Abanyeshuri Bikora',
    jobPlacementRate: 'Icyerekezo cy\'Akazi',
    availableJobs: 'Akazi Gashoboka',
    partnerCompanies: 'Amashyirahamwe y\'Abafatanyabikorwa',
    activeGraduates: 'Abanyeshuri Bakuze Bikora',
    successRate: 'Icyerekezo cy\'Intsinzi'
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    features: 'Vipengele',
    institutions: 'Taasisi',
    impact: 'Athari',
    about: 'Kuhusu',
    login: 'Ingia',
    register: 'Jisajili',
    
    // Registration
    studentRegistration: 'Usajili wa Mwanafunzi',
    graduateRegistration: 'Usajili wa Mhitimu',
    institutionRegistration: 'Usajili wa Taasisi',
    companyRegistration: 'Usajili wa Kampuni',
    
    // Student Registration
    personalInfo: 'Taarifa za Kibinafsi',
    educationLevel: 'Kiwango cha Elimu',
    tvetInterests: 'Maslahi ya Mipango ya TVET',
    reviewInfo: 'Kagua Taarifa Zako',
    
    // Common
    firstName: 'Jina la Kwanza',
    lastName: 'Jina la Ukoo',
    email: 'Barua Pepe',
    phone: 'Simu',
    next: 'Ifuatayo',
    previous: 'Nyuma',
    submit: 'Wasilisha',
    welcome: 'Karibu',
    dashboard: 'Dashibodi',
    
    // Dashboard
    explorePrograms: 'Chunguza Mipango ya TVET',
    jobOpportunities: 'Fursa za Kazi',
    collaborationHub: 'Kituo cha Ushirikiano',
    myProgress: 'Maendeleo Yangu',
    saved: 'Imehifadhiwa',
    
    // Collaboration Hub
    shareThoughts: 'Shiriki mawazo yako, uliza maswali au chapisha fursa...',
    send: 'Tuma',
    all: 'Wote',
    successStories: 'Hadithi za Mafanikio',
    studyGroups: 'Vikundi vya Masomo',
    opportunities: 'Fursa',
    hiring: 'Kuajiri',
    
    // Dashboard
    explorePrograms: 'Chunguza Mipango ya TVET',
    jobOpportunities: 'Fursa za Kazi',
    collaborationHub: 'Kituo cha Ushirikiano',
    myProgress: 'Maendeleo Yangu',
    saved: 'Imehifadhiwa',
    funZone: 'Eneo la Mchezo',
    
    // Registration Forms
    personalInfo: 'Taarifa za Kibinafsi',
    educationLevel: 'Kiwango cha Elimu',
    tvetInterests: 'Maslahi ya Mipango ya TVET',
    reviewInfo: 'Kagua Taarifa Zako',
    currentSchoolLevel: 'Kiwango cha Shule ya Sasa',
    currentSchool: 'Shule/Muundo wa Sasa',
    subjectsOfInterest: 'Masomo ya Kuvutia',
    whyInterested: 'Kwa nini unavutiwa na mipango ya TVET?',
    selectLevel: 'Chagua kiwango chako cha sasa',
    enterSchoolName: 'Ingiza jina la shule yako ya sasa',
    tellUsWhy: 'Tuambie kwa nini unavutiwa na mipango ya TVET na unachotarajia kufanya...',
    
    // Form Steps
    step1of4: 'Hatua ya 1 kati ya 4',
    step2of4: 'Hatua ya 2 kati ya 4',
    step3of4: 'Hatua ya 3 kati ya 4',
    step4of4: 'Hatua ya 4 kati ya 4',
    complete: 'Imekamilika',
    
    // Buttons
    next: 'Ifuatayo',
    previous: 'Nyuma',
    submit: 'Wasilisha',
    createAccount: 'Unda Akaunti',
    registering: 'Kusajili...',
    
    // Fun Zone
    memoryMatch: 'Mchezo wa Kumbukumbu',
    tvetQuiz: 'Jaribio la TVET',
    speedTyping: 'Kuchapa Haraka',
    wordSearch: 'Utafutaji wa Maneno',
    takeBreak: 'Chukua mapumziko na furahiya na michezo ya elimu!',
    playGame: 'Cheza',
    score: 'Alama',
    congratulations: 'Hongera!',
    youWon: 'Umeshinda!',
    nextQuestion: 'Swali Lifuatalo',
    finishQuiz: 'Maliza Jaribio',
    typeWord: 'Chapa neno lililo hapo juu...',
    wordsToFind: 'Maneno ya kutafuta:',
    
    // Stats
    availablePrograms: 'Mipango Inayopatikana',
    partnerInstitutions: 'Taasisi za Ushirikiano',
    activeStudents: 'Wanafunzi Waliohai',
    jobPlacementRate: 'Kiwango cha Kupata Kazi',
    availableJobs: 'Kazi Zinazopatikana',
    partnerCompanies: 'Kampuni za Ushirikiano',
    activeGraduates: 'Wahitimu Waliohai',
    successRate: 'Kiwango cha Mafanikio'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
