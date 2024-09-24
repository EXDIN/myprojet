import { ReactNode } from "react";

export type UserDataToLog = {
  email: string,
  password: string
}

export type UserData = {
  name: string,
  age: string,
  email: string,
  password: string
}

export interface IMyComponentProps {
  children: ReactNode;
}

export type typeUserData = {
  name: string,
  isAuth: boolean,
}

export type TypeUserContext = {
  user: typeUserData
  updateUser: (newUser: {isAuth: boolean, name: string}) => void,
}

export type TypeBodyArticles = {
  id: number
  title: string
  body: string
  author: string
  date: string
}