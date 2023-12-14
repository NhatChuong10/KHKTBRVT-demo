// // const { callbackify } = require("util");

// var KQ_para = document.querySelector(".KQ-pgr");

// var urlAPI = "http://localhost:3000/br-vt";

// var GetAndOpenAPI = (callback) => {
//     fetch(urlAPI)
//         .then((respone) => {
//             return respone.json();
//         })
//         .then(callback)
// };

// GetAndOpenAPI((infor) => {
//     KQ_para.innerHTML = `${infor[0].KQ}`;
// });