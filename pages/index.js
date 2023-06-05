import Head from "next/head"
import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import { UserButton } from "@clerk/nextjs";


export default function Index() {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <UserButton afterSignOutUrl="/"/>

    </>
  )
}