CodeMirror.defineSimpleMode("customLang", {
  start: [
    { regex: /"(.*?)"/, token: "quotation" }, // Anything inside quotes
    { regex: /\b(print|println)\b/, token: "print" }, // print/println keywords
    { regex: /[+\-*/=<>!&|]/, token: "symbol" }, // Arithmetic & Conditional symbols
    { regex: /\b(int|!int)\b/, token: "int" }, // "int" and "!int" keywords
    { regex: /\b(true|false|\d+)\b/, token: "value" } // Boolean & numbers
  ]
});

// Apply the mode to CodeMirror
let editor = CodeMirror.fromTextArea(document.getElementById("InputField"), {
  mode: "customLang",
  lineNumbers: true,
  theme: "custom-theme",
  matchBrackets: true
});
