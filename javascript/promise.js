// Callback
(() => {
  const callback = (response) => {
    console.log("callback ===> ", JSON.stringify(response));
    return response
  };

  const getData = (req, res) => {
    console.log("req ===> ", JSON.stringify(req));
    res({ status: true });
  };

  getData({ id: 5 }, callback)
})();



// // Promise
// (() => {
//   const getData = (req) => {
//     console.log("req ===> ", JSON.stringify(req));
//     return new Promise((resolve, reject) => {
//       if (!req)
//         return setTimeout(() => {
//             reject({ status: false });
//         }, 2000);

//       setTimeout(() => {
//         resolve({ status: true });
//       }, 2000);
//     });
//   };

//   getData()
//     .then((response) => {
//       console.log("response ===> ", response);
//     })
//     .catch((errors) => {
//       console.error("errors ===> ", errors);
//     });
// })();
