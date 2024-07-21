import {  useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import api from "../api";
import "../styles/MemberDisplay.css"

function MemberDisplay() {

    const location = useLocation();
    const navigate = useNavigate();

    //TODO: Would likely refactor this into a separate Form Component with more time or a broader scope.
    //      As of now the similarity and functionality between edit/create is near enough for a single page.
    const member = location.state ? location.state.member : null;
    const title = member ? "Edit" : "Add a";
    const subTitle = member ? "Edit" : "Set"

    const id = member ? member.id : null;
    const [first_name, setFirstName] = useState(member ? member.first_name : "");
    const [last_name, setLastName] = useState(member ? member.last_name : "");
    const [phone_number, setPhoneNumber] = useState(member ? member.phone_number : "");
    const [email, setEmail] = useState(member ? member.email : "");
    const isValidEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    const [emailTouched, setEmailTouched] = useState(false);
    const [role, setRole] = useState(member ? member.role : "regular");

    const formSubmit = (e) => {
        if (member) {
            console.log(member)
            updateTeamMember(e);
        } else {
            createTeamMember(e);
        }
    }

    const createTeamMember = (e) => {
        e.preventDefault();
    
        api
            .post("/api/members/", { first_name, last_name, phone_number, email, role })
            .then((res) => {
                if (res.status === 201) {
                    alert("Team member created!");
                    navigate('/');
                }
                else alert("Failed to create Team member.");
            })
            .catch((err) => alert(err));
    };

    const deleteTeamMember = (e) => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to delete this team member?')) { 
        api
            .delete(`/api/members/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Team member deleted!");
                else alert("Failed to delete team member.");
                navigate('/');
            })
            .catch((error) => alert(error));
        }
    };

    const updateTeamMember = (e) => {
        e.preventDefault();
        api
            .patch(`/api/members/update/${id}/`, { first_name, last_name, phone_number, email, role })
            .then((res) => {
                if (res.status === 200) {
                    alert("Team member updated!");
                    navigate('/');
                } else {
                    alert("Failed to update team member.");
                }
            })
            .catch((error) => alert(error));
    };

    function emailStyle() {
        if (emailTouched && !isValidEmail) {
          return {
            backgroundColor: "rgba(255, 0, 0, 0.5)" 
          };
        }
    }

    function actionButtons() {
        if(member) {
            return (
                <button className="button-base delete" onClick={deleteTeamMember}>Delete</button>
            )
        } else {
            return (
                <button className="button-base" onClick={() => navigate('/')}>Cancel</button>
            )
        }
    }



    return (
            <div>
                <form onSubmit={formSubmit}>
                <div className="title-row">
                <div className="title">{title} team member</div>
                    <button className="title-button" onClick={() => navigate('/')}><img src="../src/assets/arrow_back.png" alt="Add New Team Member"/></button>
                </div>
                <div className="subtitle">{(subTitle)} contact info, location, and role</div>
                <label className="form-subtitle">Info:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    value={first_name}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    value={last_name}
                    placeholder="Last Name"
                />
                <input
                    type="text"
                    id="email"
                    name="email"
                    required
                    onBlur={() => setEmailTouched(true)}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={emailStyle()}
                    placeholder="Email"
                />
                <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phone_number}
                    placeholder="Phone #"
                />
                <label className="form-subtitle">Role:</label>
                <label className="radio-label">
                    <p>Regular - Can't delete members</p>
                    <input
                        type="radio"
                        id="role"
                        name="role"
                        checked={role == "regular"}
                        onChange={(e) => setRole(e.target.value)} 
                        value="regular"
                    />
                </label>
                <label className="radio-label">
                    <p>Admin - Can delete members</p>
                    <input
                        type="radio"
                        id="role"
                        name="role"
                        checked={role == "admin"}
                        onChange={(e) => setRole(e.target.value)}
                        value="admin"
                        placeholder="Test"
                    />     
                </label>
             
                <div className="buttons-container">
                    <div>{actionButtons()}</div>
                    <div><input className="button-base submit" type="submit" value="Save"></input></div>
                </div>
                </form>
            </div>
    );
}

export default MemberDisplay;
