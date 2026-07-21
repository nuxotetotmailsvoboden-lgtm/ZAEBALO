import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramNotification } from '@/services/telegramBot';
import { ADMIN_ID } from '@/lib/constants';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, functions, design, description, cost, user, timestamp } = body;

    if (!user || !user.id) {
      return NextResponse.json({ success: false, error: 'User data missing' }, { status: 400 });
    }

    // Формируем сообщение для админа
    const message = `
📩 <b>Новая заявка</b>
👤 <b>Клиент:</b> ${user.first_name} ${user.last_name || ''} (@${user.username || 'no_username'})
🆔 <b>ID:</b> ${user.id}
📋 <b>Тип:</b> ${type}
⚙️ <b>Функции:</b> ${functions.join(', ') || 'нет'}
🎨 <b>Дизайн:</b> ${design}
💰 <b>Стоимость:</b> ${cost} ₽
📝 <b>Описание:</b> ${description}
🕒 <b>Время:</b> ${new Date(timestamp).toLocaleString()}
    `;

    // Отправляем админу
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (token && ADMIN_ID) {
      await sendTelegramNotification(token, ADMIN_ID, message);
    } else {
      console.warn('Telegram bot token or admin ID not set');
    }

    // Здесь можно сохранить в БД, но пока просто возвращаем успех
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in submit-request:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
