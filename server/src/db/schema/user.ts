import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { InferModel, relations } from "drizzle-orm"

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique()
})


export type User = InferModel<typeof users>
