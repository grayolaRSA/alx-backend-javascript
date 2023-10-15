function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Thats all folks!';
      resolve(data);
    }, 1000);
  });
}
