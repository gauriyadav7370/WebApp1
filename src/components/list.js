import React from 'react';

function List(props)
{
   let {LProduct}= props;

  return(
  
      <div>
        
         <div className="row" >
          <div className='col-3 listTextHead borderRight'>{LProduct.name}</div>
          <div className='col-3 listTextHead borderRight'>{(LProduct.mrp-(LProduct.mrp*LProduct.discount)/100)}</div>
          <div className='col-4 listTextHead borderRight'>{LProduct.qty}{"    "}{LProduct.unit}</div>
          <div className='col-2 listTextHeadTotal '>{(LProduct.qty*(LProduct.mrp-(LProduct.mrp*LProduct.discount)/100)).toFixed(2)}</div>
        </div>
      </div>
    
  );
}

export default List;