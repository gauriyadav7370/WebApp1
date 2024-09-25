import { useState } from 'react';
import React from 'react';
import FilterProduct from './filterProduct';


function Cart(props)
{
  let {filterProductList} = props;

  function handleAddRemove(product,n)
  {
    props.onAddRemove(product,n)
  }
  function handleOnClickDelete()
{
  props.onClickDelete()
}
  return(
      <div className="container ">
          
          <div className='OrderedFruitsList'>Ordered Fruits List</div> 
          <div><button onClick={handleOnClickDelete} className='but deleteAllListBut'>Delete ALL Ordered List</button></div>
          
          <div className='row'>
            {filterProductList.map((p, index)=>
            <FilterProduct
            fProduct={p}
            key={index}
            onAddRemove={handleAddRemove}
          
            />
            )}
          </div>
      </div>
  );
}
 




export default Cart;