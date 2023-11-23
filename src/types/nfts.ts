export type GenesisCard = {
  price: number;
  header: string;
  description: string;
  to: string;
  variant: 'destiny' | 'triumph' | 'dominion' | 'master';
};

export type NftCard = {
  header: string;
  description: string;
  to: string;
  variant: 'shrine' | 'hermes' | 'hephaestus' | 'pandora';
};
