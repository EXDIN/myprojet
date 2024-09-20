import { createContext, ReactNode, useState } from 'react';


const userData = {
  isAuthenticated: false,
  name: "",
  async setName(value: string) {
    this.name = value
  },
  async setAuth(value: boolean) {
    this.isAuthenticated = value
  },
}

export type TypeUserData = {
  isAuthenticated: boolean,
  name: string,
  setName: (value: string) => void,
  setAuth: (value: boolean) => void,
}

// interface IMyComponentProps {
//   children: ReactNode;
// }

export const UserDataContext = createContext<TypeUserData>(userData);

// export const AppProvider: React.FC<IMyComponentProps> = ({ children }) => {
//   const [user, setUser] = useState(userData);

//   const updateUser = (newUser:  {isAuthenticated: boolean, name: string}) => {
//     setUser();
//   };

//   return (
//     <UserDataContext.Provider value={{ user, updateUser }}>
//       {children}
//     </UserDataContext.Provider>
//   );
// };

// Створюємо контекст

export default userData;