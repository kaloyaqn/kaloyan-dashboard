import Link from "next/link"
import { useState, useEffect } from "react"
import styled from "styled-components"


const Sidebar = styled.div`
z-index:11;
position: fixed;
height:100vh;
max-width:312px;
width:96px;
background:#fff;
border-right:1px solid #EAECF0;
padding-top:2rem;
display:flex;
flex-direction:column;
gap:24px;
transition: width 200ms cubic-bezier(0.08,0.52,0.52,1);


  div {
    padding-left: 1.5rem;
    padding-right:1.5rem;
  }

  div > div {
    padding-left: 0;
    padding-right:0;
  }


    .info, input, .link-name, .profile-information, .profile button {
      display:none;
      opacity: 0;
      transform: translateX(0%);
    }

    @media (max-width: 768px) {
      display:none;
    }
  
`

const SidebarTitle = styled.h3`
  padding-left: 24px;
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-text-xl);
`

const SidebarSearch = styled.div`

`

const SidebarLinks = styled.div`
  ul {
    gap:4px;
  }

  li {
    padding: 8px 12px;
    cursor:pointer;
    gap:12px;

    &:hover {
      background: var(--gray-50);
      border-radius: 6px;
    }

    a {
      color: var(--gray-700);
      font-size: var(--font-size-text-md);
      font-weight: var(--font-weight-medium);
    }
  }
`

const Divider = styled.div`
height: 1px;
width:100%;
/* Gray/200 */

background: var(--gray-200);
`

const ProfileContainer = styled.div`
padding: 0px 8px;
padding-bottom:2rem;
position: fixed;
bottom: 0;

img {
  border-radius:100px;
}

h5 {
  font-size: var(--font-size-test-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--gray-900);
}

small {
  font-size: var(--font-size-text-sm);
  font-weight: var(--font-weight-regular);
  color: var(--gray-500);
}
`

const SidebarInfo = styled.div`

  padding: 20px 1rem !important;
  background: var(--gray-50);
  border-radius:8px;  

  h4 {
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-medium);
  }

  p {
     font-size: var(--font-size-text-sm);
     font-weight: var(--font-weight-regular);
     color: var(--gray-500);
  }
`


const Header = (props) => {
  const [isOpen, setIsOpen] = useState("");
  const [announce, setAnnounce] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  // const [session, loading] = useSession();
  const links = [
    { name: "Dashboard", url: "/", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z' stroke='#667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    },
    { name: "Projects", url: "/about", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    { name: "Tasks", url: "/contact", icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  ];

  function handleMouseEnter() {
    const id = setTimeoutId(() => setIsHovered(true), 2000);
    setTimeoutId(id);
  }

  function handleMouseLeave() {
    clearTimeout(timeoutId);
    setIsHovered(false);
  }
  
  return (
    <aside>
      <Sidebar className={isHovered ? 'hover-active' : ""} onClick={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SidebarTitle>
          Static
        </SidebarTitle>
        {/* <SidebarSearch>
          <input placeholder="Search"/>
        </SidebarSearch> */}
        <SidebarLinks>
          <ul className="flex column">
            {links.map((link) => (
              <li className="flex" key={link.name}>
                <Link className="flex align-center g-12" href={link.url}>
                {link.icon ? <span dangerouslySetInnerHTML={{__html: link.icon}} /> : null}
                  <span className="link-name">{link.name}</span></Link>
              </li>
            ))}
          </ul>
        </SidebarLinks>

        {announce && (
        <div className="info">
        <SidebarInfo className="flex column g-16">
          <div className="flex column g-4">
          <h4>Announce</h4>
          <p>Your team has used 80% of your available space. Need more?</p>
          </div>
          <div className="flex g-12">
              <button className="yes">Okay</button>
          </div>
        </SidebarInfo>
        </div>
        )}

        <div className="profile">
          <ProfileContainer className="flex g-32 ">
            
          <div className="flex g-12">
            <img className="pfp" src="https://picsum.photos/40"/>
              <div className="profile-information">
              <h5>Kaloyan Angelov</h5>
              {/* <small>{session.user.email}</small> */}
            </div>
          </div>
          <button>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
              
          </ProfileContainer>
        </div>
      </Sidebar>

    </aside>
  )
}

export default Header