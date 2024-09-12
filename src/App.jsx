import React, { useState } from 'react';
import Accordion from './Accordion';
import { questions } from '../data';

function App() {
  const [questione, setQuestion] = useState(questions);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="container">
      <Accordion
        questione={questione}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
    </div>
  );
}

export default App;
