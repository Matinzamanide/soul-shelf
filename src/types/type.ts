export interface IBook {
  id: number;
  title: string;
  author: string;
  moodTags: string[];
  extract: string;
  color_code:string;
  parallels:string[];
  description: string;
  cover: string;
}
export interface Country {
  name: string
  capital: string
  iso_code: string
  flag_url: string
  description: string
  currency_unit: string
  religion: string
  official_language: string
  color_codes: string[]
  common_books: CommonBook[]
}

export interface CommonBook {
  title: string
  image_url: string
  author: string
  genre: string
}
export interface BestSeller {
  id: number
  title: string
  home_cover: string
  main_cover: string
  author: string
  suggest_book: SuggestBook[]
}

export interface SuggestBook {
  title: string
  author: string
  description: string
  extract: string
  parallels: string[]
  color_code: string
  moodTags: string[]
  cover: string
}
