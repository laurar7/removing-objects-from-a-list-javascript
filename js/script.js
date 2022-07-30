var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

// Log out even index items
stuff.forEach(function (item, index) {
  // log out items with even index
  if (index % 2 === 0) {
    console.log(item);
  }
});

// Create function that will remove an element from an array
var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`Sorry, no such item in this array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);

// Using 'filter'
var filterStuff = stuff.filter(function (item) {
  return item.includes("s");
});
console.log(filterStuff);

// Using an empty array and a for loop
var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}
console.log(newArray);
