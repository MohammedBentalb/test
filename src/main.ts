const form = document.querySelector("form")!;
const nameInput = document.querySelector<HTMLInputElement>("#name-inp")!;
const selectInput = document.querySelector<HTMLSelectElement>("#role")!;
const nameErrorField =
  document.querySelector<HTMLParagraphElement>(".error-name")!;
const roleErrorField =
  document.querySelector<HTMLParagraphElement>(".error-role")!;
const List = document.querySelector<HTMLUListElement>(".list")!;
const modal = document.querySelector<HTMLDivElement>(".modal")!;
const addButton = document.querySelector<HTMLButtonElement>(".add")!;
const cancelButton = document.querySelector<HTMLButtonElement>("#cancel")!;

let empList: { name: string; role: string }[] | [] = [];

const validateInput = (input: HTMLInputElement | HTMLSelectElement) => {
  const value = input.value.trim();
  if (!value) {
    // console.log("innvalid Value");
    return "invalid Value";
  }
  console.log(input.value);
  return "";
};

const showError = (element: HTMLParagraphElement, err: string) => {
  element.textContent = err;
};

// validate the user name choice
nameInput.addEventListener("input", () => {
  console.log("hi there");
  const errMessage = validateInput(nameInput);
  showError(nameErrorField as HTMLInputElement, errMessage);
});

// validate the user role
selectInput.addEventListener("change", () => {
  console.log("hi there");
  const errMessage = validateInput(selectInput);
  showError(roleErrorField, errMessage);
});

// handle the si=ubmit action
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const eName = validateInput(nameInput);
  const eRole = validateInput(selectInput);

  showError(nameErrorField, eName);
  showError(roleErrorField, eRole);

  if (!eName && !eRole) {
    empList = [
      ...empList,
      { name: nameInput.value.trim(), role: selectInput.value.trim() },
    ];
    console.log(selectInput.value.trim());

    renderEmployees();
    modal.classList.add("is-hidden");

    form.reset();
    console.log(modal);
    console.log(empList);
  } else {
    console.log("bruuuh");
  }
});

// totgle the modal to be visible
addButton.addEventListener("click", () => {
  modal.classList.remove("is-hidden");
});

// totgle the modal to be not be visible
cancelButton.addEventListener("click", () => {
  modal.classList.add("is-hidden");
});

function renderEmployees() {
  List.innerHTML = "";
  empList.forEach((emp) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="img"></div>
          <div>
            <p>${emp.name}</p>
            <p>${emp.role}</p>
        </div>
        <button>Edit</button>
        `;
    List.appendChild(li);
  });
}
