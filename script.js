module.exports = {
  showError(error) {
    const err = document.querySelector(".container-fluid");
    err.insertAdjacentHTML("beforeend", error);
  },
};
