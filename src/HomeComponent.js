import React from 'react';
import { Link } from 'react-router-dom';

function HomeComponent() {
  return (
    <div>
      <h1>Student Report Card System</h1>
      <ul>
        <li><Link to="/report-card">Report Card</Link></li>
        <li><Link to="/awarded-students">Awarded Students</Link></li>
      </ul>
    </div>
  );
}

export default HomeComponent;