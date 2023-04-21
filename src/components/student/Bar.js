import React from 'react';
//import './Side.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink,useNavigate } from 'react-router-dom';

const Bar = (props) => {

const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor=" #324c27">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            {props.name}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large" className="items" onClick={()=> navigate('./student/Dashboard/Dashboard')}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/timetable" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" className="items" onClick={()=> navigate('./student/Timetable')}>Time Table</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" className="items" onClick={()=>navigate('./student/Result')}>Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/test" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="credit-card" iconType="solid" onClick={()=> navigate('./student/Upload') }>
                 Assignments
               </CDBSidebarMenuItem>
            </NavLink>
            

            <NavLink exact to="/notice" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" className="items " onClick={()=> navigate('./components/student/Notice') }>Notifications</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className="items" onClick={()=> navigate('./components/student/Profile') }>Profile page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Bar;
