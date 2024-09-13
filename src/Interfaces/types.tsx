
export interface SignInPayload {
  email: string;
  mobileNumber: string;
  password: string;
}

export interface UserDetails {
  uid: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  role: string;
  token: string;
}

export interface SignUpUserDetails {

  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  role: string;
}

export interface SignUpPayload {
  username: string
  firstName: string;
  middleName?: string;
  lastName: string;
  password : string
}

export interface UserContextType {
  user: UserDetails | null;
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>;
}

export interface changePasswordPayload {
  username : string;
  password : string;
}

export type Success = string;