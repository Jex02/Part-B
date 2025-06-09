import React from 'react';
import WelcomeCard from './Components/WelcomeCard';
import Counter from './Components/Counter';
import StudentInfo from './Components/StudentInfo';

function App() {
  return (
    <div className="App" style={styles.container}>
      <WelcomeCard name="Jerick" />
      <Counter />
      <StudentInfo />
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
  }
};

export default App;
