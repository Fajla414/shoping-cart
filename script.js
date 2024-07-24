const phone = (isIncrease) => {
    let phoneCount = document.getElementById('phone-count');
    let phoneNewCount = phoneCount.value;
    if (isIncrease == true) {
        phoneNewCount = parseInt(phoneCount.value) + 1
    }
    if (isIncrease == false && phoneCount.value > 0) {
        phoneNewCount = parseInt(phoneCount.value) - 1;
    }
    phoneCount.value = phoneNewCount;
    let phoneTotal = document.getElementById('phone-total');
    let phoneNewTotal = 1219 * phoneNewCount;
    phoneTotal.innerText = phoneNewTotal;
    total();
}

const caseFun = (isIncrease) => {
    let caseCount = document.getElementById('case-count');
    let caseNewCount = caseCount.value;
    if (isIncrease == true) {
        caseNewCount = parseInt(caseCount.value) + 1;
    }
    if (isIncrease == false && caseCount.value > 0) {
        caseNewCount = parseInt(caseCount.value) - 1;
    }
    caseCount.value = caseNewCount;
    let caseTotal = document.getElementById('case-total');
    let caseNewTotal = 59 * caseNewCount;
    caseTotal.innerText = caseNewTotal;
    total();
}

const total = (e) => {
    let phoneSubTotal = document.getElementById('phone-total').innerText;
    let caseSubTotal = document.getElementById('case-total').innerText;
    let tax = document.getElementById('tax').innerText;
    let subTotal = document.getElementById('subtotal');
    subTotal.innerText = parseInt(phoneSubTotal) + parseInt(caseSubTotal);
    let total = document.getElementById('total');
    total.innerText = parseInt(tax) + parseInt(subTotal.innerText);
}