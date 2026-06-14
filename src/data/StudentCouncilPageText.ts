import councilLogo from "../assets/logo.png";
import presidentImage from "../assets/IMG_송준서_학회장.jpg";
import calendarMarch from "../assets/javamarch.jpg";
import calendarApril from "../assets/javaApril.jpg";
import calendarMay from "../assets/javamay.jpg";
import calendarJune from "../assets/javajune.jpg";

export interface CouncilItem {
  title: string;
  items: string[][];
}

export const studentCouncilPageData = {
  title: "학부 학생회",
  subtitle: "2026년도 AI융합학부 제 2대 학생회 'JAVA'",
  badgeText: "STUDENT COUNCIL",
  councilName: "JAVA",
  logo: councilLogo,
  description: "학우들이 성장, 학업, 동료들을 '잡아'갈 수 있도록 돕는 학생회입니다.",
  instagramUrl: "https://www.instagram.com/ai_conv.java",
  instagramButtonText: "공식 인스타그램 바로가기 →",
  calendarTitle: "📅 주요 학사일정",
  calendarAlt: "학사일정",

  calendarImages: [
    calendarMarch,
    calendarApril,
    calendarMay,
    calendarJune
  ],

  president: {
    id: 1,
    name: "SONG KING",
    image: presidentImage,
    position: "학회장",
    details: [
      { label: "인삿말", value: "안녕하세요 자바학회를 이끄는 왕, 송준서입니당 💜" }
    ]
  },

  councilMembers: [
    { title: "👑 회장단", items: [["회장", "송*서"], ["부학회장", "방*겸"]] },
    { title: "📝 임원단", items: [["총무", "김*하"], ["회계", "최*지"], ["서기", "이*지"]] },
    { title: "📌 과대 & 부과대", items: [["4학년", "강*진/박*실"], ["3학년", "채*욱/이*용"], ["2학년", "이*종/정*준"], ["1학년", "주*민/오*주"]] },
    { title: "💜 홍보부", items: [["부장", "신*아"], ["부원", "이*연, 박*민, 권*은, 문*영"]] }
  ] as CouncilItem[]
};