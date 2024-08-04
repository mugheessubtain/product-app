"use client"

import { useState } from "react";
import Categories from "./categories";
import AllProducts from "./allproducts";
import { ProductItemType } from "./products_type";
import UserInfo from "./user";

const products: ProductItemType[] = [
  { id: 1, name: "Toyota Corolla", price: 20000, category: "Cars" },
  { id: 2, name: "Audi A4", price: 39999, category: "Cars" },
  { id: 3, name: "Tesla Model S", price: 79999, category: "Cars" },
  { id: 4, name: "iPhone 14", price: 999, category: "Phones" },
  { id: 5, name: "Samsung Galaxy S23", price: 850, category: "Phones" },
  { id: 6, name: "Samsung Galaxy S23", price: 799, category: "Phones" },
  { id: 7, name: "Leather Jacket", price: 150, category: "Clothes" },
  { id: 8, name: "Levi's Jeans", price: 69, category: "Clothes" },
  { id: 9, name: "Nike Air Max", price: 129, category: "Clothes" },
  { id: 10, name: "MacBook Pro", price: 2500, category: "Computers" },
  { id: 11, name: "Gaming PC", price: 1800, category: "Computers" },
  { id: 12, name: "HP Spectre x360", price: 1499, category: "Computers" },
  { id: 13, name: "Rolex Submariner", price: 10000, category: "Watches" },
  { id: 14, name: "Tag Heuer Carrera", price: 3499, category: "Watches" },
  { id: 15, name: "Apple Watch", price: 400, category: "Watches" },
];

export default function Home() {
  const [category, setCategory] = useState(["All", "Cars", "Phones", "Clothes", "Computers", "Watches"])
  const [newProducts, setNewProducts] = useState(products)

  return (
    <div style={{  width: "70%",
      maxWidth: "1200px",
      backgroundColor: "#fff",
      padding: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
      borderRadius: "8px",
      margin:"auto"}}>
      <UserInfo

      />
      <Categories
        category={category}
        products={products}
        setNewProducts={setNewProducts} />
      <AllProducts
        products={newProducts} />
      </div >

      )
}