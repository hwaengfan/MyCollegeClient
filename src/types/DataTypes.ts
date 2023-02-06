// user page
export interface LoginFormData {
  username: { value: string };
  password: { value: string };
}

export interface SignupFormData {
  username: { value: string };
  password: { value: string };
  firstName: { value: string };
  lastName: { value: string };
}

// profile component
export interface ProfileFormData {
  firstName: { value: string };
  lastName: { value: string };
  username: { value: string };
  currentPassword: { value: string };
  newPassword: { value: string };
  major?: { value: string };
  department?: { value: string };
}
