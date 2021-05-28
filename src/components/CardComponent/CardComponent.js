import React from 'react';
import Card from 'react-bootstrap/Card';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CardComponent = ({applicant}) => {
    const { title,number,percentage, totalPercentage,color } = applicant;
//1d1d1d
    return ( 
           <Card style={{width:'230px'}} className="d-flex flex-row dark-color ml-2 mr-4 mt-3 py-2 px-3 border-style hvr-grow-shadow">
               <div>
                    <p>{title}</p>
                    <h4>{number}</h4>
                    <p style={{color:`${color}`}}>{totalPercentage}%</p>
               </div>
               <div className="mt-3" style={{ width: 80, height: 80 }}>
                    <CircularProgressbar 
                    value={percentage} text={`${percentage}%`} 
                    styles={{ text: {fill: `${color}`}, trail: {stroke: '#3F3328'}, 
                    path: {stroke: `${color}`, strokeLinecap: 'round'}}}/>
               </div>
           </Card>
    );
};

export default CardComponent;