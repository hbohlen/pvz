import React from 'react';
import MainScene from './scenes/MainScene';

// App component sets up the main layout and includes the MainScene
const App: React.FC = () => {
  return (
    // The main container div that takes up the full height of the viewport
    <div style={{ height: '100vh' }}>
      {/* MainScene component renders the 3D scene */}
      <MainScene />
    </div>
  );
};

export default App;
