import Product from './components/Product';
function Home(props)
{
let {productList}=props;
  function handleAddToCartClick(product)
  {
    props.onAddToCartClick(product);
  }
  function handleAddRemove(product,n)
  {
    props.onAddRemove(product,n)
  }
  
  
  return (
      <div className="container ">
      
        <div className="row">
          
          {productList.map((product, index)=>(
          <Product
          key={index}
          product={product}
          onAddToCartClick={handleAddToCartClick}
          onAddRemove={handleAddRemove}
          />
          ))}
        </div>
      </div>
  );
}
export default Home;
