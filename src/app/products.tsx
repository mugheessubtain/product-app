import { ProductItemType } from "./products_type";


export default function Products({id,name,price,category}:ProductItemType){

    return(
        <tr>
            <td style={{ border: "1px solid black", padding: "10px" }}>{id}</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>{name}</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>{price}</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>{category}</td>
        </tr>
    )
}