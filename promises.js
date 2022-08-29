const print = function (name) {
  return new Promise(function (resolve, reject) {
    if (name) {
      resolve(name);
    } else {
      reject("Error");
    }
  });
};
// print("")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Async / Await
const nebyuPrint = async function () {
  try {
    return await print("Elias");
  } catch (error) {
    console.log(error);
  }
};

const final = async function () {
  console.log(await nebyuPrint());
};
final();


// Fetch
