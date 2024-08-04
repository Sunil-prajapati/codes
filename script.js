const user = {
  name: "Sunil",
  class: 10,
  city: "Amritsar",
};

// const users = {
//   name: "Sunil",
//   class: 10,
//   city: "Amritsar",
// };

// if we have same string the address are same but not in the case non-primtive data types
// in non - primtive we compare address not value (because can be very big)
// address is basically of value not it's variable name
// const a = "";
// const b = "";

// const userName1 = {};
// const userName2 = {};

// hi();
// function hi() {
//   console.log("hello function ===");
//   function secondCall() {
//     console.log(secondCall);
//   }
//   secondCall();
// }

// for (let j = 1; j < 3; j++) {
//   setTimeout(() => {
//     console.log(j);
//   }, 1000);
// }

let socket = new WebSocket(
  "wss://javascript.info/article/websocket/demo/hello"
);
socket.onopen = function (e) {
  console.log("[open] Connection established");
  socket.send("My name is John");
};

socket.onmessage = function (event) {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log("[close] Connection died");
  }
};

socket.onerror = function (error) {
  console.error(`[error]`, error);
};
