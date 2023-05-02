import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';

    }

    :root {
        //COLORS

        //gray
        
        --gray-25:  #FCFCFD;
        --gray-50:  #F9FAFB;
        --gray-100: #F2F4F7;
        --gray-200: #EAECF0;
        --gray-300: #D0D5DD;
        --gray-400: #98A2B3;
        --gray-500: #667085;
        --gray-600: #475467;
        --gray-700: #344054;
        --gray-800: #1D2939;
        --gray-900: #101828;

        //primary
        --primary-25:  #FCFAFF;
        --primary-50:  #F9F5FF;
        --primary-100: #F4EBFF;
        --primary-200: #E9D7FE;
        --primary-300: #D6BBFB;
        --primary-400: #B692F6;
        --primary-500: #9E77ED;
        --primary-600: #7F56D9;
        --primary-700: #6941C6;
        --primary-800: #53389E;
        --primary-900: #42307D;        

        //TYPOGRAPHY

        //typography size display
        --font-size-display-2xl: 4.5rem;
        --font-size-display-xl: 3.75rem;
        --font-size-display-lg: 3rem;
        --font-size-display-md: 2.25rem;
        --font-size-display-sm: 1.875rem;
        --font-size-display-xs: 1.5rem;

        //typography size text
        --font-size-text-xl: 1.25rem;
        --font-size-text-lg: 1.125rem;
        --font-size-text-md: 1rem;
        --font-size-text-sm: 0.875rem;
        --font-size-text-xs: 0.75rem;

        //typography weight
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;

        //SHADOWS
        --shadow-xs--primary: 1px 2px rgba(16, 24, 40, 0.05);
        --shadow-xs: 0px 1px 2px rgba(16, 24, 40, 0.05);
        --shadow-sm: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
        --shadow-md: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
        --shadow-lg: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
        --shadow-xl: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
        --shadow-2xl: 0px 24px 48px -12px rgba(16, 24, 40, 0.18);
        --shadow-3xl: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
    }

    a {
        text-decoration:none;
    }

    li {
        list-style-type: none;
    }

    .flex {
        display:flex !important;
    }

    .column {
        flex-direction: column !important;
    }

    .justify-center {
        justify-content: center !important;
    }

    .space-between {
        justify-content: space-between !important;
    }

    .align-center {
        align-items: center !important;
    }

    .vh-100 {
       height:100vh !important;
    }

    .g-4 {
        gap:4px;
    }

    .g-6 {
        gap:6px;
    }

    .g-12 {
        gap: 0.75rem;
    }

    .g-16 {
        gap:1rem;
    }

    .g-20 {
        gap:20px;
    }

    .g-32{
        gap: 2rem;
    }

    .mb-20 {
        margin-bottom:20px;
    }

    .mb-32 {
        margin-bottom:2rem;
    }


    .text-center {
        text-align:center !important:

    }

    input {
        background: #FFFFFF;
        padding: 10px 14px;
        width:100%;
        outline: 1px solid var(--gray-300);
        border: 1px solid transparent;
        //FOR LABEL
        margin-top:6px;
        //FOR LABEL END
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);border-radius: 8px;
        color: var(gray-900);
        -webkit-transition: .1s;


            &:focus {
                outline: 1px solid var(--primary-100);
                border: 1px solid #D6BBFB;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;
                border-radius: 8px;    
            }
        
            &::placeholder {
                color: var(gray-500);
            }
    }

    .input-error {
        border: 1px solid #FDA29B;
        outline: none;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2;

        &::after {
            content:"eho"
        }
    }

    .loader {
        width: 20px;
        height: 20px;
        border: 2px solid #FFF;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        }
    
        @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    button {
        border: 0;
        background:none;
        cursor: pointer;
    }

    .no {
        color: var(--gray-500);
        font-size: var(--font-size-text-sm);
        font-weight:var(--font-weight-semibold);
        
        &:hover {
            color:var(--gray-700);
        }
    }

    .yes {
        color: var(--primary-700);
        font-size: var(--font-size-text-sm);
        font-weight:var(--font-weight-semibold);
        
        &:hover {
            color:var(--primary-800);
        }
    }

    .progressbar {
        width:100%;
        height:8px;
        background: var(--primary-100);
        border-radius: 4px;
    }
    main {
        margin-left: 82px; 
        padding:2rem;

    }

    .hover-active:hover {
        width:312px !important;
        box-shadow: var(--shadow-xs);


        .info, input, .link-name, .profile-information, .profile button {
            display:block;
            opacity: 1;
            transform: translateX(0);
            transition: opacity 0.2s ease, transform 0.2s ease;
            }
            width:312px;
            background:white;
      
            li {
              display:block;
              justify-content:flex-start;
            }
      
            .profile {
              display:block;
              justify-content:center;
              button {
                display:block;
              }
            }
          }      
    }
    
`
export default GlobalStyle;
