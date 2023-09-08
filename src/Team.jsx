import { useState } from "react"

export default function Team() {
    const [Team,setTeam] = useState(11);


    const HandleAdd = () => {
        setTeam(Team + 1);
    }


    const HandleRemove = () => {
        setTeam(Team - 1);
    }
    
    const PlayersStyle ={
        border: '2px solid purple',
        padding: '10px', 
        borderRadius:'10px',
        margin: '15px'
    }

    return (
        <div style={PlayersStyle}>
            <h2>Players: {Team} </h2>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleRemove}>Remove</button>
        </div>
    )
}