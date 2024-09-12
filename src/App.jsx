import React, { useState } from 'react';
import Accordion from './Accordion';
import Title from './Title';
import { questions } from '../data';

function App() {
  const [questione, setQuestion] = useState(questions);
  const [selectedId, setSelectedId] = useState('');

  const handleToggle = (id) => {
    setSelectedId(id);
  };

  const handleClose = (id) => {
    setSelectedId(null);
  };

  return (
    <div className="container">
      <Title title={'Accordion'} />
      <Accordion
        questione={questione}
        handleToggle={handleToggle}
        selectedId={selectedId}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
