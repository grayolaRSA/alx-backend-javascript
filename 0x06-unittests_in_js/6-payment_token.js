function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    const success = true;
    const payObj = { data: 'Successful response from the API' };
    setTimeout(() => resolve(payObj), 0);
  }).then((result) => {
    return result;
  });
}

module.exports = getPaymentTokenFromAPI;
