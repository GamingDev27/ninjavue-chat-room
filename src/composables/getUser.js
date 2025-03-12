import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const user = ref(projectAuth.currentUser);
//const error = ref(null);

projectAuth.onAuthStateChanged(_user => {
    if(_user){
        console.log('User is logged in: ', user);
        user.value = _user;
    } 
});
        

const getUser = () => {   
    return {user}
}

export default getUser;