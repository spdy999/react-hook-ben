import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setTimeout(() => {
          setState({ data: y, loading: false });
        }, 2000);
      });
  }, [url]);
  return state;
};
