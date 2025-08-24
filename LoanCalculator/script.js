const button = document.querySelector(".calculate")

button.addEventListener("click", ()=>{
     CalculateLoan()
})


function CalculateLoan(){
    const Loan_amount = document.querySelector("#loan-amount").value
    const interest = document.querySelector("#Interest").value
    const Month_pay = document.querySelector("#months-to-pay").value
    const payment = document.querySelector(".Payment")

    let interestRate = ((Loan_amount * interest * .01)/ Month_pay)
    let MonthlyPayment = ((Loan_amount / Month_pay + interestRate)).toFixed(1)

    payment.innerHTML=`Monthly Payment :${MonthlyPayment}`

}