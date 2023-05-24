import React from 'react'
import styled from "styled-components"

const Button = styled.button`
    background: var(--primary-600);
    color:white;
    border-radius:8px;
    padding:10px 1rem;
    gap:8px;
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-medium);
    cursor:pointer;
    transition: .1s ease-in;

    &:hover {
        background: var(--primary-700);
    }
`

const AddButton = (props) => {
  return (
    <a href={props.href}>
      <Button className='flex justify-center align-center'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0003 4.16666V15.8333M4.16699 9.99999H15.8337" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {props.title}
      </Button>
    </a>
  )
}

export default AddButton