import { useState } from 'react';
import '../Styles/PrototypeNotice.css';

const PrototypeNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="prototype-modal" role="dialog" aria-modal="true" aria-labelledby="prototype-notice-title">
      <div className="prototype-modal-card">
        <button
          type="button"
          className="prototype-modal-close"
          onClick={() => setIsVisible(false)}
          aria-label="Close prototype demo notice"
        >
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="prototype-modal-icon" aria-hidden="true">
          <i className="fa-solid fa-circle-info" />
        </div>
        <span className="prototype-modal-badge">PROTOTYPE &bull; DEMO MODE</span>
        <h2 id="prototype-notice-title">Prototype Demo Notice</h2>
        <p>Netra Kavach is currently available as a prototype for demonstration purposes. Login authentication is simulated, so you can enter any username/email and any password to access the dashboard.</p>
        <p>The dashboard currently displays sample/demo data and does not represent live border surveillance.</p>
        <button type="button" className="prototype-modal-continue" onClick={() => setIsVisible(false)}>
          Continue to Demo
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default PrototypeNotice;
