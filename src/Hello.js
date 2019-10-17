import React, { memo } from 'react';
import { useCountRenders } from './useCountRenders';

// "memo" used to force component only re-render when increment changed
export const Hello = memo(({ increment }) => {
  useCountRenders();
  return <button onClick={increment}>hello</button>;
});
