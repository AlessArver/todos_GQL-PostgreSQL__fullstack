require("dotenv").config();
import "reflect-metadata";

import { config } from "./configs";
import { apolloServer, app } from "./init";

app.listen(config.port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${config.port}${apolloServer.graphqlPath}`
  );
});
