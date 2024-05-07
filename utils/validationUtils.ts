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
