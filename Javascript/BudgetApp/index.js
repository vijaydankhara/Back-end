let expenses = [];

function addExpense() {
  const expenseInput = document.getElementById('expense-input');
  const amountInput = document.getElementById('amount-input');
  
  const expense = expenseInput.value;
  const amount = parseFloat(amountInput.value);
  
  if (expense && amount) {
    expenses.push({ expense, amount });
    updateExpenseList();
    updateTotalExpenses();
    
    expenseInput.value = '';
    amountInput.value = '';
  }
}

function updateExpenseList() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';
  
  expenses.forEach((expense) => {
    const li = document.createElement('li');
    li.textContent = `${expense.expense}: $${expense.amount}`;
    expenseList.appendChild(li);
  });
}

function updateTotalExpenses() {
  const totalExpenses = document.getElementById('total-expenses');
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  totalExpenses.textContent = total;
}
