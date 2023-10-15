import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userSignUp = signUpUser(firstName, lastName);
  const userPhoto = uploadPhoto(fileName);

  return Promise.allSettled([userSignUp, userPhoto])
    .then((result) => {
        result.forEach((result) => {
            console.log([result.status, result.values]);
        });
    });
}
