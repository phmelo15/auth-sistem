import { User } from 'src/users/entities/User';

export type createUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dob: string;
};

export type UpdateUserProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dob: string;
};

export type FavoriteDetailsParams = {
  name: string;
  description: string;
  price: string;
  ingredients: string;
  preparationTime: number;
  image: string;
  type: string;
  available: boolean;
  isFavorite: boolean;
};

export type FavoriteDetailsUpdateParams = {
  name: string;
  description: string;
  price: string;
  ingredients: string;
  preparationTime: number;
  image: string;
  type: string;
  available: boolean;
  isFavorite: boolean;
};

export type CoffeDetailsParams = {
  name: string;
  description: string;
  price: string;
  ingredients: string;
  preparationTime: number;
  image: string;
  type: string;
  available: boolean;
  isFavorite: boolean;
};
