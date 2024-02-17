import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Function to fetch data (example)
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  };

  // Memoized function to fetch data, preventing unnecessary re-renders
  const memoizedFetchData = useMemo(() => fetchData, []);

  // UseEffect hook to fetch data only once when component mounts
  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  return (
    <div>
      {data ? (
        <div>
          {/* Display fetched data */}
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
