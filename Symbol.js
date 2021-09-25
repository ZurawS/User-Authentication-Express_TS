var current = Symbol("trainLength");
var Train = /** @class */ (function () {
    function Train() {
        this[current] = 0;
    }
    Train.prototype.add = function (cart, content) {
        this[cart] = content;
        this[current]++;
    };
    return Train;
}());
var newTrain = new Train();
newTrain.add("flat cart", "cattle");
newTrain.add("tank cart", "oil");
newTrain.add("hopper cart", "coal");
newTrain.add("foo cart", "foo");
for (var cart in newTrain) {
    console.log(cart, newTrain[cart]);
}
