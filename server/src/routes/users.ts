import { Router, Request, Response } from 'express'

import db from '../db'
import { users, User } from "../db/schema/user"

export async function getAllUsers() {
  const allUsers = await db.select().from(users)

  return allUsers
}

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await getAllUsers()
  res.json(result)
})

router.post('/', (req: Request, res: Response) => {
    res.json({ message: 'User created' })
})

router.get('/:userId', (req: Request, res: Response) => {
    res.json({ message: `User with ID ${req.params.userId}` })
})

export default router
