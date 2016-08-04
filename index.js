const montserrat = require.resolve('@typopro/web-montserrat/TypoPRO-Montserrat.css');
const text = 'the quick brown fox jumps over the lazy dog';

const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

function renderHeader(tag) {
  return `<${tag}>${text}</${tag}>`;
}

const html = headerTags.map(renderHeader).join('');


console.log(`<!doctype HTML>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="${montserrat}">
    <style>
    body {
      font-family: 'TypoPRO Montserrat';
    }
    .uppercase {
      text-transform: uppercase;
    }
    .lowercase {
      text-transform: lowercase;
    }
    </style>
  </head>
  <body>
   <div class='lowercase'>${html}</div>
   <div class='uppercase'>${html}</div>
 </body>
</html>`);
