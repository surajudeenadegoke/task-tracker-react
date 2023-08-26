const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleWares = jsonServer.defaults();

server.use(middleWares);
server.use(router);

const port = 2000; // You can change this port if needed
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
