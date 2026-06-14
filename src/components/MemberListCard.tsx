import { studentCouncilPageData, type CouncilItem } from "../data/StudentCouncilPageText";
import "./MemberListCard.css";

const MemberRow = ({ role, name }: { role: string; name: string }) => (
  <div className="item-row">
    <span className="item-left">{role}</span>
    <span className="item-right">{name}</span>
  </div>
);

const MemberListCard = () => {
  return (
    <div className="grid-container">
      {studentCouncilPageData.councilMembers.map((section: CouncilItem) => (
        <div key={section.title} className="member-section-box">
          <h4 className="section-title-h4">{section.title}</h4>
          <div className="items-list-box">
            {section.items.map(([role, name]) => (
              <MemberRow key={name} role={role} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberListCard;