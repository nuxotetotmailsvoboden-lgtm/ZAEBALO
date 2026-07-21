import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@/context/UserContext';
import { TelegramProvider } from '@/hooks/useTelegram';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NOVA — Telegram Mini App',
  description: 'Создаём ботов для бизнеса',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        <UserProvider>
          <TelegramProvider>
            {children}
          </TelegramProvider>
        </UserProvider>
      </body>
    </html>
  );
}
