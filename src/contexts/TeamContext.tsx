/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface TeamContextType {
  members: TeamMember[];
  updateMember: (id: string, updatedMember: Partial<TeamMember>) => void;
  addMember: (member: TeamMember) => void;
  deleteMember: (id: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
};

interface TeamProviderProps {
  children: ReactNode;
}

export const TeamProvider: React.FC<TeamProviderProps> = ({ children }) => {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const storedMembers = localStorage.getItem('teamMembers');
    if (storedMembers) {
      setMembers(JSON.parse(storedMembers));
    } else {
      // Default members
      const defaultMembers: TeamMember[] = [
        { id: '1', name: 'Abdur', role: 'Founder, Gen AI Specialist, IoT Developer', image: '/src/team/abdur.jpg' },
        { id: '2', name: 'Afsal', role: 'Co-founder, CEO', image: '/src/team/afsal.jpg' },
        { id: '3', name: 'Allen', role: 'Co-founder, MD', image: '/src/team/allen.jpg' },

        { id: '5', name: 'Mafaz', role: 'Co-founder, AI Specialist & Prompt Engineer', image: '/src/team/mafaz.jpg' },
        { id: '6', name: 'Safiq', role: 'Co-founder, Creative Designer & Developer', image: '/src/team/safiq.jpg' },
      ];
      setMembers(defaultMembers);
      localStorage.setItem('teamMembers', JSON.stringify(defaultMembers));
    }
  }, []);

  const updateMember = (id: string, updatedMember: Partial<TeamMember>) => {
    setMembers(prev => {
      const newMembers = prev.map(member =>
        member.id === id ? { ...member, ...updatedMember } : member
      );
      localStorage.setItem('teamMembers', JSON.stringify(newMembers));
      return newMembers;
    });
  };

  const addMember = (member: TeamMember) => {
    setMembers(prev => {
      const newMembers = [...prev, member];
      localStorage.setItem('teamMembers', JSON.stringify(newMembers));
      return newMembers;
    });
  };

  const deleteMember = (id: string) => {
    setMembers(prev => {
      const newMembers = prev.filter(member => member.id !== id);
      localStorage.setItem('teamMembers', JSON.stringify(newMembers));
      return newMembers;
    });
  };

  return (
    <TeamContext.Provider value={{ members, updateMember, addMember, deleteMember }}>
      {children}
    </TeamContext.Provider>
  );
};