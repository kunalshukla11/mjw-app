export type NavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
