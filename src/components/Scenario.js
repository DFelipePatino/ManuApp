// src/components/Scenario.js

import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Container = styled.div`
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  margin: 20px auto;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333333;
    h2 {
    color: #1abc9c; /* Change the color of the <h2> specifically */
  }
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #f39c12;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Scenario = ({ scenario, onChoice }) => (
    <Container>
        <h2 className='tarjetastxt'>{scenario.question}</h2>
        {scenario.options.map((option) => (
            <Button key={option} onClick={() => onChoice(option)}>
                {option}
            </Button>
        ))}
    </Container>
);

export default Scenario;
