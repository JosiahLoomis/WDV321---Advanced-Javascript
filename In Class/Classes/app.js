import Subscription from "./subscription.js";

const subscriptions = [];

const nameInput = document.getElementById("serviceName");
const costInput = document.getElementById("monthlyCost");
const button = document.getElementById("addServiceBtn");
const list = document.getElementById("serviceList");
const totalDisplay = document.getElementById("totalCost");

button.addEventListener("click", () => {

    const sub = new Subscription(nameInput.value, costInput.value);
    subscriptions.push(sub);

    list.innerHTML = "";

    subscriptions.forEach((sub) => {
        const li = document.createElement("li");
        li.textContent = `${sub.serviceName} - $${sub.serviceCost.toFixed(2)}`;
        list.appendChild(li);
    });

    totalDisplay.textContent =
        Subscription.calculateTotal(subscriptions).toFixed(2);

});