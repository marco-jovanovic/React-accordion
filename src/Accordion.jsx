import React from 'react';
import SingleAccordion from './SingleAccordion';

function Accordion({ questione, handleToggle, selectedId, handleClose }) {
  return (
    <div>
      {questione.map((item, index) => {
        const { id, info, title } = item;

        return (
          <SingleAccordion
            key={id}
            id={id}
            index={index}
            info={info}
            title={title}
            handleToggle={handleToggle}
            selectedId={selectedId}
            handleClose={handleClose}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
