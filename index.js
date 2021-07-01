const { guardarSaludo } = require("./utilidades/archivos");
const { program } = require("commander");
const chalk = require("chalk");

program.option("-n, --nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const options = program.opts();
if (options.nombre) {
  guardarSaludo(options.nombre);
  console.log("mira el archivo saludo.txt");
} else {
  console.log(chalk.yellow("Ha escrito mal todo"));
  return;
}
