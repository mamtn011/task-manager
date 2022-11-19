import Manipulation from "./Manipulation.js";
import Storage from "./Storage.js";
class Ui {
  selectDomElements() {
    const submitBtns = document.querySelector(".submit-btns");
    const titleInputElm = document.querySelector("#title");
    const descriptionInputElm = document.querySelector("#description");
    const assignedToInputElm = document.querySelector("#assigned-to");
    const startInputElm = document.querySelector("#start-date");
    const endInputElm = document.querySelector("#end-date");
    const priorityInputElms = document.getElementsByName("priority");
    const statusInputElms = document.getElementsByName("status");
    const completed = document.querySelector("#completed");
    const completedPercentage = document.querySelector(".completed-percentage");
    const raangeInputElm = document.querySelector("#char-range");
    const amountInputElm = document.querySelector("#char-amount");
    const addTaskBtn = document.querySelector(".add-task");
    const updateTaskBtn = document.querySelector(".update-task");
    const goBackBtn = document.querySelector(".go-back");
    const messageElm = document.querySelector(".message");
    const displayTaskArea = document.querySelector(".display-task-area");
    const taskBody = document.querySelector("#task-body");
    const totalElm = document.querySelector(".total");
    const newElm = document.querySelector(".new");
    const inProgressElm = document.querySelector(".in-progress");
    const completedElm = document.querySelector(".completed");
    return {
      submitBtns,
      titleInputElm,
      descriptionInputElm,
      assignedToInputElm,
      startInputElm,
      endInputElm,
      priorityInputElms,
      statusInputElms,
      completed,
      completedPercentage,
      raangeInputElm,
      amountInputElm,
      addTaskBtn,
      updateTaskBtn,
      goBackBtn,
      messageElm,
      displayTaskArea,
      taskBody,
      totalElm,
      newElm,
      inProgressElm,
      completedElm,
    };
  }
  #clearMessage(elm) {
    setTimeout(() => {
      elm.textContent = "";
    }, 3000);
  }
  showMessage(msg, action = "success") {
    const { messageElm } = this.selectDomElements();
    let elm = `<div class="alert alert-${action}">${msg}</div>`;
    messageElm.insertAdjacentHTML("afterbegin", elm);
    this.#clearMessage(messageElm);
  }
  showStorageDataToUI(tasks) {
    const { displayTaskArea } = this.selectDomElements();
    if (Storage.allTask.length > 0) {
      displayTaskArea.style.display = "block";
    } else {
      displayTaskArea.style.display = "none";
    }
  }
  resetInputs() {
    const {
      titleInputElm,
      descriptionInputElm,
      assignedToInputElm,
      startInputElm,
      endInputElm,
      priorityInputElms,
      statusInputElms,
      raangeInputElm,
      amountInputElm,
    } = this.selectDomElements();
    Manipulation.id = 0;
    Array.from(priorityInputElms).find((el) => el.checked).checked = false;
    Array.from(statusInputElms).find((el) => el.checked).checked = false;
    titleInputElm.value = "";
    descriptionInputElm.value = "";
    assignedToInputElm.value = "";
    startInputElm.value = "";
    endInputElm.value = "";
    raangeInputElm.value = 10;
    amountInputElm.value = 10;
  }
  #getPriorityBg(priority) {
    let pBg = "";
    if (priority === "High") {
      pBg = "warning";
    } else if (priority === "Medium") {
      pBg = "info";
    } else {
      pBg = "primary";
    }
    return pBg;
  }
  #getAmountBg(amount) {
    let aBg = "";
    if (amount >= 100) {
      aBg = "success";
    } else if (amount >= 70) {
      aBg = "info";
    } else if (amount >= 40) {
      aBg = "primary";
    } else if (amount >= 20) {
      aBg = "warning";
    } else {
      aBg = "danger";
    }
    return aBg;
  }
  #countTaskByStatus(task) {
    const { totalElm, newElm, inProgressElm, completedElm } =
      this.selectDomElements();
    let snew = 0;
    let sinprogress = 0;
    let scompleted = 0;
    task.forEach((el) => {
      if (el.status === "New") {
        snew++;
      } else if (el.status === "In Progress") {
        sinprogress++;
      } else {
        scompleted++;
      }
    });
    totalElm.textContent = task.length;
    newElm.textContent = snew;
    inProgressElm.textContent = sinprogress;
    completedElm.textContent = scompleted;
  }
  showTaskToUI(tasks) {
    const { taskBody } = this.selectDomElements();
    this.#countTaskByStatus(tasks);
    taskBody.textContent = "";
    let elm = "";
    const sortedTask = tasks.sort((a, b) => b.id - a.id);
    sortedTask.forEach((task, index) => {
      const { id, title, worker, end, priority, status, amount } = task;

      const priorityBg = this.#getPriorityBg(priority);
      const amountBg = this.#getAmountBg(Number(amount));
      const comClass = status === "Completed" ? "completed-task" : "";
      elm += `<tr><th scope="row">${index + 1}</th>
      <td>${title}</td>
      <td><span class="badge badge-pill badge-${priorityBg}">${priority}</span></td>
      <td class="${comClass}">${status}</td>
      <td>${end}</td>
      <td>${worker}</td>
      <td>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-${amountBg}"
            role="progressbar"
            style="width: ${amount}%"
            aria-valuenow="${amount}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span class="text-black font-weight-bold">${amount}%</span>
          </div>
        </div>
      </td>
      <td id="manipulate-task" data-id="${id}">
        <i class="fas fa-edit text-primary edit-task"></i>
        <i class="fas fa-check-square text-success complete-task"></i>
        <i class="fas fa-trash-alt text-danger delete-task"></i>
      </td></tr>`;
    });
    taskBody.insertAdjacentHTML("beforeend", elm);
    const manipulateTask = document.querySelectorAll("#manipulate-task");
    manipulateTask.forEach((el) => {
      el.addEventListener("click", (e) => Manipulation.handleManipulation(e));
    });
  }
  #adjustPercentage(e) {
    const { raangeInputElm, amountInputElm, statusInputElms } =
      this.selectDomElements();
    if (e.target.classList.contains("percentage-range")) {
      amountInputElm.value = raangeInputElm.value;
      if (Number(amountInputElm.value) >= 100) {
        statusInputElms[2].checked = true;
      } else {
        statusInputElms[2].checked = false;
      }
    } else {
      raangeInputElm.value = amountInputElm.value;
      if (Number(raangeInputElm.value) >= 100) {
        statusInputElms[2].checked = true;
      } else {
        statusInputElms[2].checked = false;
      }
    }
  }
  #fixPercentage(e) {
    const { raangeInputElm, amountInputElm } = this.selectDomElements();
    if (e.target.id === "completed") {
      amountInputElm.value = 100;
      raangeInputElm.value = 100;
    }
  }
  displayUpdateBtn() {
    const { addTaskBtn, updateTaskBtn, goBackBtn } = this.selectDomElements();
    updateTaskBtn.style.display = "block";
    goBackBtn.style.display = "block";
    addTaskBtn.style.display = "none";
  }
  hideUpdateBtn() {
    const { addTaskBtn, updateTaskBtn, goBackBtn } = this.selectDomElements();
    updateTaskBtn.style.display = "none";
    goBackBtn.style.display = "none";
    addTaskBtn.style.display = "block";
  }
  populateEditData(id) {
    const data = Storage.allTask.find((el) => el.id === id);
    const { title, description, worker, start, end, priority, status, amount } =
      data;
    const {
      titleInputElm,
      descriptionInputElm,
      assignedToInputElm,
      startInputElm,
      endInputElm,
      priorityInputElms,
      statusInputElms,
      raangeInputElm,
      amountInputElm,
    } = this.selectDomElements();
    Array.from(priorityInputElms).find(
      (el) => el.value === priority
    ).checked = true;
    Array.from(statusInputElms).find(
      (el) => el.value === status
    ).checked = true;
    titleInputElm.value = title;
    descriptionInputElm.value = description;
    assignedToInputElm.value = worker;
    startInputElm.value = start;
    endInputElm.value = end;
    raangeInputElm.value = amount;
    amountInputElm.value = amount;
    this.displayUpdateBtn();
  }
  init() {
    const { completedPercentage, statusInputElms } = this.selectDomElements();
    this.showStorageDataToUI();
    completedPercentage.addEventListener("change", (e) =>
      this.#adjustPercentage(e)
    );
    statusInputElms.forEach((elm) =>
      elm.addEventListener("change", (e) => this.#fixPercentage(e))
    );
    Manipulation.init();
  }
}
const ui = new Ui();
export default ui;
