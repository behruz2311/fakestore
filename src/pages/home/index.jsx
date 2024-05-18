import { useState, useEffect, useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { MainContext } from '@/context/useMainContext';
import { Header, Card } from '@/component';

function Home() {
  const [data, setData] = useState([]);
  const { cartItems } = useContext(MainContext);

  async function getData() {
    await fetch(`${import.meta.env.VITE_API_URL}products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-300 min-h-[100vh]">
      <Header />
      <div className="container">
        <div className="grid grid-cols-4 gap-8 ">
          {data.length ? (
            data?.map((el) => (
              <Card
                key={el.id}
                data={el}
                cart={cartItems.some((item) => item.id == el.id)}
              />
            ))
          ) : (
            <div className="flex items-start justify-between gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  height={510}
                  width={320}
                />
              ))}
            </div>
          )}

          <button>Language</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
