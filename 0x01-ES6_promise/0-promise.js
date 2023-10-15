export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Thats all folks!';
      resolve(data);
    }, 1000);
  });
}

// getResponseFromAPI()
//   .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.error(err);
// });
