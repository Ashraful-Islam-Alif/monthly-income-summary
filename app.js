function incomeExpensesCalculation() {
    const incomeMoneyValue = incomeMoneyCalculation()
    const foodExpenses = document.getElementById('food-expenses').value
    const rentExpenses = document.getElementById('rent-expenses').value
    const clothesExpenses = document.getElementById('clothes-expenses').value
    const totalExpenses = document.getElementById('total-expenses')
    let totalExpensesCalculation = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses)
    totalExpenses.innerText = totalExpensesCalculation
    const balanceAfterTotalExpenses = document.getElementById('balance-after-total-expenses')
    balanceAfterTotalExpenses.innerText = incomeMoneyValue - totalExpensesCalculation
    return balanceAfterTotalExpenses.innerText
}
function incomeMoneyCalculation() {
    const incomeMoney = document.getElementById('income-money').value
    return incomeMoney;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    incomeExpensesCalculation()
})

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('input-save').value
    const Calculation = incomeMoneyCalculation()
    const saveAmount = Calculation * (saveInput / 100)
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = saveAmount
    const remainingBalanceText = document.getElementById('remaining-balance')
    const remainingBalance = incomeExpensesCalculation() - saveAmount
    remainingBalanceText.innerText = remainingBalance

})