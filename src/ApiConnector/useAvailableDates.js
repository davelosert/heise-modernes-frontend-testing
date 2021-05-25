import { ApiContext } from './ApiContext';
import { useContext, useEffect, useState } from 'react';

const useAvailableDates = () => {
  const { api } = useContext(ApiContext);

  const [ isLoading, setIsLoading ] = useState(true);
  const [ availableDates, setAvailableDates ] = useState([]);

  useEffect(() => {
    api.loadAvailableDates().
      then(givenDates => {
        setAvailableDates(givenDates);
        setIsLoading(false);
      }).catch(ex => {
        // eslint-disable-next-line no-console
        console.error(ex);
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
