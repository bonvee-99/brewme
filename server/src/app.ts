import express, { Application, Request, Response } from "express"

import users from './routes/users'

// import { createClient } from '@supabase/supabase-js'

import dotenv from 'dotenv'
dotenv.config()

// const supabaseUrl = process.env.SUPABASE_URL!
// const supabaseKey = process.env.SUPABASE_KEY!
// const supabase = createClient(supabaseUrl, supabaseKey)

const PORT = process.env.PORT || 5000

const app: Application = express()

app.use(express.json())

app.use('/users', users)

app.listen(PORT, () => {
  console.log("server running")
})
