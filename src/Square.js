import React, { memo } from 'react';
import { useCountRenders } from './useCountRenders';

export const Square = memo(({ n, onClick }) => {
  useCountRenders();
  return <button onClick={onClick}>{n} </button>;
});
