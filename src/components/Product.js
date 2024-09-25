import React from 'react';

function Product(props)
{
  let {product}=props;
product.finalPrice=product.mrp-(product.mrp*product.discount)/100

let quntity = product.qty;
function handleAddToCartClick()
{
  props.onAddToCartClick(product)
  
}
function handleAddRemove(n)
{
  props.onAddRemove(product,n)
  
}

  return(
        <div className="col-lg-3 col-6 my-3" >
          

          <div className='row '>
            {product.discount!=0 && product.discount!=50 &&( <div className="col-12 text-red">Get {product.discount}% OFF</div>)}
            {product.discount==0 &&( <div className="col-12 text-red">&nbsp;</div>)}
            {product.discount==50 &&( <div className="col-12 text-red">Buy 1 Get 1 FREE</div>)}
            <div className="col-12">
              <img src={"/images/"+product.image} alt=""/>
            </div>
            <div className="col-12">{product.name}</div>
            <div className="col-12">
              Per {product.unit}: Rs. {product.discount!=0 && product.discount!=50 &&<span className="text-stricked">{product.mrp.toFixed(2)}</span>}
              {" "}
              {product.discount!=0 &&  product.discount!=50 &&    <span className="text-red">{product.finalPrice.toFixed(2)}</span>}
              {product.discount==0 &&  product.discount!=50 &&   <span className="text-red">{product.finalPrice.toFixed(2)}</span>}
              {product.discount==50 && <span className="text-red">{product.mrp.toFixed(2)}</span>}
            </div>
            {product.qty==0&&<div>
              <button onClick={handleAddToCartClick} className={"btn "+ (product.instock?"btn-with-light-bg": "btn-gray")}>{product.instock? "Add To Cart":"Out Of Stock"}</button>
            </div>}
            <div>
            {product.qty!=0&&<div className='borHei'>
              <button  className='greenminus btn col-lg-2 col-1 ml' onClick={() => handleAddRemove(-1)}>-</button>
              {"  "+quntity +"  "+product.unit+"  "}
              <button  className='greenpluse btn col-lg-2 col-1 mr' onClick={()=> handleAddRemove(1)}>+</button>
            </div>}
            </div>
          </div>
        </div>
      
  );
}
export default Product;