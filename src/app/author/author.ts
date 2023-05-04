import { Book } from '../book/book';
class Author {
  id: number;
  name: string;
  birthDate: Date;
  image: string;
  description: string;

  constructor(
    id: number,
    name: string,
    birthDate: Date,
    image: string,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.image = image;
    this.description = description;
  }
}

export { Author };
