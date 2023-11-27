import {auth, provider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

export const Login = () => {

   const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    
   }

    return (
        <div>
          <p>Sign In With Google To Continue</p>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}