// Call back
setTimeout(function () {
  console.log("Hello from asynchronous");
}, 3000);

const print = function (fn) {
  console.log("This is VF Company info");
  fn("Gizaw", "Adane", "Elias", "Belayi");
};

const vfCompany = function (...name) {
  console.log(name);
};
print(vfCompany);
console.log("Hello from Synchronous");
