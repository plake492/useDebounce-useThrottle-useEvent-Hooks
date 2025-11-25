import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Products {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export default function LargeSearch() {
  const [products, setProducts] = useState<Products[]>([]);
  const cleanFetch = useFetch('/api/get-products', { method: 'get' }, (res: unknown) => setProducts(res as Products[]));

  useEffect(() => {
    const productData = async () => {
      await cleanFetch();
    };
    productData();
  }, [cleanFetch]);

  console.log('products ==>', products);

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {products.map(({ id, title, description, tags, image, price }) => (
          <div key={id} className="mb-10 flex flex-col gap-3 p-4 border rounded-xl">
            <div className="flex-1">
              <h2 className="text-4xl">{title}</h2>
              <img src={image} alt="" />
              <p>{description}</p>
              <div className="flex gap-x-4 ml-4 flex-wrap">
                {tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
            <p>{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
