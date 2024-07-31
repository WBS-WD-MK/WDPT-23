import React from 'react';
import Feed from './Feed';
import Dashboard from './Dashboard';
const Main = () => {
  return (
    <div>
      <Feed />
      <Dashboard />
    </div>
  );
};
export default Main;
export { Feed, Dashboard };
