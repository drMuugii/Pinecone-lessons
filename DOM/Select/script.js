// 1. Use getElementById to select an element by ID

const byId = document.getElementById("itemNo1");
console.log(byId);

// 2. Use getElementsByName to select elements by name

const byName = document.getElementsByName("itemNo2");
console.log(byName);

// 3. Use getElementsByTagName to select elements by tag name

const byTagName = document.getElementsByTagName("li");
console.log(byTagName[1]);

// 4. Use getElementsByClassName to select elements by class name

const byClassName = document.getElementsByClassName("item");
console.log(byClassName[0]);
