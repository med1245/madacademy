
"use client";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top-button';
import { FlipCard } from '@/components/flip-card';
import { useLanguage } from '@/contexts/language-context';

export default function FormationsPage() {
  const { t } = useLanguage();

  const semester1Modules = [
    {
      title: "Module 1: Théorie du Game Design (80 heures)",
      points: [
        "Fondamentaux: histoire, genres et culture du jeu vidéo",
        "Conception de l'expérience: mécaniques, systèmes et psychologie du joueur",
        "Méthodologie: pipeline de production et analyse critique de jeux"
      ]
    },
    {
      title: "Module 2: Design Graphique pour Jeux Vidéo (100 heures)",
      points: [
        "Fondamentaux du design graphique",
        "Interface Utilisateur (UI) Design",
        "Expérience Utilisateur (UX) Design"
      ]
    },
    {
      title: "Module 3: Art Numérique et Animation (120 heures)",
      points: [
        "Art 2D pour Jeux",
        "Animation 2D",
        "Introduction à la 3D"
      ]
    },
    {
      title: "Module 4: Programmation de Base (60 heures)",
      points: [
        "Fondamentaux de la logique algorithmique",
        "Introduction à la programmation C# dans Unity",
        "Création de scripts et gestion de projet avec Git"
      ]
    },
    {
      title: "Module 5: Moteurs de Jeu - Unity (60 heures)",
      points: [
        "Prise en main de l'éditeur Unity et gestion des assets",
        "Création de scènes interactives 2D et 3D (physique, collisions)",
        "Projet: Développement d'un prototype de jeu complet"
      ]
    }
  ];

  const semester2Modules = [
    {
      title: "Module 6: Design Graphique Avancé (100 heures)",
      points: [
        "Marketing Visuel et Communication",
        "Direction Artistique",
        "Techniques Avancées"
      ]
    },
    {
      title: "Module 7: Level Design et Game Design Avancé (80 heures)",
      points: [
        "Principes du level design : rythme, narration environnementale et progression du joueur",
        "Techniques avancées d'équilibrage et de conception de systèmes de jeux",
        "Méthodologie professionnelle : outils, playtesting et design itératif"
      ]
    },
    {
      title: "Module 8: Spécialisation au Choix (100 heures)",
      points: [
        "Piste A: Spécialisation Art & Graphisme: Art des personnages et des environnements (Character & Environment Art), Pipeline de production professionnel et création de portfolio.",
        "Piste B: Spécialisation Programmation: Programmation avancée du gameplay et des systèmes d'IA, Optimisation des performances et création de portfolio technique.",
        "Piste C: Spécialisation UI/UX Design: Conception d'interfaces (UI) et de prototypes interactifs (accessibilité), Recherche utilisateur (UX) et tests d'utilisabilité pour une expérience optimale."
      ]
    },
    {
      title: "Module 9: Audio et Sound Design (40 heures)",
      points: [
        "Fondamentaux du design sonore pour le jeu vidéo.",
        "Création d'effets sonores (SFX) et de musique adaptative.",
        "Intégration et mixage audio dans le moteur de jeu."
      ]
    },
    {
      title: "Module 10: Production et Gestion de Projet (60 heures)",
      points: [
        "Planification de projet : méthodologies agiles (Scrum)",
        "Gestion d'équipe créative et maîtrise des outils de collaboration.",
        "Assurance Qualité (QA) et mise en place des stratégies de tests."
      ]
    },
    {
        title: "Module 11: Projet de Fin d'Études (120 heures)",
        points: [
            "Création d'un jeu final en équipe.",
            "Constitution du portfolio professionnel.",
            "Soutenance devant un jury de l'industrie."
        ]
    }
  ];


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">Programme de Formation</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Ce programme incarne la promesse de la MAD Academy : être un tremplin. Ce parcours intensif d'un an est conçu pour guider chaque étudiant, de la passion brute à la maîtrise professionnelle, et lui ouvrir directement les portes de l'industrie du jeu.
            </p>
             <div className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                <p><span className="font-bold">Durée du Programme:</span> 1 An (2 Semestres)</p>
                <p><span className="font-bold">Format:</span> Formation intensive avec ateliers pratiques, cours théoriques et projets concrets</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FlipCard 
              frontTitle="Semestre 1"
              frontSubtitle="Fondements et Compétences de Base"
              backTitle="Détails du Semestre 1"
              modules={semester1Modules}
            />
            <FlipCard 
              frontTitle="Semestre 2"
              frontSubtitle="Spécialisation et Projet Final"
              backTitle="Détails du Semestre 2"
              modules={semester2Modules}
            />
          </div>
        </div>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
