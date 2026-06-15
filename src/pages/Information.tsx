import { useState } from "react";
import { informationData } from "../data/InformationPageText";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import "../styles/information.css";
import "../components/Sidebar.css";

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

function CourseContent() {
  return (
    <div className="sub-content-wrapper">
      <Table
        title={curriculum.course.division.title}
        headers={courseTablesMatrix.division.headers}
        rows={courseTablesMatrix.division.rows}
        footerNotes={curriculum.course.division.footerNotes}
      />
      <Table
        title={curriculum.course.freshman2022.title}
        headers={courseTablesMatrix.freshman2022.headers}
        rows={courseTablesMatrix.freshman2022.rows}
        footerNotes={curriculum.course.freshman2022.footerNotes}
      />
      <Table
        title={curriculum.course.transfer2024.title}
        headers={courseTablesMatrix.transfer2024.headers}
        rows={courseTablesMatrix.transfer2024.rows}
      />
    </div>
  );
}

function LicenseContent() {
  return (
    <div className="sub-content-wrapper">
      <Table
        title={curriculum.license.international.title}
        description={curriculum.license.international.description}
        headers={licenseTablesMatrix.international.headers}
        rows={licenseTablesMatrix.international.rows}
      />
      <Table
        title={curriculum.license.national.title}
        headers={licenseTablesMatrix.national.headers}
        rows={licenseTablesMatrix.national.rows}
        footerNotes={curriculum.license.national.footerNotes}
      />
    </div>
  );
}

function Information() {
  const [page, setPage] = useState("software");

  const PAGE_MAP: Record<string, { mainTitle: string; subTitle: string; description: string | null; content: React.ReactNode }> = {
    software: {
      mainTitle: category,
      subTitle: software.title,
      description: software.description,
      content: null,
    },
    ai: {
      mainTitle: category,
      subTitle: ai.title,
      description: ai.description,
      content: null,
    },
    service: {
      mainTitle: category,
      subTitle: service.title,
      description: service.description,
      content: null,
    },
    course: {
      mainTitle: curriculum.category,
      subTitle: curriculum.course.title,
      description: null,
      content: <CourseContent />,
    },
    license: {
      mainTitle: curriculum.category,
      subTitle: curriculum.license.title,
      description: null,
      content: <LicenseContent />,
    },
  };

  const currentPageData = PAGE_MAP[page] || PAGE_MAP["software"];

  return (
    <div className="information-page">
      <div className="information-content-wrapper">
        <Sidebar
          headerTitle={sidebarHeader}
          menuData={sidebarData}
          activeKey={page}
          onItemClick={setPage}
        />

        <div className="major-content">
          <div className="major-header">
            <h1 className="major-title-main">
              {currentPageData.mainTitle}
            </h1>
            <p className="major-title-sub">
              {currentPageData.subTitle}
            </p>
          </div>

          {currentPageData.description && (
            <div className="major-description-box">
              {currentPageData.description}
            </div>
          )}

          {currentPageData.content}
        </div>
      </div>
    </div>
  );
}

export default Information;