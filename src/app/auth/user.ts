export interface User {
  username: string;
  roles: string[];
  lastLogin?: Date;

  // login state
  isLoggedIn?: boolean;
  redirectURL?: string;
}
