export interface Login {
  username: string;
  password: string;
}

export interface SignIn extends Login {
  name: string;
  lastname: string;
}