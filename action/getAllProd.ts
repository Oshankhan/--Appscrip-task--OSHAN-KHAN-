import ProductInterface from "@/interface/product";

export  const   getAllproduct= async()=>{
    
  const response = await fetch("https://dummyjson.com/products");
  const {products}:ProductInterface  = await response.json();
  if (!products) {
    throw new Error("Prod not found");
    
  }
    return products
  
}