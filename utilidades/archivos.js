const fs = require("fs");
const chalk = require("chalk");

exports.guardarSaludo = (text) => {
  fs.writeFile(
    "./textos/saludo.txt",
    `Hola ${text}. Encantado de saludarte`,
    (err) => {
      if (err) {
        console.log(
          chalk.red.bold("no he podido poner el texto donde querias")
        );
        process.exit();
      }
    }
  );
};
