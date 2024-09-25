import './App.css';


function NavBar(props)
{
  function handleOnClickCart()
{
  props.onClickCart()
}
  function handleOnClickBackToShopping()
{
  props.onClickBackToShopping()
}
  function handleOnClickPlaceOrder()
{
  props.onClickPlaceOrder()
}

//   function handleOnClickWhatsapp()
// {
//   props.onClickWhatsapp()
// }
return (
   
      <div className="container text-center">
      <div class="row">
        <div className="col-lg-12 col-12 bg-light navBtn">
          {props.view!="home"&&<button className='btn backToShoppingBtn ' onClick={handleOnClickBackToShopping}>Back To Shopping</button>}
          {props.view=="OrderList"&&<button className='btn whatsAppBtn'>Open Whats App To Forward List</button>}
          {props.view!="home"&&props.view!="OrderList"&&<button className='btn backToShoppingBtn' onClick={handleOnClickPlaceOrder}>Place Order</button>}
          {props.view!="OrderList"&&<button className='btn cartBtn' onClick={handleOnClickCart}>CART</button>}
        </div>
      </div>
      {props.view!="OrderList"&&<div className='col-lg-12 col-12 ammount'>{"Rs. "+props.totalAmount}</div>}
      </div>
      
  );
}

export default NavBar;
