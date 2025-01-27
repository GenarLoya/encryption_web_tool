const { exec } = require("child_process");

const command =
  "pnpx tailwindcss -i ./src/input.css -o ./public/css/tailwind.css --watch";

const tailwindProcess = () =>
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando el comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

module.exports = tailwindProcess;
