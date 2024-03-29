import express from "express";

const route = express.Router();

route.get("/", (request, response) => {
  response.status(200).json("Bem Vindo ao RoleMatch Api");
});

export default route;
