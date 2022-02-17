const balanceAfterTotalExpenses = document.getElementById('balance-after-total-expenses') //global variable balance to used in different function
function incomeExpensesCalculation() {
    const incomeMoneyValue = incomeMoneyCalculation() //calling income value from function
    const foodExpenses = document.getElementById('food-expenses').value
    const rentExpenses = document.getElementById('rent-expenses').value
    const clothesExpenses = document.getElementById('clothes-expenses').value
    const totalExpenses = document.getElementById('total-expenses')
    let totalExpensesCalculation = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses) //calculating total expenses
    const expensesMessage = document.getElementById('expenses-message')
    const negativeMessage = document.getElementById('negative-message')
    const numberMessageExpenses = document.getElementById('number-message-expenses')
    //error checking value and negative number
    if (incomeMoneyValue > totalExpensesCalculation && incomeMoneyValue > 0 && foodExpenses > 0 && rentExpenses > 0 && clothesExpenses > 0) {
        totalExpenses.innerText = totalExpensesCalculation
        balanceAfterTotalExpenses.innerText = incomeMoneyValue - totalExpensesCalculation
        expensesMessage.style.display = 'none'
        negativeMessage.style.display = 'none'
        numberMessageExpenses.style.display = 'none'
        return balanceAfterTotalExpenses.innerText
    }
    else if (incomeMoneyValue < 0 || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {
        negativeMessage.style.display = 'block'
        expensesMessage.style.display = 'none'
        numberMessageExpenses.style.display = 'none'
    }
    else if (isNaN(incomeMoneyValue) || isNaN(foodExpenses) || isNaN(rentExpenses) || isNaN(clothesExpenses)) { //if  input value string givestring 
        negativeMessage.style.display = 'none'
        expensesMessage.style.display = 'none'
        numberMessageExpenses.style.display = 'block'


    }
    else {
        negativeMessage.style.display = 'none'
        numberMessageExpenses.style.display = 'none'
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

//save button 
document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('input-save').value
    const Calculation = incomeMoneyCalculation()
    const saveAmount = Calculation * (saveInput / 100)
    const savingAmount = document.getElementById('saving-amount')
    savingAmount.innerText = saveAmount
    const remainingBalanceText = document.getElementById('remaining-balance')
    const remainingBalance = incomeExpensesCalculation() - saveAmount
    const savingMessage = document.getElementById('saving-message')
    const numberMessage = document.getElementById('number-message')
    //checking error of save percentages
    if (saveAmount < balanceAfterTotalExpenses.innerText) {
        remainingBalanceText.innerText = remainingBalance
        savingMessage.style.display = 'none'
        numberMessage.style.display = 'none'
    }

    else if (isNaN(saveInput)) { //if  input value string givestring 
        numberMessage.style.display = 'block'
        savingMessage.style.display = 'none'

    }
    else {
        numberMessage.style.display = 'none'
        savingMessage.style.display = 'block' // condition not satisfy error message will show
    }

})