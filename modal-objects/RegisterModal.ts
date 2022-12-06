import { faker } from "@faker-js/faker";

export class RegisterModal {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  constructor(data: any = {}) {
    this.firstname = data.firstname || faker.name.firstName();
    this.lastname = data.lastname || faker.name.lastName();
    this.email = data.email || faker.internet.email();
    this.password = data.password || faker.internet.password();
  }
}
