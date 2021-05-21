import React from 'react';
import { Image } from 'react-bootstrap';
import developerImg from '../../assets/images/dev-images.svg';
import Applicants from '../Applicants/Applicants';
const RightSidebar = () => {
    const users=[
        {name: 'Rosie Metts'},
        {name: 'James Scott'},
        {name: 'Jamie Lauerson'},
        {name: 'Elizabeth Hurton'},
        {name: 'Danny Watson'}
    ];
    return (
        <div className="d-flex justify-content-center flex-column">
         <div className="ml-5">
            <Image className="ml-5" src={developerImg} width={200}></Image>
         </div>
         <h4 className="mt-5 pt-5 ml-5">New Applicants</h4>
         <div>
            { 
                users.map(user=> <Applicants user={user}/>)
            }
        </div>
        </div>

    );
};

export default RightSidebar;