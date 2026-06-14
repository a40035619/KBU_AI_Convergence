import prof1 from "../assets/IMG_한진호_교수님.jpg";
import prof2 from "../assets/IMG_현우석_교수님.jpg";
import prof3 from "../assets/IMG_김원빈_교수님.jpg";
import prof4 from "../assets/IMG_박상민_교수님.jpg";
import prof5 from "../assets/IMG_양단아_교수님.jpg";
import prof6 from "../assets/IMG_임지영_교수님.jpg";

export interface DetailItem {
  label: string;
  value: string;
}

export interface ProfessorItem {
  id: number;
  name: string;
  image: string;
  position: string;
  position2?: string;
  details: DetailItem[];
}

export const pageInfo = {
  title: "교수진 소개",
  description: "AI융합학부를 이끄는 교수진을 소개합니다.",
};

export const professors: ProfessorItem[] = [
  {
    id: 1,
    name: "한진호",
    image: prof1,
    position: "교수",
    position2: "AI융합학부 학부장 / 인공지능 학과장 / AI휴먼서비스융합 학과장",
    details: [
      { label: "전공", value: "정보보호" },
      { label: "연구실", value: "일립관 709호" },
      { label: "전화번호", value: "02-950-4301" },
      { label: "이메일", value: "hjinob@bible.ac.kr" },
      { label: "담당과목", value: "정보보호개론" },
      { label: "최종학력", value: "고려대학교 대학원" },
    ]
  },
  {
    id: 2,
    name: "현우석",
    image: prof2,
    position: "교수",
    position2: "컴퓨터소프트웨어 학과장",
    details: [
      { label: "전공", value: "인공지능" },
      { label: "연구실", value: "복음관 519호" },
      { label: "전화번호", value: "02-950-5504" },
      { label: "이메일", value: "wshyun@kbible.ac.kr" },
      { label: "담당과목", value: "웹프로그래밍, 소프트웨어공학, 인공지능" },
      { label: "최종학력", value: "국립경상대학교 대학원" },
    ]
  },
  {
    id: 3,
    name: "김원빈",
    image: prof3,
    position: "교수",
    details: [
      { label: "전공", value: "영상처리" },
      { label: "연구실", value: "복음관 520호" },
      { label: "전화번호", value: "02-950-5494" },
      { label: "이메일", value: "wkim@bible.ac.kr" },
      { label: "담당과목", value: "자바프로그래밍, 웹시개I, 웹시개II" },
      { label: "최종학력", value: "건국대학교 대학원" },
    ]
  },
  {
    id: 4,
    name: "박상민",
    image: prof4,
    position: "교수",
    details: [
      { label: "전공", value: "임베디드 소프트웨어" },
      { label: "연구실", value: "복음관 512호" },
      { label: "전화번호", value: "02-950-5597" },
      { label: "이메일", value: "smpark@bible.ac.kr" },
      { label: "담당과목", value: "자료구조, 이미지딥러닝, 데이터마이닝과통계" },
      { label: "최종학력", value: "중앙대학교 대학원" },
    ]
  },
  {
    id: 5,
    name: "양단아",
    image: prof5,
    position: "교수",
    details: [
      { label: "전공", value: "네트워크 보안" },
      { label: "연구실", value: "복음관 502호" },
      { label: "전화번호", value: "02-950-5487" },
      { label: "이메일", value: "dana1112@bible.ac.kr" },
      { label: "담당과목", value: "프로그래밍기초, 머신러닝프로그래밍, 빅데이터기술" },
      { label: "최종학력", value: "이화여자대학교 대학원" },
    ]
  },
  {
    id: 6,
    name: "임지영",
    image: prof6,
    position: "교수",
    details: [
      { label: "전공", value: "네트워크" },
      { label: "연구실", value: "복음관 508B호" },
      { label: "전화번호", value: "02-950-5444" },
      { label: "이메일", value: "jylim@bible.ac.kr" },
      { label: "담당과목", value: "네트워크데이터통신, 네트워크프로그래밍, 운영체제" },
      { label: "최종학력", value: "이화여자대학교 대학원" },
    ]
  },
];