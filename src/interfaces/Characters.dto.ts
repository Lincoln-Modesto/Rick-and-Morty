export interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  origin: CharacterOrigin;
  created: string;
  episode: string[];
  gender: string
  id: number
  image: string;
  location: CharacterLocation;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}