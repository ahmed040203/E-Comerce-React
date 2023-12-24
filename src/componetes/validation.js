import { fakeUserData } from './Signup';
import { isEmailUnique } from './Signup';

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/;
    const isUnique = isEmailUnique(email, fakeUserData);
    return emailRegex.test(email) && isUnique;
  };

  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    return passwordRegex.test(password);
  };
  