export class RegisterModal {
  username: string;
  password: string;
  email: string;
  constructor(data: any) {
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
  }
}
