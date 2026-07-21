export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

export interface UserState {
  user: TelegramUser | null;
  isAdmin: boolean;
}

export type ProjectType = 'Telegram Bot' | 'Mini App' | 'AI Assistant' | 'CRM';
export type DesignType = 'Light' | 'Dark' | 'Premium' | 'Corporate' | 'Custom';

export interface RequestPayload {
  type: ProjectType;
  functions: string[];
  design: DesignType;
  description: string;
  cost: number;
  user: TelegramUser;
  timestamp: string;
}
