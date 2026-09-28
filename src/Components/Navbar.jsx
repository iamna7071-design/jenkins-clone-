import React, { useState } from 'react';
import { navLinks } from './Navlinks.jsx';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav style={styles.navbarContainer}>
      <div style={styles.navbar}>
        {/* Left Side: Logo */}
        <div style={styles.logo}>Jenkins</div>
        <div style={styles.rightSection}>
          
          {/* Jenkins White Pill Search Bar */}
          <div style={styles.searchContainer}>
            <Search size={16} style={styles.searchIcon} />
            <input type="text" placeholder="Search" style={styles.searchInput} />
            
            <div style={styles.shortcutWrapper}>
              <kbd style={styles.kbdKey}>Ctrl</kbd>
              <kbd style={styles.kbdKey}>K</kbd>
            </div>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button onClick={toggleMenu} style={styles.menuToggleBtn}>
            {isOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} color="#ffffff" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul style={styles.navItemsDropdown}>
          {navLinks.map((item) => (
            <li key={item.id} style={styles.dropdownListItem}>
              <a href={item.path} style={styles.dropdownNavLink} onClick={() => setIsOpen(false)}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

// Custom Layout Styles
const styles = {
  navbarContainer: {
    backgroundColor: '#1c1e21',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    width: '100%',
    position: 'relative',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.6rem 1.5rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '5px 12px',
    borderRadius: '30px',
    width: '180px',
    height: '32px',
    boxSizing: 'border-box',
  },
  searchIcon: {
    color: '#1c1e21',
    marginRight: '6px',
    flexShrink: 0,
  },
  searchInput: {
    background: 'none',
    border: 'none',
    color: '#1c1e21',
    outline: 'none',
    fontSize: '0.85rem',
    width: '100%',
    padding: 0,
  },
  shortcutWrapper: {
    display: 'flex',
    gap: '3px',
    marginLeft: 'auto',
    alignItems: 'center',
  },
  kbdKey: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    color: '#666',
    fontSize: '0.65rem',
    fontWeight: 'bold',
    padding: '2px 5px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
  },
  menuToggleBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
  },
  navItemsDropdown: {
    listStyle: 'none',
    backgroundColor: '#1c1e21',
    margin: 0,
    padding: '1.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    width: '100%',
    borderTop: '1px solid #2e3035',
  },
  dropdownListItem: {
    width: '100%',
    textAlign: 'center',
  },
  dropdownNavLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.05rem',
    padding: '6px 0',
  }
};

export default Navbar;
