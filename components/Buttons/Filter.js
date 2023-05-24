import React from 'react';
import styled from 'styled-components';

const Button = styled.button`

`

const Filter = (props) => {
  return (
    <Button>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        {props.title}
    </Button>
  )
}

export default Filter