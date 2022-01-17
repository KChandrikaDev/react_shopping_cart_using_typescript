import React from 'react'
import { ProductItemType } from '../types/cartItem.types';
import {db} from '../../firebase'
import { collection,getDocs } from "firebase/firestore";
function useProducts() {
    const [productData, setproductData] = React.useState<ProductItemType[]>();
    
  const productsCollection = collection(db, "products");
    React.useEffect(() => {
        const example = async () => {
          const userQuery = await getDocs(productsCollection );
          console.log("userQuery", userQuery);
          const products = userQuery.docs.map((x) => ({
            ...(x.data() as ProductItemType),
            id: x.id,
          }));
          console.log("products", products);
          setproductData(products);
        };
        example();
        console.log("productData", productData);
      }, []);
      
    return [{productData}]
}

export default useProducts
