import React from 'react';

export default function Button({ view, setCurrentView }) {
  return <button onClick={() => setCurrentView(view)}>{view}</button>;
}
