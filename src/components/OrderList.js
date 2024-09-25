import React from 'react';
import List from './list';


function OrderList(props)
{
  let {orderProductList} = props;

  
  return(
    <div className="container ">
          
    <div className='OrderedFruitsList '>Ordered Fruits List</div>
    <div>
      
      
      
      </div> 
    <div className=' row borderBottom  marginTop'>
          <div className='col-3 listTextHead borderRight'>Product</div>
          <div className='col-3 listTextHead borderRight'>Rate</div>
          <div className='col-4 listTextHead borderRight'>Quantity</div>
          <div className='col-2 listTextHeadTotal'>Total</div>
    </div>
    
    <div className='row '>
      {orderProductList.map((l, index)=>
      <List
      LProduct={l}
      key={index}
      
      />
      )}
    </div>
    <div>
      <div className='col-12 total'>Grand Total = RS. {props.totalAmount}</div>
      <div className='col-12 total'>Delivery Charges = Rs. 00</div>
      <div className='col-12 total'>Net Payable amount = Rs. {props.totalAmount}</div>
    </div>
  </div>
  );
}

export default OrderList;