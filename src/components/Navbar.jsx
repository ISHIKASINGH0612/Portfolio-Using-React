


import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const handleInstagramClick = () => {
    alert('Follow @ishi_arth on Instagram!');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.spacer}></div> {/* This will take up the remaining space and push the icons to the right */}
      <div style={styles.iconContainer}>
        <a href="https://www.linkedin.com/in/ishika-singh-236552226/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaLinkedin style={styles.icon} />
        </a>
        <a href="https://github.com/ISHIKASINGH0612" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaGithub style={styles.icon} />
        </a>
        <a href="https://x.com/Ishi_arth" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <FaTwitter style={styles.icon} />
        </a>
        <button onClick={handleInstagramClick} style={styles.iconLink}>
          <FaInstagram style={styles.icon} />
        </button>
      </div>
    </nav>
  );
};


const styles = {
  navbar: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 0',
  },
  spacer: {
    flexGrow: 1, 
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    fontSize: '24px', 
    marginRight: '8px',
  },
  iconLink: {
    color: 'inherit', 
    textDecoration: 'none', 
  },
  icon: {
    cursor: 'pointer', 
  },
};

export default Navbar;

