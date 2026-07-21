import { TelegramUser } from '@/types';

export default function ProfileHeader({ user, isAdmin }: { user: TelegramUser; isAdmin: boolean }) {
  return (
    <div className="glass p-6 flex items-center gap-5">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white">
        {user.first_name.charAt(0).toUpperCase()}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{user.first_name} {user.last_name || ''}</h3>
        <p className="text-sm text-purple-200/50">@{user.username || 'username'}</p>
        <p className="text-xs text-purple-200/30">ID: {user.id}</p>
        {isAdmin && <span className="text-xs bg-purple-500/20 px-2 py-0.5 rounded-full text-purple-300">👑 Админ</span>}
      </div>
    </div>
  );
}
