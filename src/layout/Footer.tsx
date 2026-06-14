import "./Footer.css";

const FOOTER_LINKS = [
  { name: "공식 인스타그램 바로가기", url: "https://www.instagram.com/ai_conv.java" },
  { name: "대학교 홈페이지 바로가기", url: "https://www.bible.ac.kr/" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">한국성서대학교</h2>
        
        <address className="footer-info">
          <p>01757 서울특별시 노원구 동일로214길 32(상계동205)</p>
          <p>TEL. 02-950-5401 | FAX. 070-4275-0167</p>
          <p className="footer-copy">© AI Convergence. All rights reserved.</p>
        </address>
      </div>

      <div className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <a 
            key={link.name} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.name} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;