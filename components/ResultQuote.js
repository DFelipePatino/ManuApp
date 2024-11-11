// src/components/ResultQuote.js

import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 20px auto;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: #333333;
    p {
    color: #1abc9c; /* Change the color of the <h2> specifically */
  }
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #f39c12;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const ResultQuote = ({ quote, onNext }) => (
    <QuoteContainer>
        <p>{quote}</p>
        <NextButton onClick={onNext}>Siguiente cojones!</NextButton>
    </QuoteContainer>
);

export default ResultQuote;
