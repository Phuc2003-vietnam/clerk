import { Clerk } from '@clerk/clerk-js'

const clerkPubKey = "pk_test_cmVsYXRpdmUtZ2xpZGVyLTg3LmNsZXJrLmFjY291bnRzLmRldiQ"
const clerk = new Clerk(clerkPubKey)
await clerk.load()

if (clerk.user) {
  document.getElementById('app').innerHTML = `
    <div id="user-button"></div>
  `

  const userButtonDiv = document.getElementById('user-button')

  clerk.mountUserButton(userButtonDiv)
} else {
  document.getElementById('app').innerHTML = `
    <div id="sign-in"></div>
  `

  const signInDiv = document.getElementById('sign-in')

  clerk.mountSignIn(signInDiv)
}