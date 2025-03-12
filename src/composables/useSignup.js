import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const signUp = async (email, password,displayName) => {
    error.value = null;

    try {
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if(!response){
            throw new Error('Could not complete the signup');
        }

        //update display name on firebase
        await response.user.updateProfile({displayName});
        error.value = null;
        return response;
    } catch (err) {
        error.value = err.message;
    }
};

const useSignup = () => {   
    return {error, signUp}
}

export default useSignup;