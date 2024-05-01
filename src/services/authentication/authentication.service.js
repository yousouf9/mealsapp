import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
} from "firebase/auth";
export const loginRequest = async (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const forgotPasswordRequest = async (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const verifyResetCodeRequest = async (code) => {
  const auth = getAuth();
  return verifyPasswordResetCode(auth, code);
};

export const sendEmailVerificationRequest = async (user) => {
  return sendEmailVerification(user, {});
};

export const passwordResetEmailRequest = async (email) => {
  const auth = getAuth();
  return sendPasswordResetEmail(auth, email, {});
};

export const updatePasswordRequest = async (user, newPassword) => {
  return updatePassword(user, newPassword);
};

export const logoutRequest = async () => {
  const auth = getAuth();
  return signOut(auth);
};
