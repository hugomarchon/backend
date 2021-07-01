import express, { json } from "express";

const app = express();

app.use(json());

const PORT = 3003;

app.get("/gloriasol", (request, response) => {
  response.send("Glória ao Sol");
});

app.post("/bhaskara", (request, response) => {
  let a = request.body.a;
  let b = request.body.b;
  let c = request.body.c;

  let delta = b * b - 4 * a * c;
  let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
  let x2 = ((-b - Math.sqrt(delta)) / 2) * a;

  response.send("Raizes: " + `${x1}` + "; " + `${x2}`);
});

app.delete("/triangulo/:lado1-:lado2-:lado3", (request, response) => {
  let lado1 = parseFloat(request.params.lado1);
  let lado2 = parseFloat(request.params.lado2);
  let lado3 = parseFloat(request.params.lado3);

  if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    response.send("O triângulo é equilátero");
  }
  if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    response.send("O triângulo é escaleno.");
  } else {
    response.send("O triângulo é isósceles.");
  }
});
app.listen(PORT, () => {
  console.log("Rodando backend na porta " + PORT);
});
