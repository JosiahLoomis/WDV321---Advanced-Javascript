const costInput = document.getElementById("cost");
const tipPercentInput = document.getElementById("tipPercent");
const tipForm = document.getElementById("tipForm");
const tipAmountSpan = document.getElementById("tipAmount");
const calculateTip = function (cost, tipPercent) {
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
export {};
//# sourceMappingURL=script.js.map