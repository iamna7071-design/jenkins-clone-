import React from 'react';
import { blogData } from './BlogData';

const RecentPosts = () => {
  console.log("blogData", blogData)

  const users = [
    { name: 'Zain', age: 25 }, 
    { name: 'Zaid', age: 24 }, 
    { name: 'Ali', age: 17 }
  ];
const adults = users.filter(user => user.age >= 18);
console.log(adults)

  return (
    <section style={styles.blogSection}>
      <div style={styles.titleContainer}>
        <h2 style={styles.mainTitle}>Recent posts</h2>
      </div>

      <div style={styles.gridContainer}>
        {blogData.map((post) => (
          <div key={post.id} style={styles.blogCard}>
            
            <div style={styles.imageHolder}>
              <img src={post.image} alt={post.title} style={styles.cardImage} />
            </div>

            <div style={styles.cardBody}>
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postDesc}>{post.desc}</p>
              
              <div style={styles.metaRow}>
                {/* FIXED: Emoji ki jagah small dynamic user avatar image lag gayi hai */}
                <div style={styles.authorWrapper}>
                  <img src={post.authorImg} alt={post.author} style={styles.avatarStyle} />
                  <span style={styles.authorBadge}>{post.author}</span>
                </div>
                <span style={styles.dateLabel}>{post.date}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  blogSection: {
    backgroundColor: '#ffffff',
    padding: '3rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  titleContainer: {
    width: '100%',
    maxWidth: '1140px',
    textAlign: 'left',
    marginBottom: '2rem',
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1c1e21',
    margin: 0,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
    gap: '3rem 2rem',
    maxWidth: '1140px',
    width: '100%',
  },
  blogCard: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    overflow: 'hidden',
  },
  imageHolder: {
    backgroundColor: '#f8f9fa', 
    borderRadius: '12px',
    height: '190px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  },
  cardImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  cardBody: {
    padding: '1rem 0.2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  postTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#000000',
    lineHeight: '1.4',
    margin: '0 0 0.75rem 0',
  },
  postDesc: {
    fontSize: '0.92rem',
    color: '#586069',
    lineHeight: '1.6',
    margin: '0 0 1.2rem 0',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3, 
    WebkitBoxOrient: 'vertical',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    fontSize: '0.85rem',
    borderTop: '1px solid #f0f0f0',
    paddingTop: '0.75rem',
  },
  // FIXED: Avatar layouts styling wrappers
  authorWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  avatarStyle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%', // Bilkul round gol display karne ke liye
    objectFit: 'cover',
  },
  authorBadge: {
    fontWeight: '600',
    color: '#24292e',
  },
  dateLabel: {
    color: '#6a737d',
  }
};

export default RecentPosts;
