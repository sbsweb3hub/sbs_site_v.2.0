/** @format */

'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import DashboardService from './dashboard-service';

// let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
//   ssl: "allow",
// });

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const schema = z.object({
    todo: z.string().min(1),
  });
  const ProjectSchema = z.object({
    // owner: z.string(),
    projectName: z.string().min(1, 'Project name is required'),
    contactName: z.string().min(1, 'Contact name is required'),
    telegram: z.string().min(1, 'Telegram handle is required'),
    email: z.string().email().min(1, 'Email is required'),
    web: z.string().optional(),
    twitter: z.string().optional(),
    pitchdeck: z.string().optional(),
    tokenomik: z.string().optional(),
    links: z.string().optional(),
    startDate: z.coerce.date(),
    description: z.string().min(1, 'Description is required'),
    ecosystem: z.string().min(1, 'Ecosystem is required'),
    team: z.string().min(1, 'Team information is required'),
    members: z.string().min(1, 'Member details are required'),
    community: z.string().min(1, 'Member details are required'),
  });
  const parse = ProjectSchema.safeParse({
    // owner: formData.get('owner'),
    projectName: formData.get('projectName'),
    contactName: formData.get('contactName'),
    telegram: formData.get('telegram'),
    email: formData.get('email'),
    web: formData.get('web'),
    twitter: formData.get('twitter'),
    pitchdeck: formData.get('pitchdeck'),
    tokenomik: formData.get('tokenomik'),
    links: formData.get('links'),
    startDate: formData.get('startDate'),
    description: formData.get('description'),
    ecosystem: formData.get('ecosystem'),
    team: formData.get('team'),
    members: formData.get('members'),
    community: formData.get('community'),
  });

  if (!parse.success) {
    console.log('FAIL PARSE');
    return { message: 'Failed to create todo' };
  }

  const data = parse.data;
  console.log('data PARSE', data);

  try {
    // const res = await fetch('http://localhost:3000/projects', {
    //   method: 'post',
    //   body: JSON.stringify(data),
    // });
    //   const response = await res.json();
    const res = await DashboardService.createProject(data);

    console.log('response', res);

    revalidatePath('/');
    return { message: `Added todo ${data.projectName}` };
  } catch (e) {
    return { message: 'Failed to create todo' };
  }
}

// export async function deleteTodo(
//   prevState: {
//     message: string;
//   },
//   formData: FormData,
// ) {
//   const schema = z.object({
//     id: z.string().min(1),
//     todo: z.string().min(1),
//   });
//   const data = schema.parse({
//     id: formData.get("id"),
//     todo: formData.get("todo"),
//   });

//   try {
//     await sql`
//       DELETE FROM todos
//       WHERE id = ${data.id};
//     `;

//     revalidatePath("/");
//     return { message: `Deleted todo ${data.todo}` };
//   } catch (e) {
//     return { message: "Failed to delete todo" };
//   }
// }
