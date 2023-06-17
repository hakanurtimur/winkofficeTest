import UserModel from "@/models/userModel";
import { UserCredential } from "@firebase/auth";

interface AuthContextModel {
  user: UserModel | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

export default AuthContextModel;
