import React from "react";
import "./ProfileCard.css";

interface ProfileDetail {
  label: string;
  value: string;
}

interface Profile {
  id: number;
  name: string;
  image: string;
  position: string;
  position2?: string;
  details: ProfileDetail[];
}

interface ProfileCardProps {
  data: Profile[];
}

export const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <div className="profile-list">
      {data.map((p) => (
        <div key={p.id} className="profile-card">
          <div className="profile-info">
            <div className="profile-name-row">
              <h2 className="profile-name">{p.name}</h2>
              <span className="profile-position">{p.position}</span>
              {p.position2 && (
                <span className="profile-position-sub">{p.position2}</span>
              )}
            </div>
            <div className="profile-details">
              {p.details.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="profile-label">{item.label}</span>
                  <span className="profile-value">{item.value}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="profile-image-wrapper">
            <div className="profile-image-bg"></div>
            <img className="profile-image" src={p.image} alt={p.name} />
          </div>
        </div>
      ))}
    </div>
  );
};