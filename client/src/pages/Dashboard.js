import React from 'react';
import { Navbar } from '../components/Navbar';
import { TaskList } from '../components/TaskList';
import { CalendarSection } from '../components/CalendarSection';

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <CalendarSection />
      <div>Dashboard</div>
      <TaskList />
    </div>
  );
};
