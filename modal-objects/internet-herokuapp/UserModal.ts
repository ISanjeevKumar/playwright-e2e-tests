export class UserModal {
  username: string;
  password: string;
  constructor(data: any) {
    this.username = data.username;
    this.password = data.password;
  }
}
