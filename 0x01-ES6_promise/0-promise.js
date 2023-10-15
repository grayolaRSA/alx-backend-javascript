function getResponseFromAPI() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Thats all folks!';
      resolve(data);
    }, 1000);
  });

  myPromise.then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err);
  });
}

getResponseFromAPI();
