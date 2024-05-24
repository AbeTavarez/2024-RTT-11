import './style.css'

type User = {
  username: string,
  email: string,
  password: string,
  id?: number,
  admin: boolean
}

const signupForm = document.getElementById('signup-form') as HTMLFormElement;



signupForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const newUser: User = {
    username: signupForm['username'].value,
    email: signupForm['email'].value,
    password: signupForm['password'].value,
    admin: false,
    id: 1
  }

  console.log(newUser);


  createUser(newUser);
  
});


function createUser(obj: User) {
    return {
      ...obj,
    }
}
