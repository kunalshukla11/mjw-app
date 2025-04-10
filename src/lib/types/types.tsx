export type NavItem = {
  title: string;
  path: string;
  icon?: React.JSX.Element;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type ApplicationContext = {
  isAuthenticated: boolean;
  currentUser: {
    email: string;
    firstName: string;
    initial: string;
  } | null;
  setAuthenticated: (authenticated: boolean) => void;
  setUser: (user: ProfileResponse | null) => void;
};
export type ProfileResponse = {
  email: string;
  firstName: string;
  initial: string;
};
export type RegisterLoginResponse = {
  userId: number;
  message: string;
  successFailure: 'SUCCESS' | 'FAILURE';
};

export type LoginRegisterActionResponse = {
  success: boolean;
  message: string;
  profile: ProfileResponse | undefined;
};
