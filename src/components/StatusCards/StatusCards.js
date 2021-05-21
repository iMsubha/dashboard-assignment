import React from 'react';
import { Card } from 'react-bootstrap';
import { FiArrowUpRight } from "react-icons/fi";

const StatusCards = ({status}) => {
    const {title,number,totalPercentage}= status;
    return (
        <Card className="dark-color border-style mr-1 p-2" style={{width:'150px'}}>
          <small className="text-center"> {title}</small>
          <small className="text-center" style={{color:"#C496EF"}}><FiArrowUpRight />{totalPercentage}</small>
          <h5 className="text-center">{number}</h5>
        </Card>
    );
};

export default StatusCards;