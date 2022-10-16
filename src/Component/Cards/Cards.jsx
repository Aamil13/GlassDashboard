import React from 'react'
import { CardData } from '../../Data'
import Card from '../Card/Card'
import "./cards.css"

const Cards = () => {
  return (
    <div className='Cards'>
            {CardData.map((item,idx)=>(
                <div key={idx} className='CardContainer'>
                    <Card
                    title = {item.title}
                    color={item.color}
                    barValue={item.barValue}
                    value={item.value}
                    png={item.png}
                    series={item.series}
                    />
                </div>
            ))}
    </div>
  )
}

export default Cards