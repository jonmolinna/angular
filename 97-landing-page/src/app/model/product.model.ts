export interface productInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: categoryInterface;
  image: string;
  rating: ratingInterface;
}

export enum categoryInterface {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface ratingInterface {
  rate: number;
  count: number;
}
