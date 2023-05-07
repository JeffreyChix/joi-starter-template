import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

import base from "./controller/base";
import routes from "./routes";

const App: Application = express();
App.use(helmet());

App.use(cors());

App.use(express.json());
App.use(express.urlencoded({ extended: true }));

App.use(routes);

App.use(base.unknownRoute);

App.use(base.errorRoute);

export default App;
