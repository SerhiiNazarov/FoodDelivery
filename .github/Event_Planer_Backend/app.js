const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// const {
//   authRouter,
//   ingredientsRouter,
//   recipesRouter,
//   favoriteRouter,
//   ownRecipesRouter,
//   subscribeRouter,
//   shoppingListRouter,
//   popularRouter,
// } = require("./routes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use("/api/auth", authRouter);

// app.use("/api/ingredients", ingredientsRouter);

// app.use("/api/recipes", recipesRouter);

// app.use("/api/favorite", favoriteRouter);

// app.use("/api/own-recipes", ownRecipesRouter);

// app.use("/api/shopping-list", shoppingListRouter);

// app.use("/api/subscribe", subscribeRouter);

// app.use("/api/popular-recipe", popularRouter);

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

module.exports = app;
