import Head from "next/head"
import { useRouter } from "next/router"

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

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <h1>Welcome to the dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}