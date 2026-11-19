import React, { useState } from 'react';
import './App.css';

function App() {
  // OPEN AND CLOSE BUTTON STATE
  const [isopen, setIsopen] = useState(true);

  return (
    <div className="App">
      <h1>Open and close session</h1>

      <div>
        <b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat
      </div>

      <section>
        {
          isopen &&
          (
            <div className="readmore">
              <p>
                The <b>cat</b> (<i>Felis catus</i>), also called <b>domestic cat</b> and <b>house cat</b>,
                is a small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.
              </p>
            </div>
          )
        }

        <button onClick={function () { setIsopen(!isopen); }}>
          {isopen ? 'Close' : 'Open'}
        </button>
      </section>
    </div>
  );
}

export default App;
