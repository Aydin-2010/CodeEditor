var editor = CodeMirror.fromTextArea(document.getElementById("InputField"), {
    mode: "javascript",  // Change this to match your language mode
    theme: "darcula",    // Dark theme (or use "monokai", "dracula", etc.)
    lineNumbers: true,   // Show line numbers
    lineWrapping: true,  // Wrap lines instead of horizontal scroll
    matchBrackets: true, // Highlight matching brackets
    autoCloseBrackets: true, // Auto-close brackets
    /*foldGutter: true,    // Enable code folding
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]*/
});
