import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { notices, noticeDetailText } from "../data/NoticePageText"; 
import "../styles/notice.css";

const NoticeDetail = () => {
  const { id } = useParams();
  const noticeId = Number(id);

  const { notice, prevNotice, nextNotice } = useMemo(() => {
    const currentIndex = notices.findIndex((n) => n.id === noticeId);
    
    if (currentIndex === -1) {
      return { notice: null, prevNotice: null, nextNotice: null };
    }

    return {
      notice: notices[currentIndex],
      prevNotice: currentIndex > 0 ? notices[currentIndex - 1] : null,
      nextNotice: currentIndex < notices.length - 1 ? notices[currentIndex + 1] : null,
    };
  }, [noticeId]);

  if (!notice) {
    return (
      <div className="notice-container">
        <h1>{noticeDetailText.notFound}</h1>
      </div>
    );
  }

  return (
    <div className="notice-container">
      <div className="notice-wrapper">
        <div className="detail-card">
          <h1 className="detail-title">{notice.title}</h1>
          <div className="detail-meta">
            <div>
              <span className="detail-meta-label">{noticeDetailText.writer}</span>
              <span className="detail-meta-value">{notice.writer}</span>
            </div>
            <div className="detail-meta-divider">|</div>
            <div>
              <span className="detail-meta-label">{noticeDetailText.date}</span>
              <span className="detail-meta-value">{notice.date}</span>
            </div>
          </div>
          <div className="detail-content">{notice.content}</div>
          
          <div className="detail-nav-wrapper">
            {prevNotice && (
              <div className={`detail-nav-row ${nextNotice ? "has-border" : ""}`}>
                <span className="detail-nav-label">{noticeDetailText.prevNotice}</span>
                <Link to={`/notice/${prevNotice.id}`} className="detail-nav-link">{prevNotice.title}</Link>
              </div>
            )}
            {nextNotice && (
              <div className="detail-nav-row">
                <span className="detail-nav-label">{noticeDetailText.nextNotice}</span>
                <Link to={`/notice/${nextNotice.id}`} className="detail-nav-link">{nextNotice.title}</Link>
              </div>
            )}
          </div>
          
          <div className="detail-actions">
            <Link to="/notice">
              <button className="detail-back-button">{noticeDetailText.goToList}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;