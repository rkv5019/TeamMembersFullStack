import React from "react";
import "../styles/Member.css"

function TeamMember({ member, onSelect }) {

    return (
        <div className="member-container" onClick={() => onSelect(member)}>
            <img className="profile-img" src="./src/assets/default_pfp.png" alt="Add New Team Member"/>
            <div className="member-details">
                <div className="member-name">{member.first_name} {member.last_name}</div>
                <div className="member-detail">{member.phone_number}</div>
                <div className="member-detail">{member.email}</div>
            </div>
        </div>
    );
}

export default TeamMember
