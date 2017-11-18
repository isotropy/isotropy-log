let outputToConsole = true;

export function init(options) {
  outputToConsole =
    typeof options.outputToConsole !== "undefined"
      ? options.outputToConsole
      : true;
}
export function log(object) {
  if (outputToConsole) {
    console.log(object);
  }
}
