import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then((results) => {
      const [photo, User] = results;
      console.log(`${photo.body} ${User.firstName} ${User.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
