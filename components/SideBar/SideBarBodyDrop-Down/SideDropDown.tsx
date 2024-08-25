'use client';
import React, { useEffect, useState } from 'react';
import './SideDropDown.css';
import { MdArrowDropDown } from 'react-icons/md';
import { sideContent } from '@/data/SideContent';
import { useFilterStore } from '@/store/filterStore'; // Adjust the import path

const SideDropDown = () => {
  const { filters, setFilters, updateFilter, unselectAll } = useFilterStore();
  
  // State to track collapsed sections
  const [collapsedSections, setCollapsedSections] = useState<boolean[]>([]);

  // Initialize filters on component mount
  useEffect(() => {
    setFilters(
      sideContent.map((items) => ({
        id: items.id,
        heading: items.heading,
        content: items.content.map((subItems) => ({
          ...subItems,
          checked: false,
        })),
      }))
    );

    // Initialize collapsedSections with all sections expanded (false)
    setCollapsedSections(new Array(sideContent.length).fill(true));
  }, [setFilters]);

  // Handle toggle of collapse/expand
  const handleShowLess = (index: number) => {
    setCollapsedSections((prev) =>
      prev.map((collapsed, i) => (i === index ? !collapsed : collapsed))
    );
  };

  return (
    <div>
      {filters.map((items, index) => (
        <div key={items.id}>
          <div className="dropdown">
            <p>{items.heading}</p>
            <button onClick={() => handleShowLess(index)}>
              <MdArrowDropDown />
            </button>
          </div>
          <p>All</p>
          
          
          {/* Conditionally render dropdown content */}
          {!collapsedSections[index] && (
            
            <div className="dropdown-content">
                <button onClick={() => unselectAll(items.id)}>Unselect all</button>
              {items.content.map((subItems: any, idx: number) => (
                <div key={subItems.id}>
                  <input
                    type="checkbox"
                    value={subItems.title}
                    id={subItems.title}
                    checked={subItems.checked}
                    onChange={() => updateFilter(items.id, idx)}
                  />
                  <label htmlFor={subItems.title}>{subItems.title}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideDropDown;
