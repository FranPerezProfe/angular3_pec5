export interface MtgcardApi {
  card: Card;
}

export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  type: string;
  types: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  layout: string;
  multiverseid: string;
  imageUrl: string;
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: Legality[];
  id: string;
}

export interface Legality {
  format: string;
  legality: string;
}
