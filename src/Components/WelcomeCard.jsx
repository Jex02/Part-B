import React from 'react';

function WelcomeCard({ name }) {
  return (
    <div style={styles.card}>
      <h2>Welcome, {name}!</h2>
      <p>We're glad to have you here.</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '10px auto',
    maxWidth: '300px',
  }
};

export default WelcomeCard;
