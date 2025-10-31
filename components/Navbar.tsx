import React from 'react';

// Using a slightly more abstract/artistic logo icon
const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z" fill="currentColor"/>
    <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export interface NavLink {
  key: string;
  label: string;
}

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const navLinks: NavLink[] = [
    { key: 'drawing', label: '그림' },
    { key: 'writing', label: '글' },
    { key: 'music', label: '노래 기록' },
    { key: 'photo', label: '사진' },
    { key: 'recommend', label: '추천' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-slate-800 text-xl font-bold transition-opacity hover:opacity-80">
            <LogoIcon className="w-6 h-6 text-indigo-600" />
            <span>MyPortfolio</span>
          </button>
          <ul className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => onNavigate(link.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                    activePage === link.key
                      ? 'text-indigo-600 font-semibold'
                      : 'text-slate-700 hover:text-indigo-600'
                  }`}
                >
                  {link.label}
                  {activePage === link.key && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;