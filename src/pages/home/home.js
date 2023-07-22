import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Button from "../../components/button/button";

import "./home.css";
function Home() {
  const [character, setCharacter] = useState([]);

  //usando services
  //https://blog.vinniciusgomes.dev/arquitetando-uma-aplica%C3%A7%C3%A3o-react-de-uma-forma-organizada-e-escal%C3%A1vel-4e4491e9bf39
  async function fetchDataCharacters() {
    const response = await fetch("https://hp-api.onrender.com/api/characters", {
      method: "GET",
    });
    const data = await response.json();
    const dataResult = data;
    console.log(dataResult);
    setCharacter(dataResult);
  }

  useEffect(() => {
    fetchDataCharacters();
  }, []);

  return (
    <div className="App">
      {character.map((character) => (
        <div key={character.id}>
          <Card props={character}></Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
