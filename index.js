const express = require("express");

const mysql = require("mysql2");

const app = express();

let conexion = mysql.createConnection({
  host: "localhost",
  database: "eilish_vibes",
  user: "root",
  password: "Argentina_123",
});

app.set("view engine", "ejs");
//datos que vienen de otra pagina u otra ubicacion antes de las rutas
app.use(express.static("src"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("singUp");
});

app.post("/validar", function (req, res) {
  const datos = req.body;
  console.log(datos);

  let correo = datos.email;
  let password = datos.contrasenia;

  let buscar = "SELECT *FROM usuarios WHERE email='" + correo + "'";

  conexion.query(buscar, function (error, row) {
    if (error) {
      throw error;
    } else {
      if (row.length > 0) {
        console.log("No se puede registrar usuario ya existe");
      } else {
        let registrar =
          "INSERT INTO usuarios (email,contrasenia) VALUES ('" +
          correo +
          "','" +
          password +
          "')";
        conexion.query(registrar, function (error) {
          if (error) {
            throw error;
          } else {
            console.log("DATOS ALMACENADOS CORRECTAMENTE");
          }
        });
      }
    }
  });
});

app.listen(3000, function () {
  console.log("Servidor creado http://localhost:3000");
});
