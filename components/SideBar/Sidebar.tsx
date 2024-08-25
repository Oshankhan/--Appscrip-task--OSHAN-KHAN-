'use client'
import React, { useState } from 'react';
import './Sidebar.css';
import SideDropDown from './SideBarBodyDrop-Down/SideDropDown';
import { useFilterStore } from '@/store/filterStore';

const Sidebar: React.FC = () => {
 
  

  return (
    <div>
        <div className="sidebar">
            
            <div className='sidebar-body ' style={{display:"flex", flexDirection:"column" }}>
                <div className='sidebar-items-heading'>
                    <label htmlFor="customizable"></label>
                    <input type="checkbox" id='customizable'/>
                </div>
                <SideDropDown/>
                
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
