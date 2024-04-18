import { useState } from "react"

const ProductList = 
  [
    {
      ID:111223,
      Name:'Mouse',
      Stock:5,
      Price:1500,
    },
    {
      ID:111224,
      Name:'Headphone',
      Stock:8,
      Price:2500,
    },
    {
      ID:111222,
      Name:'Keyboard',
      Stock:10,
      Price:2000,
    },
  ]

  // eslint-disable-next-line react/prop-types
  const  TableRow = ({ID,Name,Stock,Price,Quantity,Total,increment,decrement})=> {
    return(
      <tr>
      <td>{ID}</td>
      <td>{Name}</td>
      <td>{Stock}</td>
      <td>{Price}</td>
      <td>{Quantity}</td>
      <td>{Total}</td>
      <button disabled ={Quantity==Stock} onClick={()=>increment(ID)}>+</button>
      <button disabled = {Quantity==0} onClick={()=>decrement(ID)}>-</button>
    </tr>
    ) 
  }

const  App = ()=>{

  const [products,setProducts] = useState(ProductList.map((item)=>{
    return {
      ...item,
      Quantity:0,
      Total:0,
    }
  }));
  const increment = (id)=>
  {
    setProducts(products.map((product)=> {
      if(product.ID==id && product.Stock>product.Quantity)
      {
        product.Quantity++;
        product.Total = product.Quantity*product.Price;
      }
      return product;
    }));
  }
  const decrement =(id)=>
  {
    setProducts(products.map((product)=> {
      if(product.ID==id && product.Quantity>0)
      {
        product.Quantity--;
        product.Total = product.Quantity*product.Price;
      }
      return product;
    }));
  }
  const TotalCost = products.reduce((acc,curr)=> acc+curr.Total,0);
  return(
    <table>
      <h3>Product List</h3>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Stock</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
      {
        products.map((product)=>(
          <TableRow key={product.ID} {...product} decrement={decrement} increment ={increment}/>
        ))
      }
     {TotalCost>0&&<p>Total:{TotalCost} BDT</p>}
    </table>
    
  )
  
}
export default App;