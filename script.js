`use srict`;

const deleteBtn = document.querySelectorAll(
  `#album-review > div.row > div a:last-of-type `
);
deleteBtn.forEach((del) => {
  del.addEventListener(`click`, function () {
    const id = del.getAttribute(`href`);
    console.log(id);
    const contId = document.querySelector(`${id}`);
    contId.remove();
  });
});
