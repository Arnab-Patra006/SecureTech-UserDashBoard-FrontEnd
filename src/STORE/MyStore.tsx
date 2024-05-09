import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MyUser } from "../Apis/userInterface";

export type UserTypes = {
  users: MyUser[];
};

type States = {
  allUser: MyUser[];
  currentUser: MyUser | null;
  currRole: string;
  currToken: string;
};

type Actions = {
  setAllUser: (users: MyUser[]) => void;
  setCurrentUser: (user: MyUser) => void;
  setCurrRole: (role: string) => void;
  setCurrToken(token: string): void;
};

// @ts-ignore
const useStore = create<States & Actions>()(
  persist(
    (set) => ({
      allUser: [],
      currentUser: null,
      currRole: "",
      currToken: "",
      setAllUser: (users) => set({ allUser: users }),
      setCurrentUser: (user) => set({ currentUser: user }),
      setCurrRole: (role) => set({ currRole: role }),
      setCurrToken: (token) => set({ currToken: token }),
    }),
    {
      name: "zustand-example", // The name to use for storing the data in localStorage
      getStorage: () => localStorage, // Use localStorage for persistence
    }
  )
);

export default useStore;
