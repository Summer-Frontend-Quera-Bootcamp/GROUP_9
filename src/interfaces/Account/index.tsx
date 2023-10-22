export interface Account {
  id?: number;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  thumbnail?: string;
}

export interface ChangePassword {
  old_password?: string;
  new_password?: string;
  new_password1?: string;
}

export interface ForgetPassword {
  token?: string;
  password?: string;
  password1?: string;
}

export interface Setting {
  id?: number;
  theme?: string;
}
