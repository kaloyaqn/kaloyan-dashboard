import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: var(--primary-600);
    border: none;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    padding:10px 18px;
    border-radius: 8px;
    color:white;
    font-size: var(--font-size-text-md);
    font-weight:var(--font-weight-semibold);
    cursor:pointer;
    transition: .1s ease-in;

    &:hover {
        background: var(--primary-700);
    }
`

const FormButton = (props) => {
  return (
    <Button className={props.className} type={props.type}>{props.title}</Button>
  )
}

export default FormButton