
"use client"

import { ProductItemType } from "./products_type";

// type ProductsType={
//     productItem:ProductItemType[]
// }
// type CategoriesType={
//     category:string[];
//     products:ProductsType;
//     setNewProducts:(selectedProducts:ProductItemType[])=> void
// }
type SetFilteredProductsType =(products: ProductItemType[]) => void;

type CategoryType = {
    category: string[]
    setNewProducts: SetFilteredProductsType
    products: ProductItemType[]
}
export default function Categories({ category, products, setNewProducts }:CategoryType) {

    const selectCategorys = (categoryName:string) => {
        if (categoryName === "All") {
            setNewProducts(products)
        }
        else {
            const selectedProducts = products.filter(product => product.category === categoryName)
            setNewProducts(selectedProducts)
        }
    }
    return (
        <>
           
            <br /><br />
            <div style={{
                display:"flex",
                justifyContent:"center",
                backgroundColor:"black"
            }}>

                {
                    category.map((items, i) => (
                        <button onClick={() => (selectCategorys(items))}
                            key={items + i}
                            style={{
                                color: "white",
                                backgroundColor: "black",
                                margin: "10px",
                                borderRadius: "10px",
                                padding: "10px",
                                border:"1px solid yellow"
                            }}>
                            {items}
                        </button>
                    ))
                }
            </div>
            <div>
                <br /><br /><br />
            </div>
        </>
    )
}