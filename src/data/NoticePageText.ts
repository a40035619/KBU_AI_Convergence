export interface NoticeItem {
  id: number;
  notice?: boolean; 
  title: string;
  writer: string;
  date: string;
  content: string;
}

export const notices: NoticeItem[] = [
  {
    id: 1,
    title: "동아리 모집 공고",
    writer: "학생회",
    date: "2026-05-10",
    content: "2026학년도 동아리 신규 부원을 모집합니다. 많은 지원 바랍니다.",
  },
  {
    id: 2,
    title: "실습실 이용 수칙 변경",
    writer: "학과사무실",
    date: "2026-05-12",
    content: "실습실 내 전자기기 사용 및 음식물 반입 수칙이 변경되었으니 확인 바랍니다.",
  },
  {
    id: 3,
    title: "학부 세미나 개최 안내",
    writer: "관리자",
    date: "2026-05-15",
    content: "이번 주 금요일 학부 세미나가 개최됩니다. 컴퓨터학부 학생들은 필히 참석해 주세요.",
  },
  {
    id: 4,
    title: "AI 경진대회 참가자 모집",
    writer: "학생회",
    date: "2026-05-16",
    content: "교내 AI 경진대회가 열립니다. 프로그래밍 역량을 발휘할 학생들의 많은 참여 바랍니다.",
  },
  {
    id: 5,
    title: "캡스톤 디자인 발표회",
    writer: "학과사무실",
    date: "2026-05-18",
    content: "졸업 예정자들을 위한 캡스톤 디자인 발표회 일정을 안내해 드립니다.",
  },
  {
    id: 6,
    title: "여름 계절학기 신청 안내",
    writer: "관리자",
    date: "2026-05-20",
    content: "여름 계절학기 수강 신청 기간 및 개설 과목을 공지합니다.",
  },
  {
    id: 7,
    title: "졸업요건 변경 안내",
    writer: "학과사무실",
    date: "2026-05-22",
    content: "2026학년도부터 컴퓨터공학부 졸업요건이 일부 변경되니 반드시 확인하시기 바랍니다.",
  },
  {
    id: 8,
    title: "장학금 신청 안내",
    writer: "관리자",
    date: "2026-05-25",
    content: "장학금 신청 기간은 6월 1일부터 6월 15일까지입니다. 기한을 엄수해 주세요.",
  },
  {
    id: 9,
    notice: true,
    title: "AI융합학부 MT 일정 공지",
    writer: "학생회",
    date: "2026-05-27",
    content: "MT는 6월 20일부터 21일까지 진행되며 자세한 사항은 추후 공지합니다.",
  },
  {
    id: 10,
    notice: true,
    title: "2026학년도 1학기 수강신청 안내",
    writer: "관리자",
    date: "2026-05-29",
    content: "2026학년도 1학기 수강신청은 6월 10일부터 6월 14일까지 진행됩니다.",
  },
  {
    id: 11,
    title: "2026학년도 하계 방학 인턴십 모집",
    writer: "학과사무실",
    date: "2026-06-04",
    content: "하계 방학 중 기업 인턴십에 참여할 학생을 모집합니다. 관심 있는 학생은 기간 내 신청 바랍니다.",
  },
];

export const noticeDetailText = {
  notFound: "공지사항을 찾을 수 없습니다.",
  writer: "작성자",
  date: "작성일",
  prevNotice: "▲ 이전글",
  nextNotice: "▼ 다음글",
  goToList: "목록으로",
};

export const noticeMainText = {
  pageTitle: "공지사항",
  total: "전체",
  searchResult: "검색 결과",
  unit: "개",
  filterTitle: "제목",
  filterWriter: "작성자",
  placeholder: "검색어",
  thIndex: "번호",
  thTitle: "제목",
  thWriter: "작성자",
  thDate: "작성일",
  badgeNotice: "공지",
};
