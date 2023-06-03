import Head from "next/head"
import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"


export default function Index() {

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('api/user/logout', {
        method: "POST",
      });

      router.push("/login");
    } catch (e) {
      console.error('Logout failed',e)
    }
  }

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
       Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}