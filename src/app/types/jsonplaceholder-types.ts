export interface JsonPlaceholderGeo {
  lat: string;
  lng: string;
}

export interface JsonPlaceholderAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JsonPlaceholderGeo;
}

export interface JsonPlaceholderCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface JsonPlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JsonPlaceholderAddress;
  phone: string;
  website: string;
  company: JsonPlaceholderCompany;
}

export type JsonPlaceholderUsersResponse = JsonPlaceholderUser[];
