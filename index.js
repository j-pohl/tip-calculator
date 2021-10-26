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



    // const sumCalculated = formatter(locale, currency, sum)
    // sumBeforeTipEl.innerHTML = sumCalculated;

// tipEl.innerHTML = formatter(locale, currency, tip);
    // totalEl.innerHTML = formatter(locale, currency, total)
// const square = document.createElement('div')
//   square.classList.add('square')
//   grid.appendChild(square)



// sumBeforeTipEl.innerHTML = "Test"

// function displayResults() {
//     sumBeforeTipEl.innerHTML = `${sum}`;
//     tipPercentageEl.innerHTML = `${tip}%`
//     tipEl.innerHTML = 
//     totalEl.innerHTML =
// }


    // const content = document.querySelector(".content");
    // content.innerHTML = formatter("en-US", "USD", 15);





    // So what happens now is when I call tip calculator, tip calculator will then take each of these values, 
    // the sum, the tip and the total, pass them up to the formatter function then do something to those numbers 
    // and pass them back out or return them back out and display that down here. Now we need to actually do 
    // something with these values 'cause right now we're capturing the values but not using them. 
    // That's where the international number format object constructor comes in.

  

    
// <!-- Now you see how important the return keyword is. Using the return keyword, we can pass information back and forth 
// between different functions, and use functions again and again to do different things like in this example where 
// we're using the formatter function three times inside the tip calculator function to get different results for 
// different purposes. That way, we can create helper functions and we don't have to do everything inside one function. -->







// const tipCalculator = (sum, percentage) => {

//     let tip = sum * (percentage/100);
//     let total = sum + tip;
//     let results =
//     console.log(
//         `Sum before tip: $(sum)
//     Tip percentage: $(percentage)%
//     Tip: $(tip.toFixed(2)}
//     Total: $(total.toFixed(2)}
//     `
//     );
// }
// tipCalculator(29.95, 18);
//whenver I mention sum in the function body I am refering to the parameter
// value of here which is the argument we passed in (at the bottom)
// and can delete let sum = 10, let tip = 1 as passing in instead

// Content.innerHTML = results


// let timerId = 0

// function createGrid () {
//   for (let i=0; i<width*width; i++) {
//   const square = document.createElement('div')
//   square.classList.add('square')
//   grid.appendChild(square)
//   squares.push(square)
//   }
// }
// createGrid()