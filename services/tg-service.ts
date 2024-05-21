/** @format */

import { User } from '@/db/models';
import { AuthRolesEnum, ProjectStatusEnum } from '@/types';
import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.TG_BOT!, {
  polling: false,
});

async function findAdmin(): Promise<Array<string>> {
  return User.distinct('tgId', { role: AuthRolesEnum.ADMIN });
}

export async function sendTgNotification(
  projectName: string,
  event: ProjectStatusEnum
): Promise<void> {
  const adminChatIds = await findAdmin();

  if (adminChatIds.length > 0) {
    const sendPromises = adminChatIds.map((adminChatId) =>
      bot.sendMessage(adminChatId, `${event}: ${projectName}`)
    );
    try {
      await Promise.allSettled(sendPromises);
    } catch (error) {
      console.error(error);
    }
  }
}
