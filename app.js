function incomeExpensesCalculation() {
    const incomeMoneyValue = incomeMoneyCalculation()
    const foodExpenses = document.getElementById('food-expenses').value
    const rentExpenses = document.getElementById('rent-expenses').value
    const clothesExpenses = document.getElementById('clothes-expenses').value
    const totalExpenses = document.getElementById('total-expenses')
    let totalExpensesCalculation = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses)
    //totalExpenses.innerText = totalExpensesCalculation
    const balanceAfterTotalExpenses = document.getElementById('balance-after-total-expenses')
    const expensesMessage = document.getElementById('expenses-message')
    const negativeMessage = document.getElementById('negative-message')
    if (incomeMoneyValue > totalExpensesCalculation && incomeMoneyValue > 0 && foodExpenses > 0 && rentExpenses > 0 && clothesExpenses > 0) {
        totalExpenses.innerText = totalExpensesCalculation
        balanceAfterTotalExpenses.innerText = incomeMoneyValue - totalExpensesCalculation
        expensesMessage.style.display = 'none'
        negativeMessage.style.display = 'none'
        return balanceAfterTotalExpenses.innerText

    }
    else if (incomeMoneyValue < 0 || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {
        negativeMessage.style.display = 'block'
        expensesMessage.style.display = 'none'
    }
    else {
        negativeMessage.style.display = 'none'
        expensesMessage.style.display = 'block'
    }

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