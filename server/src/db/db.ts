import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { migrate } from "drizzle-orm/postgres-js/migrator"
import * as schema from "./schema"

const connectionString = process.env.DATABASE_URL!

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client, { schema });

// migrate(db, { migrationsFolder: 'supabase/migrations' } )

export default db
