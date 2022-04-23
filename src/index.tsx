import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Uhu",
          type: "deposit",
          category: "dinero",
          amount: 1100,
          createdAt: new Date("2020-01-01 05:43:00"),
        },
        {
          id: 2,
          title: "22w",
          type: "withdraw",
          category: "bye bye",
          amount: 122,
          createdAt: new Date("2020-01-01 05:43:00"),
        },
      ],
    });
  },

  routes() {
    this.urlPrefix = "http://localhost:3000";
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transactions"));

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
