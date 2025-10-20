'use strict';

var EOL = require('os').EOL;

module.exports = function(entity, naming) {
    return [
        '@use "src/styles/helpers/mixins";',
        '@use "src/styles/helpers/variables" as var;',
        '',
        '.' + naming.stringify(entity) + ' {',
		'',
        '}',
        ''
    ].join(EOL);
};
