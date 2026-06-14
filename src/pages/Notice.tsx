import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { notices, noticeMainText } from "../data/NoticePageText"; 
import "../styles/notice.css";

const Notice = () => {
  const [searchType, setSearchType] = useState("title");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
    setCurrentPage(1); 
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1); 
  };

  const sortedNotices = useMemo(() => {
    const query = search.toLowerCase().trim();

    const filtered = notices.filter((n) => {
      const targetField = searchType === "title" ? n.title : n.writer;
      return targetField.toLowerCase().includes(query);
    });

    return filtered.sort((a, b) => {
      if (a.notice !== b.notice) return a.notice ? -1 : 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [search, searchType]);

  const totalPages = Math.ceil(sortedNotices.length / itemsPerPage);
  const currentNotices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedNotices.slice(start, start + itemsPerPage);
  }, [sortedNotices, currentPage]);

  return (
    <div className="notice-container">
      <div className="notice-wrapper">
        <div className="notice-title-header">
          <div className="notice-title-wrapper">
            <h1 className="notice-title">{noticeMainText.pageTitle}</h1>
            <div className="notice-title-bar"></div>
          </div>
        </div>

        <div className="notice-card">
          <div className="notice-toolbar">
            <div className="notice-count">
              {noticeMainText.total} {notices.length}{noticeMainText.unit} | {noticeMainText.searchResult} {sortedNotices.length}{noticeMainText.unit}
            </div>
            <div className="notice-search-box">
              {/* 최적화된 핸들러 매핑 */}
              <select value={searchType} onChange={handleSearchTypeChange}>
                <option value="title">{noticeMainText.filterTitle}</option>
                <option value="writer">{noticeMainText.filterWriter}</option>
              </select>
              <input value={search} onChange={handleSearchChange} placeholder={noticeMainText.placeholder} />
            </div>
          </div>

          <table className="notice-table">
            <thead>
              <tr className="notice-th-bg">
                <th style={{ width: "10%" }}>{noticeMainText.thIndex}</th>
                <th style={{ width: "55%" }} className="notice-cell-title">{noticeMainText.thTitle}</th>
                <th style={{ width: "18%" }}>{noticeMainText.thWriter}</th>
                <th style={{ width: "17%" }}>{noticeMainText.thDate}</th>
              </tr>
            </thead>
            <tbody>
              {currentNotices.map((notice, index) => (
                <tr key={notice.id} className="notice-tr">
                  <td className={`notice-cell-index ${notice.notice ? "is-notice" : ""}`}>
                    {notice.notice ? noticeMainText.badgeNotice : sortedNotices.length - ((currentPage - 1) * itemsPerPage + index)}
                  </td>
                  <td className="notice-cell-title">
                    <Link to={`/Notice/${notice.id}`} className="notice-link">
                      {notice.notice && <span className="notice-badge">{noticeMainText.badgeNotice}</span>}
                      {notice.title}
                    </Link>
                  </td>
                  <td className="notice-cell-writer">{notice.writer}</td>
                  <td className="notice-cell-date">{notice.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-container">
            <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="pagination-button">{"<<"}</button>
            <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="pagination-button">{"<"}</button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)} className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}>{i + 1}</button>
            ))}
            <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="pagination-button">{">"}</button>
            <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="pagination-button">{">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;