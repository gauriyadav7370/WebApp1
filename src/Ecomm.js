
import { useState, useEffect} from 'react';

import './App.css';

import Home from './Home';
import NavBar from './navbar';
import Cart from './components/Cart';
import OrderList from './components/OrderList';



function Ecomm()
{
//   useEffect(() => {
//     window.scroll(0, 0);
//     getDataFromLocalStorage(products);
//     updateLocalStorage(products);

//   }, []);
// function getDataFromLocalStorage(products)
// {
//   let Products=[];
  

//   if(localStorage.getItem("Products") == null)
//   {
//     localStorage.setItem("Products", JSON.stringify(Products));  
//   }
//   else
//   {
//     // updateLocalStorage(pList);
//     let localStorageList=JSON.parse(localStorage.getItem("Products"));
//         // console.log(typeof localStorageList)
//         let pList=[...products]
//         localStorageList.forEach((data, index)=>
//         {
//         pList.forEach((p, i)=>
//         {
//           if(data.name==p.name)
//           {
//             p.qty=data.qty; 
//           }
//         }
//         );
        
//         //console.log(Products)
        
//         })
//         products=[...pList];
//   }//else
//   //updateLocalStorage(products);
// }
// function updateLocalStorage(products)
// {
//     let orderlist=[];//JSON.parse(localStorage.getItem("Products"));
//     //console.log(typeof orderlist)
//     products.forEach((data, index)=>
//     {
//       if(data.qty>=1)
//       {
//         orderlist.push(data);
//         //console.log("..........");
//       }
      
//     })
//     localStorage.setItem("Products", JSON.stringify(orderlist))
    
// }
  let products= [{
    name: "Grapes",
    image: "grapes.jpg",
    unit: "kg",
    mrp: 120,
    discount: 10,
    instock: true,
    qty: 0,
  },
  {
    name: "Mango",
    image: "mango.jpg",
    unit: "doz",
    mrp: 500,
    discount: 8,
    instock: true,
    qty: 0,
  },
  {
    name: "Banana",
    image: "banana.jpg",
    unit: "doz",
    mrp: 60,
    discount: 0,
    instock: true,
    qty: 0,
  },
  {
    name: "Apple",
    image: "apple.jpg",
    unit: "kg",
    mrp: 180,
    discount: 7,
    instock: true,
    qty: 0,
  },
  {
    name: "anjeer",
    image: "anjeer.jpg",
    unit: "kg",
    mrp: 100,
    discount: 0,
    instock: true,
    qty: 0,
  },
  {
    name: "Strawberry",
    image: "strawberry.jpg",
    unit: "kg",
    mrp: 200,
    discount: 20,
    instock: true,
    qty: 0,
  },
  {
    name: "Papaya",
    image: "papaya.jpg",
    unit: "kg",
    mrp: 50,
    discount: 15,
    instock: true,
    qty: 0,
  },
  {
    name: "Cherry",
    image: "cherry.jpg",
    unit: "kg",
    mrp: 300,
    discount: 5,
    instock: true,
    qty: 0,
  },
  {
    name: "Chikoo",
    image: "chikoo.jpg",
    unit: "kg",
    mrp: 60,
    discount: 5,
    instock: true,
    qty: 0,
  },
  {
    name: "Kiwi",
    image: "kiwi.jpg",
    unit: "piece",
    mrp: 20,
    discount: 0,
    instock: true,
    qty: 0,
  },
  {
    name: "Orange",
    image: "orange.jpg",
    unit: "kg",
    mrp: 200,
    discount: 10,
    instock: true,
    qty: 0,
  },
  {
    name: "Pear",
    image: "pear.jpg",
    unit: "kg",
    mrp: 200,
    discount: 7,
    instock: true,
    qty: 0,
  },
  {
    name: "Pineapple",
    image: "pineapple.jpg",
    unit: "piece",
    mrp: 100,
    discount: 50,
    instock: true,
    qty: 0,
  },
  {
    name: "Pomegranete",
    image: "pomegranete.jpg",
    unit: "kg",
    mrp: 200,
    discount: 5,
    instock: true,
    qty: 0,
  },
  {
    name: "Sitaphal",
    image: "sitaphal.jpg",
    unit: "kg",
    mrp: 100,
    discount: 10,
    instock: true,
    qty: 0,
  },
  {
    name: "Watermelon",
    image: "watermelon.jpg",
    unit: "kg",
    mrp: 80,
    discount: 50,
    instock: true,
    qty: 0,
  },
  {
    name: "Sweetlime",
    image: "sweetlime.jpg",
    unit: "kg",
    mrp: 200,
    discount: 5,
    instock: true,
    qty: 0,
  },
  {
    name: "Peach",
    image: "peach.jpg",
    unit: "kg",
    mrp: 200,
    discount: 10,
    instock: true,
    qty: 0,
  },
  {
    name: "Dragon Fruit",
    image: "dragon.jpg",
    unit: "piece",
    mrp: 70,
    discount: 10,
    instock: true,
    qty: 0,
  }, 
];

let [productList, setProductList]=useState(products);
let [filterProductList, setfilterProductList]=useState(products);
let [orderProductList, setOrderProductList]=useState(products);
let [view, setView]=useState("home");
let [totalAmount,setTotalAmount]=useState(0);



function handleAddToCartClick(product)
  {
    let pList=productList.map((data, index)=>
        {
        if(data.name==product.name)
            data.qty+=1    
            return data;
        })
          calTotalAmount();
          setProductList(pList);
          //updateLocalStorage(pList);
        
  }
  function calTotalAmount()
  {
    let tAmount=0;
    for (let i = 0; i < productList.length; i++) {
      const data = productList[i];
      if(data.qty!=0)
        tAmount+=data.qty*(data.mrp-(data.mrp*data.discount)/100);
      }//for
    setTotalAmount(tAmount);

  }
  function handleAddRemove(product,n)
  {
    let pList=productList.map((data, index)=>
        {
          
          if(data.name==product.name)
          {
            data.qty+=n  
          }
            return data;
        }
    )
    calTotalAmount();
    setProductList(pList);
    //updateLocalStorage(pList);
    

  } 
  function handleOnClickCart()
  {
    setView("cart");
    let filterList= productList.filter((data, index)=>
    {
      
      if(data.qty>=1)
      return data;
    }

    )
    setfilterProductList(filterList);

  }
  function handleOnClickDelete()
  {
    setView("home");
    let pList=productList.map((data, index)=>
        {
            data.qty=0     
            return data;
        })
        calTotalAmount();
        setProductList(pList);
  }
  function handleOnClickBackToShopping()
  {
    setView("home");
  }
  function handleOnClickPlaceOrder()
  {
    setView("OrderList")
    let orderProductList= productList.filter((data, index)=>
    {
      
      if(data.qty>=1)
      return data;
    }

    )
    setOrderProductList(orderProductList);
  }
  // function handleOnClickWhatsapp()
  // {
  //   var phoneNumber = '+919975002827';
  //   var message ='hello!'; 
  //   var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
            
  //   window.open(whatsappUrl, '_blank');
  // }
 
  return (
  <>
  {view=="form"&&<form
  />}
  <NavBar totalAmount={(totalAmount).toFixed(2)}
  onClickCart={handleOnClickCart}
  onClickBackToShopping={handleOnClickBackToShopping}
  onClickPlaceOrder={handleOnClickPlaceOrder}
  //onClickWhatsapp={handleOnClickWhatsapp}
  
  view={(view)}
  />
  {view=="home"&&<Home
  productList={productList}
  onAddToCartClick={handleAddToCartClick}
  onAddRemove={handleAddRemove}/>}
  {view=="cart"&&<Cart
  filterProductList={filterProductList}
  onAddRemove={handleAddRemove}
  onClickDelete={handleOnClickDelete}/>}
  {view=="OrderList"&&<OrderList
  orderProductList={orderProductList}
  totalAmount={(totalAmount).toFixed(2)}/>}
    
  </>
  );
  
}

export default Ecomm;
