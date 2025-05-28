import React, { useState } from 'react'
import InventoryBar from '../components/InventoryBar'
import StockView from '../components/StockView';
import InventoryView from '../components/InventoryView';

const Stacks = () => {
    const [activeTab, setActiveTab] = useState("stocks");

  return (
    <div className='min-h-screen'>
      <InventoryBar activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === "stocks" && <StockView/>}
      {activeTab === "inventory" && <InventoryView/>}
    </div>
  )
}

export default Stacks
