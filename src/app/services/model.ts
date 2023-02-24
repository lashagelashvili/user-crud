export interface User {
  id: number;
  emai: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Adress;
  company: Company;
}

interface Adress {
  city: string;
  geo: {
    lat: string;
    lng: string;
  };
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface UserPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
