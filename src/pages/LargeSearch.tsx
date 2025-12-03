import {
  useState,
  useEffect,
  useId,
  useMemo,
  memo,
  //  useCallback
} from 'react';
import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';

interface Products {
  id: number;
  uuid: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}

export default function LargeSearch() {
  const [products, setProducts] = useState<Products[]>([]);
  const [productName, setProductname] = useState('');
  const [debouncedFilterName, setDebouncedFilterName] = useState('');
  const [filterTags, setFilterTags] = useState('');
  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');

  const cleanFetch = useFetch(`/api/get-products`, {}, (res: unknown) => {
    setProducts(res as Products[]);
  });

  const debounceIncomingText = useDebounce((v: string) => setDebouncedFilterName(v), 500);

  useEffect(() => {
    const productData = async () => {
      await cleanFetch();
    };
    console.log('useEffect');
    productData();
  }, [cleanFetch]);

  useEffect(() => {
    debounceIncomingText(productName);
  }, [productName, debounceIncomingText]);

  const productsInView = useMemo(() => {
    const filteredByName = debouncedFilterName
      ? products.filter(({ title }) => title.toLowerCase().includes(debouncedFilterName.toLowerCase()))
      : products;
    return filterTags ? filteredByName.filter(({ tags }) => tags.includes(filterTags)) : filteredByName;
  }, [products, debouncedFilterName, filterTags]);

  const tags = useMemo(() => [...new Set(products.flatMap(({ tags }) => tags).sort())], [products]);

  return (
    <div>
      <div className="flex items-baseline gap-4">
        <h1>Products</h1>
        <p>results ({productsInView.length})</p>
      </div>
      <div className="my-10">
        <h4 className="text-2xl">Filter</h4>
        <div className="flex mt-5 gap-x-4">
          <Filter label="Name" value={productName} setValue={setProductname} />
          {/* <Filter label="Name" value={productName} setValue={setProductname} /> */}
          <div className="flex gap-2 items-end">
            <div>
              <div className="pl-2">
                <label>Tag</label>
              </div>
              <select className="border rounded-4xl px-4 py-2.5" onChange={(e) => setFilterTags(e.target.value)}>
                {tags.map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={() => setFilterTags('')}>X</button>
          </div>
        </div>
      </div>
      {productsInView.length > 0 ? (
        <div className="grid grid-cols-3 gap-10 mt-20">
          {productsInView.map((product) => (
            <Card key={product.uuid} {...product} />
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-xl"> No Results</h3>
        </div>
      )}
    </div>
  );
}

const Filter = function ({ label, value, setValue }: { label: string; value: string; setValue: (v: string) => void }) {
  const inputId = useId();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div>
      <div className="pl-2">
        <label htmlFor={inputId}>{label}</label>
      </div>
      <input className="border rounded-4xl px-4 py-2" value={value} onChange={onChange} id={inputId} />
    </div>
  );
};

const Card = memo(function ({
  title,
  description,
  tags,
  image,
  price,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  price: number;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 p-4 border rounded-xl bg-gray-600">
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-4xl">{title}</h2>
        <img src={image} alt="" className="rounded-xl" />
        <p>{description}</p>
        <div className="flex gap-x-4 ml-4 flex-wrap">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
      <p>{price}</p>
    </div>
  );
});
