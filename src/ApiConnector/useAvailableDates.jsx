import { ApiLibraryContext } from './ApiLibraryContext';
import { useContext, useEffect, useState } from 'react';

const useAvailableDates = () => {
  const backend = useContext(ApiLibraryContext);

  const [ isLoading, setIsLoading ] = useState(true);
  const [ availableDates, setAvailableDates ] = useState([]);

  useEffect(() => {
    backend.httpLib('http://localhost:3000/availableDates').
      then(response => response.json()).
      then(givenDates => {
        setAvailableDates(givenDates);
        setIsLoading(false);
      });
  }, []);

  return [
    isLoading,
    availableDates
  ];
};

export {
  useAvailableDates
};
