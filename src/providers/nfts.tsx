import React, { ReactNode } from 'react';
import { scrollTo } from 'src/helpers/scrollTo';

export type NftsState = {
  shrine: {
    isSelected: boolean;
  };
  hephaestus: {
    isSelected: boolean;
  };
  hermes: {
    isSelected: boolean;
  };
  pandora: {
    isSelected: boolean;
  };
};

type NftsContextType = {
  nftsState: NftsState;
  setNftSelected: (nftName: keyof NftsState, isSelected: boolean) => void;
  isNftSelected: (nftName: keyof NftsState) => boolean;
};

export const nftsDefaultState: NftsState = {
  shrine: {
    isSelected: false,
  },
  hephaestus: {
    isSelected: false,
  },
  hermes: {
    isSelected: false,
  },
  pandora: {
    isSelected: false,
  },
};

export const NftsContext = React.createContext<NftsContextType | undefined>(undefined);

type NftsProviderProps = {
  children: ReactNode;
};

export const NftsProvider: React.FC<NftsProviderProps> = ({ children }) => {
  const [nftsState, setNftsState] = React.useState<NftsState>(nftsDefaultState);

  const setNftSelected = (nftName: keyof NftsState, isSelected: boolean) => {
    if(isSelected) {
      console.log(nftName);
      scrollTo(nftName);
    }
    setNftsState((prevState) => ({
      ...prevState,
      [nftName]: {
        ...prevState[nftName],
        isSelected,
      },
    }));
  };

  const isNftSelected = (nftName: keyof NftsState): boolean => {
    return nftsState[nftName].isSelected;
  };

  const contextValue: NftsContextType = {
    nftsState,
    setNftSelected,
    isNftSelected,
  };

  return <NftsContext.Provider value={contextValue}>{children}</NftsContext.Provider>;
};

export function useNftsContext() {
  const context = React.useContext(NftsContext);
  if (!context) {
    throw new Error('useNftsContext must be used within a NftsProvider');
  }
  return context;
}
