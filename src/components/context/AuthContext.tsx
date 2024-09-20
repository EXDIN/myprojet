import { createContext, ReactNode, useState } from 'react';


interface IMyComponentProps {
  children: ReactNode;
}

export type TypeUserContext = {
  user: {
    name: string,
    isAuth: boolean,
  },
  updateUser: (newUser: {isAuth: boolean, name: string}) => void,
}

export const UserDataContext = createContext<TypeUserContext>({
  user: {
    name: "",
    isAuth: false
  },
  updateUser: () => {}
});

export const AppProvider: React.FC<IMyComponentProps> = ({ children }) => {
  const [user, setUser] = useState({name: "", isAuth: false});

  const updateUser = (newUser:  {isAuth: boolean, name: string}) => {
    setUser(newUser);
  };

  return (
    <UserDataContext.Provider value={{ user, updateUser }}>
      {children}
    </UserDataContext.Provider>
  );
};