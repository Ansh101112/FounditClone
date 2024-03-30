// authUtils.js

import { auth } from './FirebaseConfig'; // Importing auth from FirebaseConfig

export const isLoggedIn = () => {
  const user = auth.currentUser;
  return !!user; // Returns true if user is logged in, false otherwise
};
