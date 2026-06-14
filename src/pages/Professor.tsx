import { pageInfo, professors } from "../data/ProfessorsPageText";
import { ProfileCard } from "../components/ProfileCard";
import "../styles/Professor.css";

const Professor = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-title-wrapper">
          <h1 className="profile-title">{pageInfo.title}</h1>
          <div className="profile-title-bar"></div>
        </div>
        <p className="profile-description">{pageInfo.description}</p>
      </div>
      <ProfileCard data={professors} />
    </div>
  );
};

export default Professor;