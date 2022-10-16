import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import "./Right.css"

const Right = () => {
  return (
    <div className='RightMain'>
            <div>
                <h3>Updates</h3>
                <Updates/>
            </div>
            <div>
                <h3>Customer</h3>
                <CustomerReview/>
            </div>
    </div>
  )
}

export default Right