import React from 'react';

const useIsomphoricLayoutEffect = 
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default useIsomphoricLayoutEffect;
