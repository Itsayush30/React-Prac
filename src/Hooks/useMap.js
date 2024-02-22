import { useState, useEffect } from 'react';

const useMap = (array, callback) => {
  const [mappedArray, setMappedArray] = useState([]);

  useEffect(() => {
    setMappedArray(array.map(callback));
  }, [array, callback]);

  return mappedArray;
};

export default useMap;
