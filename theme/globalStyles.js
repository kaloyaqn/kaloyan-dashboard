import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

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

        //success 
        --success-50: #ECFDF3;
        --success-500: #12B76A;
        --success-700: #027A48;

        //warning
        --warning-50: #FFFAEB;
        --warning-500: #F79009;
        --warning-700: #B54708;

        //error
        --error-50:#FEF3F2;
        --error-500: #F04438;
        --error-700: #B42318;



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

    h2 {
        font-size:var(--font-size-display-md);
        color: var(--gray-900);
        font-weight: var(--font-weight-medium);
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

    .w-100 {
        width: 100% !important;
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

     .g-10 {
        gap:10px;
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

     .p-16 {
        padding:1rem;
     }

     .p-left-16 {
        padding-left:1rem;
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

     .overflow-y {
        overflow:hidden;
     }

     .d-none {
        display:none;
     }
 
     input, select {
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
        
         @media (max-width: 768px) {
            padding:12px;
            margin-left:0;
          }
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
    
    .mobile-nav-open {
        box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
        border-radius: 8px;
        padding:1rem;
        padding-bottom:24px;
        padding-top:24px;
        li {
            a {
                color: var(--gray-900);
                font-weight: var(--font-weight-medium);
                
            }
        }

    }

    .pending-status {
        background:red;
    }

    .table-container {
        width:100%;

        @media (max-width: 768px) {
            overflow-x: auto;
          }
    }

    .dot {
        width:7px;
        height:7px;
        border-radius:50%;
    }

    .dot-success {
        background: var(--success-500);
    }

    .dot-warning: {
        background: var(--warning-500)
    }

    .dot-error {
        background: var(--error-500);
    }

    table {
        border: 1px solid var(--gray-200);
        box-shadow: var(--shadow-md);
        border-radius: 8px;
        border-spacing: 0px!important;
        text-align:start;

        thead {
            background: var(--gray-50);
            th {
                text-align:start;
                padding: 13px 0px 13px 24px;
                color:var(--gray-500);
                border-bottom: 1px solid var(--gray-200);
                font-size: var(--font-size-text-xs);
                font-weight: var(--font-weight-medium);

                &:first-of-type {
                    border-top-left-radius:8px;
                }

                &:last-of-type {
                    border-top-right-radius:8px;
                }
            }
        }

        tbody {
            td {
                padding: 1rem 0px 1rem 24px;
                border-bottom: 1px solid var(--gray-200);
            }
        }

        .project-title {
            color: var(--gray-900);
            font-size: var(--font-size-text-sm);
            font-weight: var(--font-weight-medium);
        }

        .status-cell {
            font-size:var(--font-size-text-xs);
            font-weight:var(--font-weight-medium);
            padding:2px 8px;
            border-radius:1rem;
        }

        .status-pending {
            background: var(--gray-100);
            color: var(--gray-700);
            padding:2px 8px;
            border-radius:1rem;
        }
        
        .status-completed{
            background:var(--success-50);
            color:var(--success-700);
            padding:2px 8px;
            border-radius:1rem;
        }

        .status-error {
            background: var(--error-50);
            color: var(--error-700);
        }

        .project-link {
            color: var(--gray-500);
            font-weight: var(--font-weight-regular);
        }

        .table-primary, .table-secondary {
            font-size: var(--font-size-text-sm);
            font-weight: var(--font-weight-regular);
        }

        .table-primary {
            color: var(--gray-900);
        }

        .table-secondary{
            color: var(--gray-500);
        }

    }

    .lost {
        font-size: var(--font-size-text-sm)
    }

    #action-svg {
        transition: stroke .1s ease-in-out;
    }

    .action-btn {
        &:hover {
            #action-svg {
                stroke:#464D5B;
            }
        }
    }

    .mobile-nav {
        display:none;
    }

    @media (max-width:768px) {

        main {
            margin-top:2rem;
        }

        .mobile-nav {
            display:block;
            display:flex;  
            box-shadow: var(--shadow-sm);
        }

        h2 {
            font-size: var(--font-size-display-xs);
        }

        .page-header {
            flex-direction:column;
            gap:1rem;
        }

        table {
            .project-desc {
                display: none;  
            }
        }
    }
    
`
export default GlobalStyle;
