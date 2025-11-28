import React, { useState } from 'react';
import WebsiteCard from './components/WebsiteCard';
import Navbar from './components/Navbar';
import type { Website } from './types';
import PlaceholderPage from './components/pages/PlaceholderPage';
import Footer from './components/Footer';

// 분리된 CSS 파일을 임포트합니다.
import './styles.css';


// Mock data for the websites
const myWebsites: Website[] = [
  {
    id: 1,
    title: 'Movie Card Demo',
    description: '영화 카드 UI를 확인할 수 있는 페이지입니다.',
    imageUrl: 'https://picsum.photos/seed/movie/600/400',
    url: '/moviecard',  
    tags: ['UI', 'Movie', 'Design'],
  }/* ,
  {
    id: 2,
    title: 'E-commerce 스토어',
    description: '최신 트렌드를 반영한 의류를 판매하는 온라인 쇼핑몰입니다. 결제 시스템과 사용자 인증 기능이 포함되어 있습니다.',
    imageUrl: 'https://picsum.photos/seed/ecom/600/400',
    url: '#',
    tags: ['Next.js', 'E-commerce', 'Stripe'],
  },
  {
    id: 3,
    title: '포트폴리오 사이트',
    description: '제가 진행했던 프로젝트들을 모아놓은 전문적인 포트폴리오입니다. 인터랙티브한 UI/UX에 중점을 두었습니다.',
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    url: '#',
    tags: ['Framer Motion', 'UI/UX', 'Portfolio'],
  },
  {
    id: 4,
    title: '날씨 앱',
    description: '실시간 위치 기반 날씨 정보를 제공하는 웹 애플리케이션입니다. OpenWeatherMap API를 사용했습니다.',
    imageUrl: 'https://picsum.photos/seed/weather/600/400',
    url: '#',
    tags: ['API', 'Geolocation', 'Utility'],
  },
  {
    id: 5,
    title: '음악 스트리밍 서비스',
    description: '사용자가 좋아하는 음악을 검색하고 플레이리스트를 만들 수 있는 서비스의 프로토타입입니다.',
    imageUrl: 'https://picsum.photos/seed/music/600/400',
    url: '#',
    tags: ['Vue.js', 'Audio API', 'Streaming'],
  },
  {
    id: 6,
    title: '실시간 채팅 애플리케이션',
    description: 'WebSocket 기술을 활용하여 사용자들이 실시간으로 대화할 수 있는 채팅 애플리케이션입니다.',
    imageUrl: 'https://picsum.photos/seed/chat/600/400',
    url: '#',
    tags: ['WebSocket', 'Node.js', 'Real-time'],
  }, */
];

// 스타일이 분리된 포트폴리오 컴포넌트
const PortfolioContent: React.FC = () => (
  <>
    <header className="portfolio-header">
      <h1 className="portfolio-title">
        나만의 웹사이트 포트폴리오
      </h1>
      <p className="portfolio-subtitle">
        안녕하세요! 제가 열정을 담아 만든 웹사이트들을 소개합니다.
      </p>
    </header>

    <main>
      <div className="portfolio-grid">
        {myWebsites.map((website) => (
          <WebsiteCard key={website.id} website={website} />
        ))}
      </div>
    </main>
  </>
);

// 메인 HomePage 컴포넌트
const HomePage: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const pageContentMap: { [key: string]: { icon: string; text: string } } = {
    drawing: { icon: '🎨', text: '그림 페이지입니다.' },
    writing: { icon: '✍️', text: '글 페이지입니다.' },
    music: { icon: '🎵', text: '노래 기록 페이지입니다.' },
    photo: { icon: '📷', text: '사진 페이지입니다.' },
    recommend: { icon: '⭐', text: '추천 페이지입니다.' },
  };

  const renderContent = () => {
    if (activePage === 'home') {
      return <PortfolioContent />;
    }
    const pageData = pageContentMap[activePage];
    if (pageData) {
      return <PlaceholderPage icon={pageData.icon} text={pageData.text} />;
    }
    return <PortfolioContent />; // Fallback to home
  };


  return (
    <div className="app-container">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <div className="main-content">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;