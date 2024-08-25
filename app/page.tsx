'use client'
import Sidebar from '@/components/SideBar/Sidebar'
import React, { useState } from 'react'
import ProductInterface from '@/interface/product';
import Card from '@/components/Card/Card';
import SubNavBar from '@/components/Sub-Navbar/SubNavBar';
import "./page.css"
import { getAllproduct } from '@/action/getAllProd';
import { useCollapse } from '@/store/filterStore';
const Home = async() => {
  
  const products =await getAllproduct()
 
  
  
  
  return (
    <div className='homePage' >
      <SubNavBar/>
      <Sidebar/>
      <div className='filter-content'>
      
      
      
      
      <div>
        
      <div className='main-content' style={{display:"flex", flexWrap:"wrap" }}>
      {
        products?.map((item)=>{
            return <Card key={item.id} idNo={item.id} image={item.thumbnail} price={item.price} title={item.title}   />
        })
      }
      </div>

      </div>
      
      </div>
    
    </div>
  )
}

export default Home
