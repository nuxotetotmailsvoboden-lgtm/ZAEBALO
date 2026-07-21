import { TelegramUser } from '@/types';

export default function ProfileStats({ user }: { user: TelegramUser }) {
  return (
    <div className="glass p-6 mt-4">
      <div className="flex justify-between text-sm">
        <span className="text-purple-200/50">Дата регистрации</span>
        <span>{new Date().toLocaleDateString()}</span>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span className="text-purple-200/50">Заявок</span>
        <span>0</span>
      </div>
    </div>
  );
}
