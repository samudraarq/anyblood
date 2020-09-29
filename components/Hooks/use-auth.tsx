import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../../config/fbConfig";

const authContext = createContext<Partial<AuthInterface>>({});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

interface AuthInterface {
  user: any;
  signin: (email: string, password: string) => Promise<firebase.User>;
  signup: (email: string, password: string) => Promise<firebase.User>;
  signout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<boolean>;
  confirmPasswordReset: (code: string, password: string) => Promise<boolean>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      setUser(response.user);
      return response.user;
    });
  };

  const signup = (email: string, password: string) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = (email: string) => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code: string, password: string) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
