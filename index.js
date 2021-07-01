const { guardarSaludo } = require("./utilidades/archivos");
const { program } = require("commander");
const chalk = require("chalk");

program.option("-n, --nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const options = program.opts();
if (
  options.nombre !== undefined &&
  options.nombre !== "" &&
  options.n !== undefined &&
  options.n !== ""
) {
  console.log("Mira el archivo saludo.txt");
  guardarSaludo(options.nombre);
} else {
  console.log(
    chalk.yellow("La peticion se hace con  ") +
      chalk.yellowBright("node index --nombre=<Tu nombre>") +
      chalk.yellow("  a la entrada de la terminal")
  );
}
