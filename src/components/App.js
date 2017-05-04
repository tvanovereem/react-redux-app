import React from 'react';
import BossList from './BossList';
import BossProfile from './BossProfile';

const App = () =>
  <div className='container'>
    <div className='row'>
      <BossList />
      <BossProfile/>
    </div>
  </div>;

export default App;
