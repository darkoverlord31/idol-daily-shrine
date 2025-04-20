
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  title: string;
  path: string;
  icon: string;
}

const navItems: NavItem[] = [
  {
    title: 'Today',
    path: '/',
    icon: '📸',
  },
  {
    title: 'History',
    path: '/history',
    icon: '📅',
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: '❤️',
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: '⚙️',
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`flex flex-col transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    } h-screen bg-sidebar shrink-0 border-r border-idol-lightpink`}>
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} p-4 border-b border-idol-lightpink`}>
        {!collapsed && (
          <h1 className="text-xl font-bold text-idol-pink">Daily Idol</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-idol-pastel text-idol-pink"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="flex-1 pt-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center ${
                    collapsed ? 'justify-center' : 'justify-start'
                  } px-4 py-3 ${
                    isActive 
                      ? 'bg-idol-pastel text-idol-pink font-medium' 
                      : 'text-idol-gray hover:bg-idol-pastel/50 hover:text-idol-pink'
                  } transition-colors rounded-md mx-2`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {!collapsed && (
                    <span className="ml-3">{item.title}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className={`p-4 border-t border-idol-lightpink text-xs text-idol-gray ${
        collapsed ? 'text-center' : ''
      }`}>
        {!collapsed && (
          <p>Daily Idol v1.0</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
