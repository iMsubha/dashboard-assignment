import React from 'react';
import { AiOutlineComment, AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
const Applicants = ({user}) => {
   
    return (
        <div className="d-flex justify-content-between p-2 mx-5">
            <AiOutlineUser />
            <h5>{user.name}</h5>
            <div>
                <AiOutlineComment />
                <FiPhone/>
            </div>
        </div>
    );
};

export default Applicants;