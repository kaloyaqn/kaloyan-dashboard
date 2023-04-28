import React from 'react'
import styled from 'styled-components'

const LabelStyle = styled.label`
  font-size: var(--font-size-text-sm);  
  font-weight: var(--font-weight-medium);
  color:var(--gray-700);
  `

const Label = (props) => {
  return (  
    <LabelStyle htmlFor={props.for}>{props.name}</LabelStyle>
  )
}

export default Label