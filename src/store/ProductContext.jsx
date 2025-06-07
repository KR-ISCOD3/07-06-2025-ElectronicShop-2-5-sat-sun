import axios from "axios";
import { createContext, useEffect, useState } from "react";
const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [isloading,setisLoading] = useState(false);

    const FetchApi = async () =>{

        try{
            setisLoading(true);
            const res = await axios.get("https://product-server-json.onrender.com/products");
            setProducts(res.data);

        }catch(e){

        }finally{
            setisLoading(false);
        }

    }

    useEffect(()=>{
        FetchApi();
    },[]);

    return(
        <ProductContext.Provider value={{products,isloading}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductContext;