import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import api from "../api";
import TeamMember from "../components/TeamMember";
import "../styles/Home.css"

function Home() {
    const navigate = useNavigate();
    const [team_members, setTeamMembers] = useState([]);

    useEffect(() => {
        getTeamMembers();
    }, []);

    const getTeamMembers = () => {
        api
            .get("/api/members/")
            .then((res) => res.data)
            .then((data) => {
                setTeamMembers(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const selectedMember = (member) => {
        navigate('Edit/' + member.id, {state:{member: member}});
    }

    const selectCreate = () => {
        navigate('Add/');
    }

    return (
        <div>
            <div class="main-container">
                <div className="title-row">
                    <div className="title">Team Members</div>
                    <button className="title-button" onClick={selectCreate}><img src="./src/assets/add.png" alt="Add New Team Member"/></button>
                </div>
                <div className="subtitle">You have {team_members.length} team members.</div>
                {team_members.map((team_member) => (
                    <TeamMember member={team_member} onSelect={selectedMember} key={team_member.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
