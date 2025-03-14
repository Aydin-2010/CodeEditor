const editor = CodeMirror.fromTextArea(document.getElementById("InputField"), {
  mode: "javascript",
  theme: "dracula",
  lineWrapping: true,
  lineNumbers: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  foldGutter: false,
});
