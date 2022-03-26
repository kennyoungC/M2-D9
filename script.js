`use srict`;

const deleteBtn = document.querySelectorAll(
  `#album-review > div.row > div a:last-of-type `
);
const toDeleteCol = function () {
  deleteBtn.forEach((del) => {
    del.addEventListener(`click`, function () {
      const id = del.getAttribute(`href`);
      console.log(id);
      const contId = document.querySelector(`${id}`);
      contId.remove();
      setTimeout(() => {
        alert(`deleted successfully`);
      }, 500);
    });
  });
};
toDeleteCol();
const trackNumber = document.querySelector(`#track-number`);
const trackTitle = document.querySelector(`#track-title`);
const trackDuration = document.querySelector(`#track-duration`);
const trackYear = document.querySelector(`#track-year`);
const btnAdd = document.querySelector(`.btn-add`);
const table = document.querySelector(`table`);
btnAdd.addEventListener(`click`, function () {
  const newRow = ` <tr>
  <th scope="row">${trackNumber.value}</th>
  <td>${trackTitle.value}</td>
  <td>${trackYear.value}</td>
  <td>${trackDuration.value}${trackDuration.value > 1 ? `hrs` : `hr`}</td>
</tr>`;
  table.innerHTML += newRow;
  addDelBtn();
  executeDel();
  setTimeout(() => {
    $("#exampleModal").modal("hide");
  }, 10);

  // alert(`track added succefully`);
});
const addDelBtn = function () {
  const delete_ = document.getElementsByClassName(`delete`);
  while (delete_.length > 0) {
    delete_[0].remove();
  }

  const tbody = document.querySelectorAll(`tbody > tr`);
  console.log(tbody.length);
  tbody.forEach((tr) => {
    tr.innerHTML += `<td class="delete"><a class="" href="#">delete</a></td>`;
  });
};

const thead = document.querySelector(`thead > tr`);
thead.innerHTML += `<th class="" scope="col">Delete track</th>`;
addDelBtn();
const executeDel = function () {
  const allDelete = document.querySelectorAll(`.delete`);
  console.log(allDelete);
  allDelete.forEach((del) => {
    del.addEventListener(`click`, function (e) {
      e.preventDefault();
      e.target.closest("tr").remove();
    });
  });
};
executeDel();
