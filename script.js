`use srict`;

const trackNumber = document.querySelector(`#track-number`);
const trackTitle = document.querySelector(`#track-title`);
const trackDuration = document.querySelector(`#track-duration`);
const trackYear = document.querySelector(`#track-year`);
const btnAdd = document.querySelector(`.btn-add`);
const table = document.querySelector(`tbody`);
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
// const addDisplayBlock = function () {
//   document.querySelector(`.alert.alert-success`).classList.add(`d-none`);
// };
const addNewRow = function () {
  btnAdd.addEventListener(`click`, function () {
    const newRow = ` <tr class="new-row">
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
    const alert = document.querySelector(`.alert.alert-success`);
    setTimeout(() => {
      alert.classList.remove(`d-none`);
      alert.classList.add(`show`);
    }, 500);

    setTimeout(() => {
      alert.classList.remove(`show`);
    }, 6000);
    setTimeout(() => {
      alert.classList.add(`d-none`);
    }, 6500);

    trackDuration.value = "";
    trackNumber.value = "";
    trackTitle.value = ``;
    trackYear.value = ``;
  });
};
addNewRow();
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
      e.target.closest(`tr`).classList.add(`hidden`);
      console.log(e.target);
      setTimeout(() => {
        e.target.closest("tr").remove();
        alert(`deleted successfully`);
      }, 500);
    });
  });
};
executeDel();
