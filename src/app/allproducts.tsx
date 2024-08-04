import { table } from "console";
import Products from "./products";
import { ProductItemType } from "./products_type";


type ProductListType = {
    products: ProductItemType[];
}


export default function AllProducts({ products }:ProductListType) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            
            <table style={{borderCollapse: "collapse"}}>
                <thead >
                    <tr>
                        <th style={{
                            border: "1px solid black", padding: "10px",
                            backgroundColor:"black",
                            color:"yellow"
                            
                        }}>ID</th>
                        <th style={{
                            border: "1px solid black", padding: "10px",
                            backgroundColor:"black",
                            color:"yellow"
                            
                        }}>Name of Product</th>
                        <th style={{
                            border: "1px solid black", padding: "10px",
                            backgroundColor:"black",
                            color:"yellow"
                           
                        }}>Price</th>
                        <th style={{
                            border: "1px solid black", padding: "10px",
                            backgroundColor:"black",
                            color:"yellow"
                           
                        }}>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({ id, name, price, category }) => (<Products
                            id={id}
                            name={name}
                            price={price}
                            category={category}
                            key={name+id} />))
                    }
                </tbody>
            </table>
        </div>



    )
}