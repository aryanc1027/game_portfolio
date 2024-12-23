import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { useNavigate } from 'react-router-dom';

export const pageStates = {
  MENU: 'MENU',
  CONTENT: 'CONTENT',
};

const generateLevel = () => {
  return [
    [
      { id: 'projects', label: 'Projects', correct: true },
      { id: 'about', label: 'About Me', correct: true },
      { id: 'experience', label: 'Experience', correct: true },
      { id: 'contact', label: 'Contact', correct: true },
    ],
  ];
};

export const usePageStore = create(
  subscribeWithSelector((set) => ({
    // Navigation state
    currentPage: pageStates.MENU,
    activeSection: null,
    level: generateLevel(),
    currentStage: 0,

    // Navigation actions
    startNavigation: () => {
      const level = generateLevel();
      set({
        level,
        currentStage: 0,
        currentPage: pageStates.CONTENT,
        activeSection: null,
      });
    },

    navigateTo: (section) => {
      set({
        currentPage: pageStates.CONTENT,
        activeSection: section,
      });
    },

    goToMenu: () => {
      set({
        currentPage: pageStates.MENU,
        activeSection: null,
        currentStage: 0,
      });
    },

    // Content sections
    content: {
      projects: {
        items: [],
        description: '',
      },
      about: {
        bio: '',
        details: '',
      },
      experience: {
        items: [],
      },
      technologies: {
        skills: [],
      },
    },

    // Character animation state
    characterState: 'Idle',
    setCharacterState: (characterState) => set({ characterState }),

    isWelcomeAccepted: false,
    setWelcomeAccepted: (accepted) => set({ isWelcomeAccepted: accepted }),

    hasPlayerMoved: false,
    setHasPlayerMoved: (value) => set({ hasPlayerMoved: value }),
  }))
);
