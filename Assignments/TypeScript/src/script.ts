const costInput = document.getElementById("cost") as HTMLInputElement;
const tipPercentInput = document.getElementById("tipPercent") as HTMLSelectElement;
const tipForm = document.getElementById("tipForm") as HTMLFormElement;
const tipAmountSpan = document.getElementById("tipAmount") as HTMLSpanElement;

const calculateTip = function (cost: number, tipPercent: number): number {
    return cost * (tipPercent / 100);
};

tipForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from refreshing page

    console.log("clicked");

    const cost = parseFloat(costInput.value);
    const tipPercent = parseFloat(tipPercentInput.value);

    // basic validation
    if (isNaN(cost) || isNaN(tipPercent) || cost <= 0) {
        tipAmountSpan.textContent = "Please enter valid, positive values";
        return;
    }

    const tip = calculateTip(cost, tipPercent);

    tipAmountSpan.textContent = `$${tip.toFixed(2)}`;
});