import React from 'react';
const MouseTracker = (props) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {props.render(mousePosition)}
    </div>
  );
};

const App = () => {
  return (
    <MouseTracker
      render={(position) => (
        <h1>
          Mouse Position: {position.x}, {position.y}
        </h1>
      )}
    />
  );
};

export default App;
