import React from "react";
import { Image } from "react-bootstrap";
import { AiFillFolder, AiOutlineBarChart, AiOutlineHome } from "react-icons/ai";
import { BsBoxArrowRight, BsFolderCheck, BsPeopleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import {
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
const Navigation = () => {
  return (
      <ProSidebar collapsed={true}>
        <SidebarHeader className="p-3">
        <Link to="/dashboard">
          <Image src={logo} width={50}></Image>
        </Link>
        </SidebarHeader>

        <SidebarContent className="mb-4">
          <Link to="/dashboard"  className="d-flex justify-content-center p-3">
            <MenuItem>
              <AiOutlineHome size="1rem"/>
            </MenuItem>
          </Link>

          <Link to="/user" className="d-flex justify-content-center p-3">
            <MenuItem >
              <BsPeopleFill size="1rem"/>
            </MenuItem>
          </Link>
          
          <Link to="/test" className="d-flex justify-content-center p-3">
            <MenuItem>
              <AiOutlineBarChart size="1rem" />
            </MenuItem>
          </Link>
          
          <Link to="/test" className="d-flex justify-content-center p-3">
            <MenuItem>
            <AiFillFolder size="1rem"/>
            </MenuItem>
          </Link>

          <Link to="/test" className="d-flex justify-content-center p-3">
            <MenuItem >
              <BsFolderCheck size="1rem"/>
            </MenuItem>
          </Link>

          <Link to="/test" className="d-flex justify-content-center p-3">
            <MenuItem >
              <GoNote size="1rem"/>
            </MenuItem>
          </Link>
          <Link to="/test" className="d-flex justify-content-center p-3">
            <MenuItem >
              <BsBoxArrowRight size="1rem"/>
            </MenuItem>
          </Link>
        </SidebarContent>

        <SidebarFooter className="d-flex justify-content-center p-3 mt-5" >
            <FiSettings size="1rem"/>
        </SidebarFooter>
      </ProSidebar>
  );
};

export default Navigation;
