import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

//https://breaking-bad-quotes.herokuapp.com/v1/quotes

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // State of quotes
  const [quote, getQuote] = useState({});

  // con Fetch
  // const ConsultApi = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const quote = api.then((response) => response.json());
  //   quote.then((result) => console.log(result));
  //   //

  const ConsultApi = async () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const quote = await (await api).json();
    getQuote(quote[0]);
  };

  // Load Quote
  useEffect(() => {
    ConsultApi();
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={ConsultApi}>Obtener Frase</Button>
    </Container>
  );
}

export default App;
