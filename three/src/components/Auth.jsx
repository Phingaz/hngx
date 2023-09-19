import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./FireBase";

const signIn = async (email, password) => {
  try {
    const signIn = await signInWithEmailAndPassword(auth, email, password);
    const user = signIn.user;
    return user;
  } catch (err) {
    console.error(err);
  }
};

const createUser = async (email, password) => {
  const [error, setError] = useState({});
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    // if(!create) throw new Error('Error creating user');
    // const user = create.user;
    // console.log(user);
    // return user;
  } catch (err) {
    throw new Error(err);
  }
};

const logOut = async (email, password) => {
  try {
    const signout = await signOut(auth);
    return signout;
  } catch (err) {
    console.error(err);
  }
};

export { signIn, logOut, createUser };
