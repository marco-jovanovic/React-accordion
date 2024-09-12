import React from 'react';
import { FaCross } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
function SingleAccordion({
  id,
  title,
  info,
  selectedId,
  handleToggle,
  handleClose,
}) {
  return (
    <div
      className={
        selectedId === id
          ? 'accordion-section toggle-height'
          : 'accordion-section'
      }

      /* style={{ height: showInfo ? '10rem' : '5rem' }} */
    >
      <h4 className="mb-1">{title}</h4>
      <p className="info">{info}</p>
      <FaCross
        /* onClick={() => setShowInfo(!showInfo)} */
        onClick={() => handleToggle(id)}
        size={35}
        className={selectedId === id ? 'toggle-icon hide' : 'toggle-icon'}
      />
      <FaMinus // toggle everything
        onClick={() => handleClose(id)}
        size={35}
        className={selectedId === id ? 'toggle-icon' : 'toggle-icon hide'}
      />
    </div>
  );
}

export default SingleAccordion;
