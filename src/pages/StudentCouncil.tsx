import { useState } from "react";
import { studentCouncilPageData } from "../data/StudentCouncilPageText";
import MemberListCard from "../components/MemberListCard";
import { ProfileCard } from "../components/ProfileCard";
import "../styles/StudentCouncil.css";

const StudentCouncil = () => {
  const { 
    title, subtitle, logo, councilName, badgeText, description, 
    instagramUrl, instagramButtonText, calendarTitle, calendarAlt, 
    calendarImages: images, president 
  } = studentCouncilPageData;

  const [currentIdx, setCurrentIdx] = useState(() => {
    const currentMonth = new Date().getMonth() + 1;
    return (currentMonth >= 3 && currentMonth <= 6) ? currentMonth - 3 : 0;
  });

  const handlePrev = () => setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="council-container">
      <div className="council-wrapper">
        <div className="header-container">
          <div className="title-flex-box">
            <h1 className="title-h1">{title}</h1>
            <div className="title-bar" />
          </div>
          <p className="subtitle-p">{subtitle}</p>
        </div>

        <div className="council-card">
          <div className="logo-container">
            <img src={logo} alt={councilName} className="logo-img" />
          </div>
          <div>
            <span className="badge-span">{badgeText}</span>
            <h2 className="council-name-h2">{councilName}</h2>
            <p className="council-desc-p">{description}</p>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="insta-link">
              <button className="insta-btn">{instagramButtonText}</button>
            </a>
          </div>
        </div>

        <ProfileCard data={[president]} />
        <MemberListCard />

        {images?.length > 0 && (
          <div className="calendar-box">
            <h3 className="calendar-title-h3">{calendarTitle}</h3>
            <div className="calendar-control-box">
              <button className="nav-btn" onClick={handlePrev}>◀</button>
              <div className="calendar-img-wrapper">
                <img src={images[currentIdx]} alt={calendarAlt} className="calendar-img-tag" />
              </div>
              <button className="nav-btn" onClick={handleNext}>▶</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCouncil;