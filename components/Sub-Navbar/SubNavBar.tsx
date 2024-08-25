'use client'
import { useFilterStore } from '@/store/filterStore';
import React, { useState } from 'react'
import "./SubNavBar.css"

const SubNavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropDownOpen, setDropDownIsOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleCollapseToggle = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const toggleDropdown = () => {
      setDropDownIsOpen(!isDropDownOpen);
    };
  
    const {filters}= useFilterStore((state)=>state)
    
  return (
    <div className="subNav" >
        
                <div className='subNavText'> 
                    <p>30 ITEMS</p>
                    <div className="collapse-div" onClick={handleCollapseToggle}>{isCollapsed?<p>Show Content</p>:<p>Hide Content</p>}</div>
                </div>
                <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Toggle Dropdown
      </button>
      {isDropDownOpen && (
        <div className="dropdown-content">
          <p>Dropdown Content 1</p>
          <p>Dropdown Content 2</p>
          <p>Dropdown Content 3</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default SubNavBar