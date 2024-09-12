import React from 'react';
import SingleAccordion from './SingleAccordion';

function Accordion({ questione, showInfo, setShowInfo }) {
  return (
    <div>
      {questione.map((item) => {
        const { id, info, title } = item;

        return (
          <SingleAccordion
            key={id}
            id={id}
            info={info}
            title={title}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
