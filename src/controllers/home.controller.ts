import { IncomingMessage, ServerResponse } from "http";
import path from "path";
import fs from 'fs';
import { Controller, HttpController } from "changjs/lib";

@Controller("/")
export default class HomeController extends HttpController {
  constructor() {
    super();
  }

  static doGet(req: IncomingMessage, res: ServerResponse): number {
    const data = fs.readFileSync(path.join(__dirname, '../views/home.html'));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
    return 1;
  }
}
