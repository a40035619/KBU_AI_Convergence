import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { MenuCard } from "../components/MenuButtonCard";
import { introSection, noticeSection } from "../data/MainPageText";
import { notices } from "../data/NoticePageText";
import "../styles/MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  const latestNotices = useMemo(() => {
    return [...notices]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }, []);

  return (
    <div className="main-container">
      <Hero />
      <MenuCard />

      <section className="bottom-section">
        <div className="intro-box">
          <div className="intro-content">
            <h2 className="intro-title">{introSection.title}</h2>
            <p className="intro-desc">{introSection.description}</p>
          </div>
          <img src={introSection.imageUrl} alt="AI" className="intro-img" />
        </div>

        <div className="notice-box">
          <div className="notice-header">
            <h2 className="notice-header-title">{noticeSection.title}</h2>
            <button 
              className="notice-more-btn" 
              onClick={() => navigate(noticeSection.path)}
            >
              {noticeSection.moreButtonText}
            </button>
          </div>

          {latestNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => navigate(`/notice/${notice.id}`)}
              className="notice-item clickable-notice"
            >
              <span className="notice-text">{notice.title}</span>
              <span className="notice-date">{notice.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;