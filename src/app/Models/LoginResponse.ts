import { Employed } from "./Employed";

export interface LoginResponse   {
    token: string;
    user: Employed
  }