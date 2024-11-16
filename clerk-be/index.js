import 'dotenv/config'
import express from 'express'
import { clerkClient, requireAuth,clerkMiddleware } from '@clerk/express'


const app = express()

// app.use(clerkMiddleware())

app.get('/protected', requireAuth(), async (req, res) => {
  const user = await clerkClient.users.getUser(req.auth.userId)
  if (user?.privateMetadata?.role!=='admin'){
    return res.status(403).send('Forbidden')  // Forbidden error if user has no admin role
  }
  res.send(user)
})



app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})