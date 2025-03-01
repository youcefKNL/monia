import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Mail, Phone, Linkedin, Calendar, MapPin, Award, FileText, Briefcase, Check, Star, Languages, PenTool as Tool } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-black">Monia</span>
            <span className="text-amber-600">Ammar</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'experience', 'services', 'skills', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-300 ${activeSection === item ? 'text-amber-600 font-medium' : 'text-gray-700 hover:text-amber-600'}`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'experience', 'services', 'skills', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize py-2 transition-colors duration-300 ${activeSection === item ? 'text-amber-600 font-medium' : 'text-gray-700'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-white pt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="block">Formaliste</span>
                <span className="text-amber-600">Senior</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">Création, modification et finalisation de sociétés</p>
              <p className="text-gray-700 mb-8 max-w-lg">
                Experte en formalités juridiques avec plus de 10 ans d'expérience. 
                Je simplifie vos démarches administratives de A à Z.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Me contacter
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-200">
                  <img 
                    src="https://github.com/youcefKNL/monia/blob/main/public/profile-pic.png?raw=true" 
                    alt="Marie Dupont - Formaliste Senior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-4 rounded-full">
                  <Award size={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-amber-600">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bureau professionnel" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg">
                  <div className="text-amber-600 font-bold text-xl">8+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-6">Formaliste Senior avec plus de 8 ans d'expérience</h3>
              <p className="text-gray-700 mb-6">
                Spécialisée dans la création, la modification et la finalisation de sociétés. 
                Pragmatique, rigoureuse et orientée client, je simplifie vos démarches administratives de A à Z.
              </p>
              <p className="text-gray-700 mb-8">
                Mon expertise couvre l'ensemble des formalités juridiques nécessaires à la vie de votre entreprise, 
                de l'immatriculation à la dissolution, en passant par toutes les modifications statutaires.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Check size={20} className="text-amber-600 mr-2" />
                  <span>Pragmatique</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-amber-600 mr-2" />
                  <span>Rigoureuse</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-amber-600 mr-2" />
                  <span>Orientée client</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-amber-600 mr-2" />
                  <span>Confidentielle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours Professionnel</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Conseillère Formalités</h3>
                    <div className="flex items-center justify-end mb-4">
                      <span className="text-gray-600 mr-2">2022 - 2024</span>
                      <Calendar size={16} className="text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-4">Chambre de Commerce & d'Industrie, Évry</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>Accompagnement des clients pour la constitution de dossiers de formalités juridiques</li>
                      <li>Conseil sur les obligations légales et réglementaires</li>
                      <li>Coordination avec les organismes (CCI, Urssaf, Insee, Chambre des Métiers)</li>
                      <li>Gestion des formalités du Registre du Commerce et des Sociétés (RCS)</li>
                      <li>Délivrance de clés ChamberSign pour la signature électronique</li>
                      <li>Génération de plus de 60 k€/an et transformation du service CFE</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Experience 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Formaliste – Service Registre du Commerce et des Sociétés</h3>
                    <div className="flex items-center mb-4">
                      <Calendar size={16} className="text-amber-600 mr-2" />
                      <span className="text-gray-600">2014 - 2022</span>
                    </div>
                    <h4 className="font-medium mb-4">Greffe du Tribunal de Commerce, Évry</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>Vérification et traitement de plus de 600 dossiers par mois</li>
                      <li>Saisie et suivi des formalités (immatriculations, modifications, dissolutions, radiations)</li>
                      <li>Interface avec les organismes administratifs et rédaction de courriers</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Assistante Juridique</h3>
                    <div className="flex items-center justify-end mb-4">
                      <span className="text-gray-600 mr-2">2013 - 2014</span>
                      <Calendar size={16} className="text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-4">Cabinet LYSIAS Partners, Paris</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>Préparation de dossiers pour les audiences et rédaction d'actes</li>
                      <li>Gestion administrative (suivi des échéances, correspondance, gestion de l'agenda juridique)</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* Experience 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Assistante Juridique en Alternance</h3>
                    <div className="flex items-center mb-4">
                      <Calendar size={16} className="text-amber-600 mr-2" />
                      <span className="text-gray-600">2012 - 2013</span>
                    </div>
                    <h4 className="font-medium mb-4">Cabinet d'Avocats Bennouna et Menzel, Paris</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>Rédaction d'actes juridiques et préparation de dossiers de plaidoirie</li>
                      <li>Gestion de l'agenda des avocats et suivi des procédures légales</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-amber-600 mb-2">Chargée de Clientèle & Support Administratif</h3>
                    <div className="flex items-center justify-end mb-4">
                      <span className="text-gray-600 mr-2">2010 - 2012</span>
                      <Calendar size={16} className="text-amber-600" />
                    </div>
                    <h4 className="font-medium mb-4">Siège Carrefour, Ministère de l'Emploi, Carrita – Secteur de Luxe</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>Gestion des réclamations clients, suivi administratif des dossiers</li>
                      <li>Organisation des rendez-vous et accueil de la clientèle haut de gamme</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Je vous accompagne dans toutes les étapes de la vie juridique de votre entreprise, 
              de sa création à sa dissolution, en passant par toutes les modifications nécessaires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Création de Sociétés</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Immatriculation de sociétés commerciales (SARL, SAS, SA, SNC)</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Enregistrement d'auto-entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Constitution de dossiers complets</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Accompagnement personnalisé</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Modification de Sociétés</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Changement de dirigeants</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Transfert de siège social</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Modification de l'objet social</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Augmentation ou réduction de capital</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Cession de parts sociales ou d'actions</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText size={32} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Dissolution & Radiation</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Dissolution anticipée</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Liquidation de sociétés</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Radiation du Registre du Commerce et des Sociétés</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Accompagnement dans les formalités de clôture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Soft Skills */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <Star size={24} className="text-amber-600 mr-3" />
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Communication', 'Confidentialité', 'Adaptabilité', 'Travail en équipe', 
                  'Rigueur', 'Gestion du temps', 'Autonomie', 'Sens de l\'organisation', 
                  'Esprit d\'analyse', 'Résolution de problèmes', 'Orientation client'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Compétences Métier */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-amber-600 mr-3" />
                <h3 className="text-xl font-bold">Compétences Métier</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Immatriculation d\'entreprises', 'Liquidation', 'Modification', 
                  'Dissolution d\'entreprises', 'Vérification des formalités légales (RCS)', 
                  'Interface avec organismes (CCI, Urssaf, Insee)', 
                  'Gestion de dossiers (actes, fusions, cessions)', 
                  'Rédaction d\'actes juridiques', 'Rédaction de courriers administratifs', 
                  'Comptabilité (facturation, relances)'
                ].map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Outils et Langues */}
            <div className="space-y-8">
              {/* Outils et Logiciels */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Tool size={24} className="text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold">Outils et Logiciels</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Microsoft Word', 'Excel', 'Access', 'PowerPoint', 'Outlook', 
                    'Ciceron', 'Guichet Unique', 'ChamberSign'
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Langues */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Languages size={24} className="text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold">Langues</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Français (langue maternelle)</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Anglais (niveau B2)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Vous avez besoin d'accompagnement pour vos formalités juridiques ? 
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-amber-600 text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail size={20} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p>marie.dupont@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Téléphone</h4>
                      <p>+33 6 12 34 56 78</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">Adresse</h4>
                      <p>Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Linkedin size={20} className="mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p>linkedin.com/in/marie-dupont</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-6">Horaires</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi:</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi:</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche:</span>
                    <span>Fermé</span>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-700 mb-4">
                    Je vous réponds dans les 24 heures ouvrées suivant votre demande.
                  </p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full">
                    Prendre rendez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-white">Marie</span>
                <span className="text-amber-400">Dupont</span>
              </div>
              <p className="text-gray-400">Formaliste Senior</p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Phone size={24} />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2025 Marie Dupont. Tous droits réservés.</p>
              <div className="mt-2">
                <a href="#" className="text-gray-400 hover:text-amber-400 text-sm mr-4 transition-colors duration-300">Mentions légales</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-300">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-amber-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${scrollY > 300 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;