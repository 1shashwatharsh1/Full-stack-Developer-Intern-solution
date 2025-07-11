import React, { useEffect, useState } from 'react';
import { getStores } from '../../services/api';

function StoresList() {
  const [stores, setStores] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const token = localStorage.getItem('token')!;
        const data = await getStores(token);
        setStores(data);
      } catch {
        setError('Failed to load stores');
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h2>Stores</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {stores.map((store) => (
        <div key={store.id} style={{ border: '1px solid #ccc', padding: '8px', margin: '8px' }}>
          <h4>{store.name}</h4>
          <p>{store.address}</p>
          <p>Average Rating: {
            (store.ratings.length
              ? (store.ratings.reduce((acc: any, r: any) => acc + r.score, 0) / store.ratings.length).toFixed(2)
              : 'No ratings')
          }</p>
        </div>
      ))}
    </div>
  );
}

export default StoresList;
