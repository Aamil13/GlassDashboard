import React from 'react'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import "./main.scss"

const MainDash = () => {
  return (
    <div className='Maindash'>
        <h1>DashBoard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash