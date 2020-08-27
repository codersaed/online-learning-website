import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header/Header'
import Course from '../src/components/Course/Course';

function App() {
  return (
    <div>
      <Header></Header>
      <Course></Course>
    </div>
  );
}
export default App;
