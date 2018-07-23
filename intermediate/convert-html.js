'use strict';

function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };

  return str.split('').map(el => entities[el] || el).join('');
}

convertHTML('Dolce & Gabbana');
