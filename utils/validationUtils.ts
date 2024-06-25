/** @format */

import { ZodSchema, z } from 'zod';
function getZodSchemaFieldsShallow(schema: ZodSchema) {
  const fields: Record<string, true> = {};
  const proxy = new Proxy(fields, {
    get(_, key) {
      if (key === 'then' || typeof key !== 'string') {
        return;
      }
      fields[key] = true;
    },
  });
  schema.safeParse(proxy);
  return fields;
}

export function extractDataForValidation(
  schema: ZodSchema,
  formData: FormData
): Record<string, unknown> {
  const dataForValidation: Record<string, unknown> = {};

  const schemaShape = getZodSchemaFieldsShallow(schema);

  for (const key in schemaShape) {
    const value = formData.get(key);
    if (value !== null) {
      dataForValidation[key] = value;
    }
  }

  return dataForValidation;
}

//@todo - будут силы и желание надо бы переписать это все на 2 функции
export const validateInput = (type: string, value: string) => {
  switch (type) {
    case 'projectName':
      return validateProjectName(value);
    case 'email':
      return validateEmail(value);
    case 'telegram':
      return validateTelegram(value);
    case 'contactName':
      return validateContactName(value);
    case 'web':
      return validateURL(value);
    case 'twitter':
      return validateTwitter(value);
    case 'discord':
      return validateDiscord(value);
    case 'pitchdeck':
      return validatePitch(value);
    case 'projectTg':
      return validateTelegram(value);

    default:
      return true;
  }
};

const validateEmail = (value: string) => {
  const emailRegex = /^[A-Z0-9._%+-]{1,15}@[A-Z0-9.-]{1,20}\.[A-Z]{2,4}$/i;
  return emailRegex.test(value);
};

const validateTelegram = (value: string) => {
  const telegramRegex = /^https:\/\/t\.me\/[a-zA-Z0-9_]{1,32}$/;
  return telegramRegex.test(value);
};

const validateProjectName = (value: string) => {
  const minLength = 1;
  const maxLength = 10;
  return value.length >= minLength && value.length <= maxLength;
};

const validateContactName = (value: string) => {
  const minLength = 1;
  const maxLength = 10;
  return value.length >= minLength && value.length <= maxLength;
};

const validateURL = (value: string) => {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z\d.-]{1,232})\.([a-z.]{2,6})([\/\w .-]*){0,232}\/?$/;
  return urlRegex.test(value);
};

const validateTwitter = (value: string) => {
  const twitterRegex = /^@[A-Za-z0-9_]{1,15}$/;
  return twitterRegex.test(value);
};
const validateDiscord = (value: string) => {
  const discordRegex = /^https:\/\/discord\.gg\/[a-zA-Z0-9_]{1,32}$/;
  return discordRegex.test(value);
};

const validatePitch = (value: string) => {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z\d.-]{1,232})\.([a-z.]{2,6})([\/\w .-]*){0,232}\/?$/;
  return urlRegex.test(value);
};
