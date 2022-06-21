require('dotenv').config()
import { IncomingMessage, Server, ServerResponse } from "http";
import { Dispatcher } from "changjs/lib";
import http from 'http';

const PORT = 3000;
const HOST_NAME = "0.0.0.0";

// Add Controller
require("./controllers/home.controller");

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => Dispatcher.run(req, res)
);

server.listen(PORT, HOST_NAME, () => {
  console.log(
    `Server running at http://localhost:${PORT}/`
  );
});

// require('./tools/mysql');
