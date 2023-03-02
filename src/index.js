import "./css/style.css"; //importing css

const box = document.querySelector(".modal");

//writing promise

const boxPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    },60000);
  });
};

boxPromise().then((result) => {
  box.style.display = result;
});
