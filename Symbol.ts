const current = Symbol("trainLength");

class Train {
  constructor() {
    this[current] = 0;
  }

  add(cart: string, content: string) {
    this[cart] = content;
    this[current]++;
  }
}

const newTrain = new Train();
newTrain.add(`flat cart`, `cattle`);
newTrain.add(`tank cart`, `oil`);
newTrain.add(`hopper cart`, `coal`);
newTrain.add(`foo cart`, `foo`);

for (const cart in newTrain) {
  console.log(cart, newTrain[cart]);
}
