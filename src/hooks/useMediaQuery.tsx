import React from 'react';

export default function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = React.useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  };
  
  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    }
  }, [query]);

  return matches;
};
