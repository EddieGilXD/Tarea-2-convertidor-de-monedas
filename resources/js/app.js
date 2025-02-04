function convertCurrency() {
    const currency = document.getElementById("currency").value;
    const amount = document.getElementById("amount").value;
    

    if (currency == "$"){
        const dolarResult = amount;
        const yuanResult = amount * 7.19;
        const rubloResult = amount * 98.49;
        updateInformation(rubloResult, dolarResult, yuanResult);
        console.log("Es dolar");
    } else if (currency == "¥") {
        const dolarResult = amount * 0.14;
        const yuanResult = amount;
        const rubloResult = amount * 13.62;
        updateInformation(rubloResult, dolarResult, yuanResult);
        console.log("Es yuan");
    } else if (currency == "₽") {
        const rubloResult = amount;
        const dolarResult = amount * 98.49;
        const yuanResult = amount * 0.072;
        updateInformation(rubloResult, dolarResult, yuanResult);
        console.log("es rublo")
    }

    function updateInformation(rubloResult, dolarResult, yuanResult) {
        const updateDolar = document.getElementById("dolarValue");
        const updateYuan = document.getElementById("yuanValue");
        const updateRublo = document.getElementById("rubloValue");
        
        updateDolar.textContent = "$" + dolarResult;
        updateYuan.textContent = "¥" + yuanResult;
        updateRublo.textContent = "₽" + rubloResult;
    }

}