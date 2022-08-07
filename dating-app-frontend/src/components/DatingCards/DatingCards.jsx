import axios from "../Axios/axios";
import { useEffect } from "react";
import { useState } from "react";
import DatingCard from 'react-tinder-card';
import "./DatingCards.css";

const DatingCards = ()=>{
    const [People, setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/dating/cards")
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("Receiving " + nameToDelete); 
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
        }

     return (
        <div className="datingCards">
            <div className="datingCards__container">
                {
                    People.map((person)=>(
                        <DatingCard className="swipe" key={person.name} preventSwipe={['up', 'down']} 
                        onSwipe={(dir)=> swiped(dir, person.name)} 
                        onCardLeftScreen = {()=> outOfFrame(person.name)}>
                            <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </DatingCard>
                    ))
                }
            </div>
        </div>
    )
}


export default DatingCards;