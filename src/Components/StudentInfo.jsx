import React, { useState } from 'react';

function StudentInfo() {
  const [name, setName] = useState('');

  return (
    <div style={styles.form}>
      <h2>Student Info</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <p>Hello, {name || 'Student'}!</p>
    </div>
  );
}

const styles = {
  form: {
    padding: '20px',
    backgroundColor: '#fff3e0',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '10px auto',
    maxWidth: '300px',
  },
  input: {
    padding: '8px',
    width: '80%',
    marginTop: '10px',
  }
};

export default StudentInfo;
