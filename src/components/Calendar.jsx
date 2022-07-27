// import axios from 'axios'
import { useEffect, useState } from 'react';
// import { v4 as myNewID } from "uuid";
// const URL="http://localhost:8000/api/users/me";
// import swStadiums from "../../data/stadiums.json"





export const Calendar = () => {
    
    const [arenda, setArenda] = useState([
        {
            date: 'Monday',
            rents: [
                // {
                    
                //     id: 2
                // },
                // {
                    
                //     id: 3
                // },
            ]

        },
        {
            date: 'Tuesday',
            rents: [

            ],

        },
        {
            date: 'Wednesday',
            rents: [

            ],

        },
        {
            date: 'Thursday',
            rents: [

            ],

        },
        {
            date: 'Friday',
            rents: [

            ],

        },
        {
            date: 'Saturday',
            rents: [

            ],

        },
        {
            date: 'Sunday',
            rents: [

            ],

        }

    ]
    )

    return <div style={{ display: 'flex' }}>
        {arenda.map((day, dayIndex) => (
            <div key={dayIndex}>
                
                {Array.from({ length: 12 }).fill(null).map((cell, index) => {
                    return (
                        <div
                            key={index}

                            onClick={() => {
                                // console.log({day, index})
                                if(window.confirm(`day: ${day.date}  
                                hour: ${index}`)===true){
                                    console.log(`${dayIndex}`)
                                    // const chosenItem=day.date.filter((zxc)=>zxc.date===dayIndex)
                                    const newItem={ date: dayIndex, rents: [{id:index}] }
                                    setArenda((prevElement) => [newItem, ...prevElement])
                                }else{
                                    console.log('nothing');
                                }
                            //     window.confirm(`day: ${day.date}  
                            // hour: ${index}`)
                            //     if (window.confirm) {
                            //         console.log('rented')
                                    // const newItem = { date: day.date, rents: [{index}] }
                                    // Setrent((prevElement) => [newItem, ...prevElement]);
                            //     }
                            }}
                            style={{
                                border: '1px solid black',
                                padding: '6px 12px',
                                width: '200px', height: '50px',
                                backgroundColor: day.rents.some(
                                    (rent) => rent.id === index) ? 'red' : 'white'
                            }}>
                            {index}
                        </div>)
                })}</div>
        ))}</div>
}