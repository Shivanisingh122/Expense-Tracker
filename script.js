// Sample expenses array
const expenses = [
    { id: 1, description: "Groceries", category: "Food", amount: 50 },
    { id: 2, description: "Gas", category: "Transportation", amount: 30 },
    { id: 3, description: "Movie Tickets", category: "Entertainment", amount: 25 },
    { id: 4, description: "Electricity Bill", category: "Utilities", amount: 70 },
    { id: 5, description: "Dinner", category: "Food", amount: 40 },
];

const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpenses");
const categoryFilter = document.getElementById("category");

function displayExpenses(expenseArray) {
    expenseList.innerHTML = "";

    expenseArray.forEach((expense) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${expense.description} - $${expense.amount}`;
        expenseList.appendChild(listItem);
    });
}

function calculateTotalExpenses(expenseArray) {
    const total = expenseArray.reduce((accumulator, expense) => accumulator + expense.amount, 0);
    totalExpenses.textContent = total.toFixed(2);
}

function filterExpenses() {
    const selectedCategory = categoryFilter.value;
    let filteredExpenses = expenses;

    if (selectedCategory !== "All") {
        filteredExpenses = expenses.filter((expense) => expense.category === selectedCategory);
    }

    displayExpenses(filteredExpenses);
    calculateTotalExpenses(filteredExpenses);
}

// Initial display
displayExpenses(expenses);
calculateTotalExpenses(expenses);

// Add Expense Functionality

const expenseDescription = document.getElementById("expenseDescription");
const expenseAmount = document.getElementById("expenseAmount");
const addExpenseCategory = document.getElementById("addExpenseCategory");

function addExpense() {
    const description = expenseDescription.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = addExpenseCategory.value;

    if (!description || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    // Generate a unique ID for the new expense 
    const newExpense = {
        id: Date.now(),
        description: description,
        amount: amount,
        category: category,
    };

    expenses.push(newExpense);

    // Clear input fields
    expenseDescription.value = "";
    expenseAmount.value = "";

    // Refresh the filtered list and total
    filterExpenses();
}
