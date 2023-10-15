export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const err = `${fileName} cannot be processed`;

    reject(new Error(err));
  });
}
