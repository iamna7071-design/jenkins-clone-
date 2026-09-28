import React from 'react';
import { footerData } from './FooterData';

const Footer = () => {
  return (
    <footer style={styles.footerWrapper}>
      
      {/* —— Top Columns Grid Container —— */}
      <div style={styles.columnsContainer}>
        
        {/* Left Info Column Block */}
        <div style={styles.leftInfoBlock}>
         
          <div style={styles.metaActionLink}>
            <a href="#improve" style={styles.whiteLinkText}>Improve this page</a>
          </div>
          <div style={styles.metaActionLink}>
            <a href="#issue" style={styles.whiteLinkText}>Report page issue</a>
          </div>
          <div style={styles.licenseImageWrapper}>
            <img 
              src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg" 
              alt="Creative Commons License" 
              style={styles.licenseImgStyle} 
              onError={(e) => {
                // Agar URL khali ho to border box toota hua na dikhe
                e.target.style.display = 'none';
              }}
            />
          </div>

          <p style={styles.licenseDescription}>
            The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.
          </p>
        </div>

        {/* Right Dynamic Mapping Link Columns Blocks */}
        {footerData.map((column) => (
          <div key={column.id} style={styles.linksColumnBlock}>
            <h4 style={styles.columnHeaderTitle}>{column.heading}</h4>
            <div style={styles.titleDividerLine}></div>
            <ul style={styles.linksUlList}>
              {column.links.map((linkName, idx) => (
                <li key={idx} style={styles.linkListItem}>
                  <a href={`#${linkName.toLowerCase()}`} style={styles.footerItemLink}>
                    {linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* —— Bottom Copyright and Trademark Notice Section —— */}
      <div style={styles.copyrightContainerBox}>
        <p style={styles.copyrightMainText}>
          Copyright © 2026 CD Foundation The Linux Foundation®. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="#trademark" style={styles.inlineFooterLink}>Trademark Usage page</a>. Linux is a registered trademark of Linus Torvalds. <a href="#privacy" style={styles.inlineFooterLink}>Privacy Policy</a> and <a href="#terms" style={styles.inlineFooterLink}>Terms of Use</a>.
        </p>
      </div>

    </footer>
  );
};

// —— Pure Jenkins Corporate Blue CSS Inline Style Schema ——
const styles = {
  footerWrapper: {
    backgroundColor: '#1976d2', 
    color: '#ffffff',
    padding: '4rem 2rem 2rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  columnsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
    gap: '2.5rem 1.5rem',
    marginBottom: '4rem',
  },
  leftInfoBlock: {
    flex: '1.2',
    minWidth: '260px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    gap: '0.75rem',
  },
  metaActionLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.98rem',
    fontWeight: '500',
  },
  whiteLinkText: {
    color: '#ffffff',
    textDecoration: 'none',
  },
  // FIXED: Image container wrapper styling logic
  licenseImageWrapper: {
    marginTop: '0.5rem',
    minHeight: '35px',
    display: 'flex',
    alignItems: 'center',
  },
  licenseImgStyle: {
    maxHeight: '35px',
    width: 'auto',
    display: 'block',
  },
  licenseDescription: {
    fontSize: '0.86rem',
    lineHeight: '1.5',
    color: '#e3f2fd',
    margin: '0.5rem 0 0 0',
    maxWidth: '280px',
  },
  linksColumnBlock: {
    flex: '1',
    minWidth: '150px',
    textAlign: 'left',
  },
  columnHeaderTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    margin: '0 0 0.5rem 0',
    color: '#ffffff',
  },
  titleDividerLine: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '100%',
    marginBottom: '1rem',
  },
  linksUlList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  linkListItem: {
    margin: 0,
  },
  footerItemLink: {
    color: '#e3f2fd', 
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  copyrightContainerBox: {
    width: '100%',
    maxWidth: '1200px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '2rem',
    textAlign: 'left',
  },
  copyrightMainText: {
    fontSize: '0.85rem',
    lineHeight: '1.7',
    color: '#e3f2fd',
    margin: 0,
  },
  inlineFooterLink: {
    color: '#ffffff',
    textDecoration: 'underline',
  }
};

export default Footer;
