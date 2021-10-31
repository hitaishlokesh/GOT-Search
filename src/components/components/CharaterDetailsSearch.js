import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import RenderCharacter from "./RenderCharacter";
import styled from "styled-components"

const ButtonStyle= styled(Button)`
  margin-top: 4%; 
`;

const CharaterDetailsSearch = () => {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState("");
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((res) => res.json())
      .then(setCharacters) 
      .then(() => setError(null)) 
      .catch((error) => {
        console.log("Error", error);
        setError(error);
        setCharacters(undefined); 
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control size="lg" type="text" placeholder="Enter name to search" onChange={(e) => setName(e.target.value)} value={name} />
        <ButtonStyle variant="primary" type="submit">
          Submit
        </ButtonStyle>
      </Form>
      {characters !== undefined &&
        (characters.length === 0 ? (
          null
        ) : (
          <>
            {characters.map((character) => (
              <RenderCharacter key={character.name} {...character} />
            ))}
          </>
        ))}
      {error !== null && <div>Error: {error.message}</div>}
    </>
  );
}

export default CharaterDetailsSearch;