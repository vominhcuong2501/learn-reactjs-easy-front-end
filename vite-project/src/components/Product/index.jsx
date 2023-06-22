import { useEffect, useState } from 'react';
import productApi from '../../api/productApi';

export default function Product() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const products = await productApi.getAll(params);
      setProductList(products);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      {productList.map((pro) => {
        return (
          <ul key={pro.id}>
            <li>
              {pro.id}. {pro.name}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
