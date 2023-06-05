import Link from "next/link"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Button from '@mui/material/Button';
import { UserButton } from "@clerk/nextjs";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [announce, setAnnounce] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  // const [session, loading] = useSession();
  const links = [
    { name: "Начало", url: "/", icon: "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z' stroke='#667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"
    },
    { name: "Проекти", url: "/projects", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    { name: "Клиенти", url: "/clients", icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
  ];

  function handleMouseEnter() {
    
  }

  function handleMouseLeave() {
    clearTimeout(timeoutId);
    setIsHovered(false);
  }

  function handleMobileNavClick() {
    setIsOpen(isOpen => !isOpen);
  }
  
  return (
    <>
      <div className="mobile-nav p-16 space-between align-center">
        <Logo>
          <svg width="145" height="39" viewBox="0 0 145 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_2_30367)">
          <g clip-path="url(#clip0_2_30367)">
          <rect x="3" y="2.5" width="32" height="32" rx="8" fill="white"/>
          <rect x="3" y="2.5" width="32" height="32" rx="8" fill="url(#paint0_linear_2_30367)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9998 4.53882C11.2892 4.53882 5.03861 10.7894 5.03861 18.5C5.03861 26.2105 11.2892 32.4612 18.9998 32.4612C26.7103 32.4612 32.9609 26.2105 32.9609 18.5C32.9609 10.7894 26.7103 4.53882 18.9998 4.53882ZM4.96094 18.5C4.96094 10.7466 11.2463 4.46115 18.9998 4.46115C26.7532 4.46115 33.0386 10.7466 33.0386 18.5C33.0386 26.2534 26.7532 32.5388 18.9998 32.5388C11.2463 32.5388 4.96094 26.2534 4.96094 18.5Z" fill="#D0D5DD"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19 14.5779C16.8338 14.5779 15.0777 16.334 15.0777 18.5002C15.0777 20.6665 16.8338 22.4225 19 22.4225C21.1662 22.4225 22.9223 20.6665 22.9223 18.5002C22.9223 16.334 21.1662 14.5779 19 14.5779ZM15 18.5002C15 16.2911 16.7909 14.5002 19 14.5002C21.2091 14.5002 23 16.2911 23 18.5002C23 20.7094 21.2091 22.5002 19 22.5002C16.7909 22.5002 15 20.7094 15 18.5002Z" fill="#D0D5DD"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0004 15.8201C17.5205 15.8201 16.3208 17.0198 16.3208 18.4997C16.3208 19.9796 17.5205 21.1793 19.0004 21.1793C20.4804 21.1793 21.6801 19.9796 21.6801 18.4997C21.6801 17.0198 20.4804 15.8201 19.0004 15.8201ZM16.2432 18.4997C16.2432 16.9769 17.4776 15.7424 19.0004 15.7424C20.5233 15.7424 21.7577 16.9769 21.7577 18.4997C21.7577 20.0225 20.5233 21.257 19.0004 21.257C17.4776 21.257 16.2432 20.0225 16.2432 18.4997Z" fill="#D0D5DD"/>
          <path d="M18.9609 2.5H19.0386V34.5H18.9609V2.5Z" fill="#D0D5DD"/>
          <path d="M35 18.4609L35 18.5386L3 18.5386L3 18.4609L35 18.4609Z" fill="#D0D5DD"/>
          <path d="M29.6016 2.5H29.6792V34.5H29.6016V2.5Z" fill="#D0D5DD"/>
          <path d="M13.6406 2.5H13.7183V34.5H13.6406V2.5Z" fill="#D0D5DD"/>
          <path d="M24.2812 2.5H24.3589V34.5H24.2812V2.5Z" fill="#D0D5DD"/>
          <path d="M8.32031 2.5H8.39798V34.5H8.32031V2.5Z" fill="#D0D5DD"/>
          <path d="M35 29.1016L35 29.1792L3 29.1792L3 29.1016L35 29.1016Z" fill="#D0D5DD"/>
          <path d="M35 13.1406L35 13.2183L3 13.2183L3 13.1406L35 13.1406Z" fill="#D0D5DD"/>
          <path d="M35 23.7812L35 23.8589L3 23.8589L3 23.7812L35 23.7812Z" fill="#D0D5DD"/>
          <path d="M35 7.82031L35 7.89798L3 7.89798L3 7.82031L35 7.82031Z" fill="#D0D5DD"/>
          <g filter="url(#filter1_dd_2_30367)">
          <circle cx="19" cy="18.5" r="8" fill="url(#paint1_linear_2_30367)"/>
          </g>
          <g filter="url(#filter2_b_2_30367)">
          <path d="M3 18.5H35V21.7C35 26.1804 35 28.4206 34.1281 30.1319C33.3611 31.6372 32.1372 32.8611 30.6319 33.6281C28.9206 34.5 26.6804 34.5 22.2 34.5H15.8C11.3196 34.5 9.07937 34.5 7.36808 33.6281C5.86278 32.8611 4.63893 31.6372 3.87195 30.1319C3 28.4206 3 26.1804 3 21.7V18.5Z" fill="white" fill-opacity="0.2"/>
          </g>
          </g>
          <rect x="3.15" y="2.65" width="31.7" height="31.7" rx="7.85" stroke="#D0D5DD" stroke-width="0.3"/>
          </g>
          <path d="M54.004 10.9545H56.6389V20.4574C56.6389 21.499 56.3927 22.4152 55.9003 23.2059C55.4126 23.9967 54.7261 24.6146 53.8406 25.0596C52.9552 25.5 51.9207 25.7202 50.7369 25.7202C49.5485 25.7202 48.5116 25.5 47.6262 25.0596C46.7407 24.6146 46.0542 23.9967 45.5665 23.2059C45.0788 22.4152 44.835 21.499 44.835 20.4574V10.9545H47.4699V20.2372C47.4699 20.8433 47.6025 21.383 47.8676 21.8565C48.1375 22.33 48.5163 22.7017 49.004 22.9716C49.4917 23.2367 50.0693 23.3693 50.7369 23.3693C51.4046 23.3693 51.9822 23.2367 52.4699 22.9716C52.9623 22.7017 53.3411 22.33 53.6063 21.8565C53.8714 21.383 54.004 20.8433 54.004 20.2372V10.9545Z" fill="#101828"/>
          <path d="M61.9603 19.1079V25.5H59.3893V14.5909H61.8467V16.4446H61.9745C62.2255 15.8338 62.6256 15.3485 63.1748 14.9886C63.7288 14.6288 64.413 14.4488 65.2274 14.4488C65.9802 14.4488 66.636 14.6098 67.1947 14.9318C67.7581 15.2538 68.1937 15.7202 68.5015 16.3309C68.814 16.9417 68.9679 17.6827 68.9632 18.554V25.5H66.3921V18.9517C66.3921 18.2225 66.2027 17.652 65.824 17.24C65.4499 16.8281 64.9314 16.6221 64.2686 16.6221C63.8187 16.6221 63.4186 16.7216 63.0683 16.9204C62.7226 17.1146 62.4504 17.3963 62.2515 17.7656C62.0574 18.1349 61.9603 18.5824 61.9603 19.1079Z" fill="#101828"/>
          <path d="M77.0242 14.5909V16.5795H70.7529V14.5909H77.0242ZM72.3012 11.9773H74.8722V22.2187C74.8722 22.5644 74.9243 22.8295 75.0285 23.0142C75.1374 23.1941 75.2794 23.3172 75.4546 23.3835C75.6298 23.4498 75.824 23.4829 76.037 23.4829C76.198 23.4829 76.3448 23.4711 76.4774 23.4474C76.6147 23.4238 76.7188 23.4024 76.7899 23.3835L77.2231 25.3934C77.0858 25.4408 76.8893 25.4929 76.6336 25.5497C76.3827 25.6065 76.0749 25.6397 75.7103 25.6491C75.0664 25.6681 74.4864 25.571 73.9703 25.3579C73.4542 25.1401 73.0446 24.804 72.7416 24.3494C72.4433 23.8949 72.2965 23.3267 72.3012 22.6449V11.9773Z" fill="#101828"/>
          <path d="M79.1744 25.5V14.5909H81.7455V25.5H79.1744ZM80.4671 13.0426C80.0599 13.0426 79.7095 12.9077 79.4159 12.6378C79.1224 12.3631 78.9756 12.0341 78.9756 11.6506C78.9756 11.2623 79.1224 10.9332 79.4159 10.6633C79.7095 10.3887 80.0599 10.2514 80.4671 10.2514C80.879 10.2514 81.2294 10.3887 81.5182 10.6633C81.8118 10.9332 81.9585 11.2623 81.9585 11.6506C81.9585 12.0341 81.8118 12.3631 81.5182 12.6378C81.2294 12.9077 80.879 13.0426 80.4671 13.0426Z" fill="#101828"/>
          <path d="M89.8367 14.5909V16.5795H83.5654V14.5909H89.8367ZM85.1137 11.9773H87.6847V22.2187C87.6847 22.5644 87.7368 22.8295 87.841 23.0142C87.9499 23.1941 88.0919 23.3172 88.2671 23.3835C88.4423 23.4498 88.6365 23.4829 88.8495 23.4829C89.0105 23.4829 89.1573 23.4711 89.2899 23.4474C89.4272 23.4238 89.5313 23.4024 89.6024 23.3835L90.0356 25.3934C89.8983 25.4408 89.7018 25.4929 89.4461 25.5497C89.1952 25.6065 88.8874 25.6397 88.5228 25.6491C87.8789 25.6681 87.2989 25.571 86.7828 25.3579C86.2667 25.1401 85.8571 24.804 85.5541 24.3494C85.2558 23.8949 85.109 23.3267 85.1137 22.6449V11.9773Z" fill="#101828"/>
          <path d="M94.7923 10.9545V25.5H92.2213V10.9545H94.7923Z" fill="#101828"/>
          <path d="M102.266 25.7131C101.172 25.7131 100.227 25.4858 99.4319 25.0312C98.6412 24.572 98.0328 23.9233 97.6066 23.0852C97.1805 22.2424 96.9674 21.2505 96.9674 20.1094C96.9674 18.9872 97.1805 18.0024 97.6066 17.1548C98.0375 16.3025 98.6388 15.6397 99.4106 15.1662C100.182 14.688 101.089 14.4488 102.131 14.4488C102.803 14.4488 103.438 14.5577 104.034 14.7756C104.636 14.9886 105.166 15.3201 105.625 15.7699C106.089 16.2197 106.454 16.7926 106.719 17.4886C106.984 18.1799 107.117 19.0038 107.117 19.9602V20.7486H98.1748V19.0156H104.652C104.647 18.5232 104.541 18.0852 104.332 17.7017C104.124 17.3134 103.833 17.008 103.459 16.7855C103.09 16.563 102.659 16.4517 102.166 16.4517C101.641 16.4517 101.179 16.5795 100.781 16.8352C100.384 17.0862 100.073 17.4176 99.8509 17.8295C99.6331 18.2367 99.5219 18.6842 99.5171 19.1719V20.6846C99.5171 21.3191 99.6331 21.8636 99.8651 22.3182C100.097 22.768 100.421 23.1136 100.838 23.3551C101.255 23.5918 101.743 23.7102 102.301 23.7102C102.675 23.7102 103.014 23.6581 103.317 23.554C103.62 23.4451 103.883 23.2864 104.105 23.0781C104.328 22.8698 104.496 22.6117 104.609 22.304L107.01 22.5738C106.859 23.2083 106.57 23.7623 106.144 24.2358C105.722 24.7045 105.182 25.0691 104.524 25.3295C103.866 25.5852 103.113 25.7131 102.266 25.7131Z" fill="#101828"/>
          <path d="M113.34 25.6917C112.483 25.6917 111.716 25.4716 111.039 25.0312C110.362 24.5909 109.827 23.9517 109.434 23.1136C109.041 22.2756 108.844 21.2576 108.844 20.0596C108.844 18.8475 109.043 17.8248 109.441 16.9915C109.843 16.1534 110.385 15.5213 111.067 15.0952C111.749 14.6643 112.509 14.4488 113.347 14.4488C113.986 14.4488 114.512 14.5577 114.924 14.7756C115.336 14.9886 115.662 15.2467 115.904 15.5497C116.145 15.848 116.332 16.1297 116.465 16.3949H116.571V10.9545H119.15V25.5H116.621V23.7812H116.465C116.332 24.0464 116.141 24.3281 115.89 24.6264C115.639 24.92 115.307 25.1709 114.895 25.3792C114.483 25.5876 113.965 25.6917 113.34 25.6917ZM114.057 23.5824C114.602 23.5824 115.066 23.4356 115.449 23.142C115.833 22.8437 116.124 22.4294 116.323 21.8991C116.522 21.3688 116.621 20.7509 116.621 20.0454C116.621 19.3399 116.522 18.7268 116.323 18.2059C116.129 17.6851 115.84 17.2803 115.456 16.9915C115.078 16.7026 114.611 16.5582 114.057 16.5582C113.484 16.5582 113.006 16.7074 112.623 17.0057C112.239 17.304 111.95 17.7159 111.756 18.2415C111.562 18.767 111.465 19.3684 111.465 20.0454C111.465 20.7273 111.562 21.3357 111.756 21.8707C111.955 22.401 112.246 22.8201 112.63 23.1278C113.018 23.4309 113.494 23.5824 114.057 23.5824Z" fill="#101828"/>
          <path d="M136.133 10.9545H138.768V20.4574C138.768 21.499 138.522 22.4152 138.029 23.2059C137.542 23.9967 136.855 24.6146 135.97 25.0596C135.084 25.5 134.05 25.7202 132.866 25.7202C131.677 25.7202 130.64 25.5 129.755 25.0596C128.87 24.6146 128.183 23.9967 127.695 23.2059C127.208 22.4152 126.964 21.499 126.964 20.4574V10.9545H129.599V20.2372C129.599 20.8433 129.731 21.383 129.997 21.8565C130.266 22.33 130.645 22.7017 131.133 22.9716C131.621 23.2367 132.198 23.3693 132.866 23.3693C133.533 23.3693 134.111 23.2367 134.599 22.9716C135.091 22.7017 135.47 22.33 135.735 21.8565C136 21.383 136.133 20.8433 136.133 20.2372V10.9545Z" fill="#101828"/>
          <path d="M144.267 10.9545V25.5H141.632V10.9545H144.267Z" fill="#101828"/>
          <defs>
          <filter id="filter0_dd_2_30367" x="0" y="0.5" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_30367"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_2_30367" result="effect2_dropShadow_2_30367"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_30367" result="shape"/>
          </filter>
          <filter id="filter1_dd_2_30367" x="8" y="8.5" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_30367"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_2_30367" result="effect2_dropShadow_2_30367"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_30367" result="shape"/>
          </filter>
          <filter id="filter2_b_2_30367" x="-2" y="13.5" width="42" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_30367"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_30367" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_2_30367" x1="19" y1="2.5" x2="19" y2="34.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="#D0D5DD"/>
          </linearGradient>
          <linearGradient id="paint1_linear_2_30367" x1="15" y1="26.5" x2="23" y2="10.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#53389E"/>
          <stop offset="1" stop-color="#6941C6"/>
          </linearGradient>
          <clipPath id="clip0_2_30367">
          <rect x="3" y="2.5" width="32" height="32" rx="8" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </Logo>
        <button onClick={handleMobileNavClick}>
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="40" height="40" rx="8" fill="white"/>
        <path d="M11 20.5H25M11 14.5H29M11 26.5H29" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
      <div className={isOpen ? 'mobile-nav-open' : "d-none"}>
      <ul className="flex column g-16">
              {links.map((link) => (
                <li className="flex" key={link.name}>
                  <Link className="flex align-center g-16" href={link.url}>
                  {link.icon ? <span dangerouslySetInnerHTML={{__html: link.icon}} /> : null}
                    <span className="link-name">{link.name}</span></Link>
                </li>
              ))}
      </ul>
      </div>
      <aside>
        <Sidebar className={isHovered ? 'hover-active' : ""} >
          <SidebarTitle onClick={handleMouseEnter} >
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
            <UserButton afterSignOutUrl="/"/>
            </ProfileContainer>
          </div>
        </Sidebar>

      </aside>
    </>
  )
}

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
const Logo = styled.div`
`

export default Header