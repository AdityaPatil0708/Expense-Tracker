var expense = 0;
var income = 0;
const lists = [];

const form = document.getElementById('form')
function handleSubmit(e) {
    e.preventDefault();
    
    const type = document.getElementById('type');
    const reason = document.getElementById('reason');
    const amount = document.getElementById('amount');
    const date = document.getElementById('date');

    if(type.value == 'expense') {
        expense += parseInt(amount.value);
    } else {
        income += parseInt(amount.value);
    }

    lists.push({
        type: type.value,
        reason: reason.value,
        amount: amount.value,
        date: date.value
    });

    mapList();
    reflectRefult(income, expense);
}

form.addEventListener('submit', (e) => {
    handleSubmit(e);
});

function mapList() {
    const list = document.getElementById('list');
    var listData = '<h3 class="title">Income and Expense List</h3>';
    lists.forEach((item) => {
        listData += `
        <div class="${item.type == 'expense' ? 'expense': 'income'}">
            <div>${item.amount}₹</div>
            <span>${item.reason}</span>
            <div>${item.date}</div>
        </div>`
    });

    list.innerHTML = listData;
}

function reflectRefult(income, expense) {
    const result = document.getElementById('result');
    var resultData = '<h3 class="title">Your Expense Status</h3> ';
    console.log(income, expense);
    if(income > expense) {
        resultData = `
        <h3 style="text-align: center;">Your Expense Status</h3>        
            <h2>You</h2>
            <h1 class="green">SAVED</h1>
            <h2 class="green">${Math.abs(income-expense)}₹</h2>
        `
    } else {
        resultData = `
        <h3 style="text-align: center;">Your Expense Status</h3>        
            <h2>You</h2>
            <h1 class="red">Exceed</h1>
            <h2 class="red">${Math.abs(income-expense)}₹</h2>
        `
    }

    result.innerHTML = resultData;
    
}