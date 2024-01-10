export function decodeHtmlEntities(text) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(text, "text/html");
  return doc.documentElement.textContent;
}
