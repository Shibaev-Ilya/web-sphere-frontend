'use strict';

var EOL = require('os').EOL;

module.exports = function(entity, naming) {
    return [
        '@use \'src/styles/helpers/index\' as *;',
        '',
        '.' + naming.stringify(entity) + ' {',
		'',
        '}',
        ''
    ].join(EOL);
};
