import cors from "@koa/cors";
import Koa from "koa";

import { libs } from "../libs";
import { corsOptions } from "../configs";

export const app = new Koa();

libs.forEach((value) => app.use(value));

app.use(cors(corsOptions));

app.on("error", (e, ctx) => console.log("server error", e, ctx));
