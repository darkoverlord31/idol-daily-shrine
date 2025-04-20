
import { useState, useEffect } from 'react';

const Header = () => {
  const [greeting, setGreeting] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let newGreeting = '';
      
      if (hour < 12) {
        newGreeting = 'Good morning';
      } else if (hour < 18) {
        newGreeting = 'Good afternoon';
      } else {
        newGreeting = 'Good evening';
      }
      
      setGreeting(newGreeting);
    };

    const updateDate = () => {
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      setDate(new Date().toLocaleDateString('en-US', options));
    };

    updateGreeting();
    updateDate();

    // Update every minute to handle day changes
    const timer = setInterval(() => {
      updateGreeting();
      updateDate();
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="mb-8 border-b border-idol-lightpink pb-6">
      <h1 className="text-4xl font-bold text-idol-pink mb-1">Daily Idol</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <p className="text-idol-gray text-lg">{greeting}, stan!</p>
        <p className="text-idol-gray text-sm">{date}</p>
      </div>
    </header>
  );
};

export default Header;
