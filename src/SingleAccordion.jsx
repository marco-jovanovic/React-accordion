import React from 'react';
import { FaCross } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
function SingleAccordion({ id, title, info, showInfo, setShowInfo }) {
  return (
    <div
      className={
        showInfo ? 'accordion-section toggle-height' : 'accordion-section'
      }
      /* style={{ height: showInfo ? '10rem' : '5rem' }} */
    >
      <h4 className="mb-1">{title}</h4>
      <p className="info">{info}</p>
      <FaCross
        onClick={() => setShowInfo(!showInfo)}
        size={35}
        className={showInfo ? 'toggle-icon hide' : 'toggle-icon'}
      />
      <FaMinus
        onClick={() => setShowInfo(!showInfo)}
        size={35}
        className={!showInfo ? 'toggle-icon hide' : 'toggle-icon'}
      />
    </div>
  );
}

export default SingleAccordion;
