/** @format */

import { User } from '@/db/models';
import { AuthRolesEnum } from '@/types';
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TG_BOT!, {
  polling: false,
});

async function findAdmin(): Promise<Array<string>> {
  return User.distinct('tgId', { role: AuthRolesEnum.ADMIN });
}

export async function sendTgNotification(projectName: string): Promise<void> {
  const adminChatIds = await findAdmin();
  console.log('ADMIN', adminChatIds);
  if (adminChatIds.length > 0) {
    const sendPromises = adminChatIds.map((adminChatId) =>
      bot.sendMessage(adminChatId, `New project for review: ${projectName}`)
    );
    try {
      const res = await Promise.all(sendPromises);
      console.log('res', res);
    } catch (error) {
      console.error('Failed to send some messages', error);
    }
  }
}
