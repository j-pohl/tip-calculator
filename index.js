const sumBeforeTipEl = document.querySelector(".sumBeforeTip")
const tipPercentageEl = document.querySelector(".tipPercentage")
const tipEl = document.querySelector(".tip")
const totalEl = document.querySelector(".total")


const formatter = (locale, currency, sum) => {
    let formattedValue = new Intl.NumberFormat(locale, {style: "currency", currency: currency,}).format(sum);
    return formattedValue
     }

const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage/100);
    let total = sum + tip;
    console.log (`
    Sum before tip: ${formatter(locale, currency, sum)}
    Tip percentage: ${percentage}%
    Tip: ${formatter(locale, currency, tip)}
    Total: ${formatter(locale, currency, total)}
    `);



    sumBeforeTipEl.innerHTML = ` Sum before tip: ${formatter(locale, currency, sum)}`;
    tipPercentageEl.innerHTML = `Tip percentage: ${percentage} %`;
    tipEl.innerHTML = `Tip: ${formatter(locale, currency, tip)}`;
    totalEl.innerHTML = `Total: ${formatter(locale, currency, total)}`;
    
}
tipCalculator(30, 15, "en-US", "USD");

// add input fields, make more dynamic

