const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExPenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = `${enteredReason}:$${enteredAmount}`;

  expensesList.appendChild(newItem);

  totalExPenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExPenses;

  clear();
});

cancelBtn.addEventListener("click", clear);
