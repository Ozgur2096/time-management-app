import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

export const CalendarSection = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = date => {
    setValue(date);
    console.log(date);
  };

  return (
    <div>
      <Calendar onChange={handleChange} value={value} />
    </div>
  );
};
