'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { TelegramUser } from '@/types';
import { ADMIN_ID } from '@/lib/constants';

interface UserContextType {
  user: TelegramUser | null;
  isAdmin: boolean;
  setUser: (user: TelegramUser | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSetUser = (u: TelegramUser | null) => {
    setUser(u);
    if (u) {
      setIsAdmin(u.id === ADMIN_ID);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, isAdmin, setUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
};
