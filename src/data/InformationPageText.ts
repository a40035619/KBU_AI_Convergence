export interface SidebarSubItem {
    name: string;
    key: "software" | "ai" | "service" | "course" | "license";
}

export interface SidebarSectionStructure {
    title: string;
    sectionKey: "major" | "curriculum";
    items: SidebarSubItem[];
}

export interface TableHeaderCell {
    text: string;
    colSpan?: number;
    rowSpan?: number;
}

export interface PureTableStructure {
    headers: TableHeaderCell[][];
    rows: string[][];
}

export const informationData = {
    sidebarHeader: "학부정보",

    sidebarData: [
        {
            title: "학부",
            sectionKey: "major",
            items: [
                { name: "컴퓨터소프트웨어", key: "software" },
                { name: "인공지능", key: "ai" },
                { name: "AI휴먼서비스융합", key: "service" }
            ]
        },
        {
            title: "커리큘럼",
            sectionKey: "curriculum",
            items: [
                { name: "교과과정", key: "course" },
                { name: "자격증 취득", key: "license" }
            ]
        }
    ],

    category: "학부 소개",

    software: {
        title: "컴퓨터소프트웨어 학부",
        description: `
컴퓨터소프트웨어 전공은 AI융합서비스의 핵심 기반 기술을 배우는 학과로써
첨단 소프트웨어 개발과 AI 기술의 실제 적용에 중점을 두고 있습니다.
본 학과에서는 프로그래밍 기초부터 최신 AI 알고리즘까지 폭넓은 커리큘럼을 제공함으로써 학생들이 소프트웨어 엔지니어링의 전문 지식을 습득하고 실제 문제 해결 능력을 키울 수 있도록 합니다.
또한 실무 중심의 프로젝트와 현장 실습을 통해 산업계에서 즉시 활용 가능한 실력을 갖춘 인재로 성장할 수 있는 기반을 마련합니다.
`
    },

    ai: {
        title: "인공지능 학부",
        description: `
인공지능전공은 AI융합학부 내에서 인공지능의 이론과 응용을 깊이 있게 탐구하는 학문을 지향합니다.
데이터 과학, 머신 러닝, 심층 학습 등 AI 기술의 핵심적인 측면들을 체계적으로 학습하며 이를 통해 복잡한 문제를 해결할 수 있는 실질적인 능력을 개발합니다.
본 학과의 커리큘럼은 실제 산업 현장에서 요구되는 기술적 요구 사항에 부합하는 솔루션 개발을 위한 실습과 프로젝트를 포함하여 이론과 실무의 균형을 중시합니다.
`
    },

    service: {
        title: "AI휴먼서비스 학부",
        description: `
AI휴먼서비스융합 전공은 AI융합학부 내에서 인간 중심의 서비스를 제공하기 위한 AI 기술의 응용에 집중하는 학과입니다.

헬스케어, 사회 복지, 교육 등 인간의 삶의 질을 향상시키는 다양한 분야에서 AI를 효과적으로 활용할 수 있는 방법을 교육합니다.

이를 통해 기술적 지식과 함께 인간 복지에 대한 이해를 깊이 있게 배우며 실제 사회 문제 해결을 위한 윤리적이고 효율적인 솔루션을 개발하는데 필요한 실무 경험을 체험합니다.
`
    },

    curriculum: {
        category: "커리큘럼",
        course: {
            title: "교과과정",
            freshman2022: {
                title: "● 2022학번 신입생",
                footerNotes: [
                    "※ 이중전공자 이수학점 : 전공기초 6학점, 전공필수 21학점, 전공선택 24학점 총 51학점 이수",
                    "※ 복수전공자 이수학점 : 전공기초 6학점, 전공필수 21학점, 전공선택 15학점 총 42학점 이수",
                    "※ 부전공자 이수학점 : 전공기초 6학점, 전공필수 15학점 총 21학점 이수"
                ]
            },
            transfer2024: {
                title: "● 2024학번 편입생"
            },
            division: {
                title: "이수구분별 교과과정",
                footerNotes: [
                    "● 매학기 개설 전공선택 과목 : 인턴십Ⅰ~Ⅳ(각 3학점) / 학습경험 학점인정 과목 : IT도전DIY(1학점)"
                ]
            }
        },
        license: {
            title: "자격증 취득",
            international: {
                title: "국제 공인 자격증",
                description: "컴퓨터소프트웨어학과에서 인정하는 국제공인자격증 혹은 국가기술자격증 중 하나 이상을 반드시 취득해야 졸업 가능 (개정 22.06.03)"
            },
            national: {
                title: "국가기술자격증",
                footerNotes: [
                    "• 정보처리산업기사, 정보보안산업기사 자격증 : 2학년 수료 후 산업기사 자격증 취득 자격이 주어짐",
                    "• 정보처리기사 자격증 : 3학년 수료 후 정보처리기사 자격증 취득 자격이 주어지며, 졸업 전 취득 가능",
                    "• 정보처리기사 자격증은 학습경험 학점인정(IT도전DIY) 수강 신청 시 학점인정기준 중 하나에 해당하는 것으로 컴퓨터 졸업인증과는 관계가 없음"
                ]
            }
        }
    },

    courseTablesMatrix: {
        freshman2022: {
            headers: [
                [
                    { text: "일립교육", colSpan: 4 },
                    { text: "전공교육", colSpan: 4 },
                    { text: "자유선택", rowSpan: 2 },
                    { text: "졸업학점", rowSpan: 2 }
                ],
                [
                    { text: "중핵교양" }, { text: "기초교양" }, { text: "일반교양" }, { text: "소계" },
                    { text: "전공기초" }, { text: "전공필수" }, { text: "전공선택" }, { text: "소계" }
                ]
            ],
            rows: [
                ["13", "6", "18", "37", "6", "21", "24", "51", "42", "130"]
            ]
        },
        transfer2024: {
            headers: [
                [
                    { text: "일립교육" },
                    { text: "전공교육", colSpan: 4 },
                    { text: "자유선택", rowSpan: 2 },
                    { text: "졸업학점", rowSpan: 2 }
                ],
                [
                    { text: "중핵교양" },
                    { text: "전공기초" }, { text: "전공필수" }, { text: "전공선택" }, { text: "소계" }
                ]
            ],
            rows: [
                ["6", "6", "21", "24", "51", "8", "65"]
            ]
        },
        division: {
            headers: [
                [
                    { text: "학년", rowSpan: 2 },
                    { text: "이수구분", rowSpan: 2 },
                    { text: "1학기", colSpan: 2 },
                    { text: "2학기", colSpan: 2 }
                ],
                [
                    { text: "학수번호" }, { text: "과목명" },
                    { text: "학수번호" }, { text: "과목명" }
                ]
            ],
            rows: [
                ["1", "전공기초", "IC136", "컴퓨터프로그래밍기초Ⅰ", "IC142", "컴퓨터프로그래밍기초Ⅱ"],
                ["1", "전공필수", "IC127", "미래설계상담Ⅰ", "IC127", "미래설계상담Ⅱ"],
                ["2", "전공필수", "IC158", "네트워크와데이터통신", "IC067", "데이터베이스"],
                ["2", "전공필수", "IC127", "미래설계상담Ⅲ", "IC127", "미래설계상담Ⅳ"],
                ["2", "전공선택", "IC112", "멀티미디어응용", "IC040", "컴퓨터구조"],
                ["2", "전공선택", "IC174", "자바프로그래밍", "IC187", "고급프로그래밍"],
                ["2", "전공선택", "IC045", "이산수학", "IC059", "자료구조"],
                ["2", "전공선택", "IC015", "웹프로그래밍", "IC109", "컴퓨터네트워크설계"],
                ["2", "전공선택", "IC175", "공학인과사회", "IC157", "정보보호개론"],
                ["2", "전공선택", "IC072", "소프트웨어공학", "IC180", "웹시스템개발Ⅱ"],
                ["3", "전공필수", "IC066", "운영체제", "-", "-"],
                ["3", "전공필수", "IC127", "미래설계상담Ⅴ", "IC127", "미래설계상담Ⅵ"],
                ["3", "전공필수", "IC138", "머신러닝프로그래밍", "IC182", "이미지딥러닝"],
                ["3", "전공선택", "IC176", "알고리즘", "IC156", "프로젝트관리론"],
                ["3", "전공선택", "IC177", "웹시스템개발Ⅰ", "IC111", "네트워크프로그래밍"],
                ["3", "전공선택", "IC123", "인공지능", "IC181", "IoT소프트웨어응용"],
                ["3", "전공선택", "-", "-", "IC151", "데이터마이닝과통계"],
                ["3", "전공선택", "IC143", "종합설계Ⅰ", "IC145", "종합설계Ⅱ"],
                ["4", "전공필수", "IC127", "미래설계상담Ⅶ", "IC127", "미래설계상담Ⅷ"],
                ["4", "전공필수", "IC178", "리눅스시스템", "IC183", "IT창업응용"],
                ["4", "전공선택", "IC160", "IT창업개론", "IC184", "ICT설계"],
                ["4", "전공선택", "IC140", "빅데이터기술", "IC075", "모바일프로그래밍"],
                ["4", "전공선택", "IC179", "창의적통합설계", "-", "-"]
            ]
        }
    },

    licenseTablesMatrix: {
        international: {
            headers: [[{ text: "분야" }, { text: "자격증 종목" }]],
            rows: [
                ["프로그래밍", "OCJP, OCBCD, OCWCD, MCSD, MCPD-WD, MCPD-EAD"],
                ["네트워크", "CCNA, CCNP, CCIE, CCSP(CISCO 주관), NETWORK+"],
                ["데이터베이스", "OCA, OCP, OCM"],
                ["보안", "CISA, CISSP, CCSP(ISC 주관), CCSLP, CISM, Security+"],
                ["서버", "MCSE, MCTS, MCITP-SA, MCITP-EA, Server+"],
                ["리눅스", "LPIC, LPIC essentials, RHCE, Linux+"]
            ]
        },
        national: {
            headers: [[{ text: "분야" }, { text: "자격증 종목" }]],
            rows: [
                ["소프트웨어 개발", "정보처리산업기사(필기+실기)"],
                ["보안", "정보보안산업기사(필기+실기)"]
            ]
        }
    }
};