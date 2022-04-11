import net from "net";

net
  .createServer((socket) => {
    console.log(socket);
  })
  .listen(1111);

const arr = Buffer.from("ioioio");
console.log(arr);
console.log(arr.toJSON());

setInterval(() => {
  console.log(new Date());
  console.log(new Date() + "dsjkkjsdfjkhsjkd");
}, 1000);
