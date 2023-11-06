import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Julia Piascik")
            .pauseFor(1000)
            .deleteAll()
            .typeString("coming soon")
            .start();
        }}
      />
    </div>
  );
}

export default App;
