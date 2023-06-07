import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import styled from "styled-components"

export default function Index() {
  const router = useRouter();
  const { user } = useUser();
  const [userFirstname, setUserFirstname] = useState("зареждане...");

  useEffect(() => {
    const fetchUser = async () => {
      const firstName = user.firstName;
      setUserFirstname(firstName);
    };

    if (user) {
      fetchUser();
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <div className="flex column g-4">
        <h2 className="welcome-back">
          Здравей отново, {userFirstname}
        </h2>
        <Description>
          Можеш да следи оборот, добавяш проекти, записваш кленти и още.
        </Description>
      </div>

    </>
  );
}


const Description = styled.p`
  color: var(--gray-500);
`