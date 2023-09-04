import React from 'react';
import { Navbar } from '../components/Navbar';
import { TaskList } from '../components/TaskList';

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>Dashboard</div>
      <TaskList />
    </div>
  );
};
