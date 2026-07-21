'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { TelegramUser, UserState } from '@/types';

interface UserContextType extends UserState {
  setUser: (user: TelegramUser | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const setUserWithAdmin = (user: TelegramUser | null) => {
    setUser(user);
    if (user) {
      const adminId = Number(process.env.NEXT_PUBLIC_ADMIN_CHAT_ID);
      setIsAdmin(user.id === adminId);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, isAdmin, setUser: setUserWithAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
