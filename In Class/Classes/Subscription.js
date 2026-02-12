export default class Subscription {
    constructor(serviceName, serviceCost) {
        this.serviceName = serviceName;
        this.serviceCost = Number.parseFloat(serviceCost);
    }

    static calculateTotal(subscriptions) {
        let total = 0;
        subscriptions.forEach(sub => total += sub.serviceCost);
        return total;
    }
}