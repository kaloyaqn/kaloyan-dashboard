import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import styled from "styled-components"

import MetricItem from "@/components/MetricItem";


export default function Index({data}) {
  const router = useRouter();
  const { user } = useUser();
  const [userFirstname, setUserFirstname] = useState("зареждане...");
  const [projectCount, setProjectCount] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const firstName = user.firstName;
      setUserFirstname(firstName);
    };
    
    const fetchProjectData = async() => {
      const res = await fetch("/api/project/count");
      const data = await res.json();
      setProjectCount(data)
    };
    fetchProjectData()
    if (user) {
      fetchUser();
    }
  }, [user],);

  return (
    <>
      <Head>
        <title>Dashboard - Home</title>
        <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
      </Head>
      <div className="flex column g-32">
        <div className="flex column g-4">
          <h2 className="welcome-back">
            Здравей отново, {userFirstname}
          </h2>
          <Description>
            Можеш да следи оборот, добавяш проекти, записваш кленти и още.
          </Description>
        </div>
      
      <div className="metricContainer flex g-24">
      <MetricItem metricItemTitle="Общо проекти" metricItemCount={projectCount}/>
      <MetricItem metricItemTitle="Оборот" metricItemCount="-2лв"/>
      <MetricItem metriv/>
      </div>
      </div>
      

    </>
  );
}

const Description = styled.p`
  color: var(--gray-500);
`