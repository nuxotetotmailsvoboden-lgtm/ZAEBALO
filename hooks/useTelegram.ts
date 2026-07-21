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

      // Получаем данные пользователя
      const userData = tg.initDataUnsafe?.user;
      if (userData) {
        setUser({
          id: userData.id,
          first_name: userData.first_name || 'Пользователь',
          last_name: userData.last_name,
          username: userData.username,
          language_code: userData.language_code,
        });
      } else {
        // Если не в Telegram (демо), подставляем тестового
        setUser({
          id: 987654,
          first_name: 'Демо',
          username: 'demo_user',
        });
      }

      // Хептик-фидбек (глобально)
      tg.HapticFeedback = tg.HapticFeedback || {
        impactOccurred: () => {},
        notificationOccurred: () => {},
      };
    } else {
      // Симуляция для браузера
      console.warn('Telegram WebApp not found, using mock');
      setUser({
        id: 987654,
        first_name: 'Демо',
        username: 'demo_user',
      });
    }
  }, [setUser]);

  return <>{children}</>;
};
