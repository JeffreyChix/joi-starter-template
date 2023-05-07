import http from "http";

import App from "../..";

const Server = http.createServer(App);

const normalizePort = (val: string): number | boolean | string => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const PORT = normalizePort(process.env.PORT || "5000");

App.set("port", PORT);

Server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
