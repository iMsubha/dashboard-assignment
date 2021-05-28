import React, { useEffect, useState } from 'react';
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
   const [usersdata, setUsers] = useState('')
   useEffect(() =>{
       fetch('https://shrouded-tundra-64489.herokuapp.com/users')
       .then(res => res.json())
       .then(data => setUsers(data))
   },[])
    console.log(usersdata);
    return (
        <div className="d-flex justify-content-center flex-column">
         <div className="ml-5">
            <Image className="ml-5" src={developerImg} width={200}></Image>
         </div>
         <h4 className="mt-5 pt-5 ml-5">New Applicants</h4>
         <div>
          {
            users.map( user =>  <Applicants key={user._id} user={user}></Applicants>)
          } 
         </div>
        </div>

    );
};

export default RightSidebar;