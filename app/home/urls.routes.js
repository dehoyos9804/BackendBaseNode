const express = require("express");
const routers = express.Router();

const HomeAPIView = require("./views/home.view");
const home = new HomeAPIView();

//Definir rutas del módulo
routers.get("", home.get.bind(HomeAPIView));
routers.post("", home.post.bind(HomeAPIView));
routers.put("", home.put.bind(HomeAPIView));
routers.delete("", home.delete.bind(HomeAPIView));

module.exports = routers;
