import React from 'react';

function FilterProduct(props)
{
  let {fProduct}= props;

  let quntity = fProduct.qty;
  function handleAddRemove(n)
  {
    props.onAddRemove(fProduct,n)
    
  }
  
  return(
  
      <div>
        
        {fProduct.qty!=0&& <div className="row my-3" >
          <div className='col-4'>{fProduct.name}</div>
          <div className='col-4 borHei'>{fProduct.qty!=0&&<div>
              <button  className='greenminus btn col-lg-2 col-1' onClick={() => handleAddRemove(-1)}>-</button>
              {"    "+quntity +"    "+fProduct.unit+"    "}
              <button  className='greenpluse btn col-lg-2 col-1' onClick={()=> handleAddRemove(1)}>+</button>
            </div>}
          </div>
          <div className='col-4'>{(fProduct.qty*(fProduct.mrp-(fProduct.mrp*fProduct.discount)/100)).toFixed(2)}</div>
        </div>}
      </div>
    
  );
}

export default FilterProduct;