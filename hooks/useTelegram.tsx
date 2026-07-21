'use client';

import { useEffect } from 'react';
import { useUser } from '@/context/UserContext';

declare global {
  interface Window {
    Telegram: any;
  }
}

export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser } = useUser();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();

      const userData = tg.initDataUnsafe?.user;
      if (userData) {
        setUser({
          id: userData.id,
          first_name: userData.first_name || 'User',
          last_name: userData.last_name,
          username: userData.username,
          language_code: userData.language_code,
        });
      } else {
        // Fallback для веб-просмотра
        setUser({
          id: 987654,
          first_name: 'Демо',
          username: 'demo_user',
        });
      }

      // Хептик
      tg.HapticFeedback = tg.HapticFeedback || {
        impactOccurred: () => {},
        notificationOccurred: () => {},
      };
    } else {
      // Если не в Telegram (для локальной разработки)
      setUser({
        id: 987654,
        first_name: 'Демо',
        username: 'demo_user',
      });
    }
  }, [setUser]);

  return <>{children}</>;
};

// Хук для хептика
export const useHaptic = () => {
  const impact = (style: 'light' | 'medium' | 'heavy' = 'light') => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred(style);
  };
  const notification = (type: 'success' | 'warning' | 'error' = 'success') => {
    window.Telegram?.WebApp?.HapticFeedback?.notificationOccurred(type);
  };
  return { impact, notification };
};
