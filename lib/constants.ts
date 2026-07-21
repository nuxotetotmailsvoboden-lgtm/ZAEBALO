export const ADMIN_ID = Number(process.env.NEXT_PUBLIC_ADMIN_CHAT_ID) || 0;

export const BASE_COST = 40000;

export const FUNC_COSTS: Record<string, number> = {
  'Авторизация': 8000,
  'Оплата': 12000,
  'Админка': 15000,
  'CRM': 15000,
  'Рассылка': 8000,
  'Уведомления': 6000,
  'AI OpenAI': 18000,
  'База данных': 12000,
  'Личный кабинет': 10000,
  'Реферальная система': 12000,
  'Подписки': 14000,
  'API Интеграции': 10000,
};

export const DESIGN_COSTS: Record<DesignType, number> = {
  'Light': 0,
  'Dark': 5000,
  'Premium': 15000,
  'Corporate': 8000,
  'Custom': 20000,
};

export const FUNCTIONS_LIST = Object.keys(FUNC_COSTS);
export const DESIGN_LIST = Object.keys(DESIGN_COSTS) as DesignType[];
export const PROJECT_TYPES: ProjectType[] = ['Telegram Bot', 'Mini App', 'AI Assistant', 'CRM'];
