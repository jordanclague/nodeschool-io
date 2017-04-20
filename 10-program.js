let username = process.argv[2];
let comment = process.argv[3];

console.log(html`<b>${username} says</b>: "${comment}"`);

function escapeString(s) {
  let replacements = {
    "'": "&apos;",
    "\"": "&quot;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;"
  };  
  return s.split('').map(c => replacements[c] ? replacements[c] : c).join('');
}

function html(stringParts, ...stringReplacements) {
  var result = stringParts[0];
  for (var i = 0; i < stringReplacements.length; i++) {
    result += escapeString(stringReplacements[i]) + stringParts[i + 1];
  }
  return result;
}
