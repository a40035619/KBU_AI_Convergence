import { useState } from "react";
import { informationData } from "../data/InformationPageText";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../styles/information.css";
import "../components/Sidebar.css";

type PageType = | "software" | "ai" | "service" | "course" | "license";

function Information() {
  const [page, setPage] = useState<PageType>("software");//페이지 변환 함수

  //구조 분해 할당 사용
  const {
    sidebarHeader,
    sidebarData,
    category,
    software,
    ai,
    service,
    curriculum,
    courseTablesMatrix,
    licenseTablesMatrix,
  } = informationData as any;

  //페이지 별 제목 저장
  const TITLE_MAP: Record<PageType, string> = {
    software: software.title,
    ai: ai.title,
    service: service.title,
    course: curriculum.course.title,
    license: curriculum.license.title,
  };

  //설명 박스
  const description =
    page === "software"
      ? software.description
      : page === "ai"
        ? ai.description
        : page === "service"
          ? service.description
          : null; //교과좌정이나 라이센스는 표를 보여주기 때문에 반환

  const handlePageChange = (key: string) => {
    setPage(key as PageType);
  };
  //사이드 바 메뉴 클릭시 페이지 전환 함수

  const courseText = curriculum.course;
  const licenseText = curriculum.license;

  return (
    <div className="information-page">
      <div className="information-content-wrapper">
        <Sidebar
          headerTitle={sidebarHeader}
          menuData={sidebarData as any}
          onItemClick={handlePageChange}
        />

        <div className="major-content">
          <div className="major-header">
            <h1 className="major-title-main">
              {page === "course" || page === "license"
                ? curriculum.category
                : category}
            </h1>

            <p className="major-title-sub">
              {TITLE_MAP[page]}
            </p>
          </div>

          {description && (
            <div className="major-description-box">
              {description}
            </div>
          )}

          {page === "course" && (
            <div>
              <Table
                title={courseText.division.title}
                headers={courseTablesMatrix.division.headers}
                rows={courseTablesMatrix.division.rows}
                footerNotes={courseText.division.footerNotes}
              />

              <Table
                title={courseText.freshman2022.title}
                headers={courseTablesMatrix.freshman2022.headers}
                rows={courseTablesMatrix.freshman2022.rows}
                footerNotes={courseText.freshman2022.footerNotes}
              />

              <Table
                title={courseText.transfer2024.title}
                headers={courseTablesMatrix.transfer2024.headers}
                rows={courseTablesMatrix.transfer2024.rows}
              />
            </div>
          )}

          {page === "license" && (
            <div>
              <Table
                title={licenseText.international.title}
                description={licenseText.international.description}
                headers={licenseTablesMatrix.international.headers}
                rows={licenseTablesMatrix.international.rows}
              />

              <Table
                title={licenseText.national.title}
                headers={licenseTablesMatrix.national.headers}
                rows={licenseTablesMatrix.national.rows}
                footerNotes={licenseText.national.footerNotes}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Information;