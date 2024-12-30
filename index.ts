type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let nextPizzaId = 1;
let cashInRegister = 100;
let nextOrderId = 1;

const menu = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];
const orderQueue: Array<Order> = [];

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { id: nextPizzaId++, ...pizza };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!selectedPizza) throw new Error("Pizza not found");
  cashInRegister += selectedPizza.price;

  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  return newOrder;
}

const addToArray = <T>(array: T[], item: T): Array<T> => {
  array.push(item);
  return array;
};

addToArray<Pizza>(menu, { id: nextPizzaId++, name: "BBQ Chicken", price: 11 });
addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

console.log({ menu });
console.log({ orderQueue });

function completeOrder(orderId: number): Order {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) throw new Error("Order not found");
  order.status = "completed";
  cashInRegister -= order.pizza.price;
  return order;
}

export const getPizzaDetail = (
  identifier: number | string
): Pizza | undefined => {
  if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else if (typeof identifier === "string" && identifier !== "") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else
    throw new TypeError("Invalid identifier type must be a string or number");
};

/* addNewPizza({ name: "Meat Lovers", price: 12 });
addNewPizza({  name: "Supreme", price: 11 });
addNewPizza({  name: "BBQ Chicken", price: 11 }); */

for (let i = 0; i < 10; i++) {
  console.log(i)
}