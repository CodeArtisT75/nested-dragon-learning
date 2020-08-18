export class UserDTO {
  constructor(
    public readonly name: string,
    public readonly username: string,
    public readonly password: string,
    public readonly token: string,
  ) {}
}
