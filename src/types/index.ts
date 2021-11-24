/** @format */

export interface ResultInterface {
  name: string;
  url: string;
  index: string;
}

interface statInterface {
  stat: {
    name: string;
    base_start: number;
    effort: number;
  };
}

export interface pokeDataInterface {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        [key: string]: string;
      };
    };
  };
  height: number;
  weight: number;
  base_experience: number;
  stats: statInterface[];
}
