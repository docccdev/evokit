const fs = require('fs-extra');
const path = require('path');
const rif = require('replace-in-file');

const processArgv = process.argv.slice(2);

const BLOCK_NAME = processArgv[0];
const PACKAGE_VERSION = processArgv[1];

const logSuccess = (...args) => console.log('\x1b[32m%s\x1b[0m', ...args);
const logError = (...args) => console.log('\x1b[31m%s\x1b[0m', ...args);

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

if (BLOCK_NAME && PACKAGE_VERSION) {
    const BLOCK_NAME_CAPITALIZE = capitalize(BLOCK_NAME);
    const PACKAGE_NAME = `evokit-${processArgv[0]}`;
    const TEMPLATE_DIR = path.join(__dirname, './template');
    const PACKAGE_DIR = path.join(__dirname, '../packages', PACKAGE_NAME);

    const replace = (from, to) => {
        rif.sync({
            files: `${PACKAGE_DIR}/**/*`,
            from: from,
            to: to,
        });
    };

    const copy = (dir) => {
        fs.copySync(TEMPLATE_DIR, dir);
    }

    if (fs.pathExistsSync(PACKAGE_DIR)) {
        logError(`Folder is already exists ${PACKAGE_DIR}`);
        return;
    }

    copy(PACKAGE_DIR);
    replace([
        /\${PACKAGE_NAME}/g,
        /\${PACKAGE_VERSION}/g,
        /\${BLOCK_NAME}/g,
        /\${BLOCK_NAME_CAPITALIZE}/g,
    ], [
        PACKAGE_NAME,
        PACKAGE_VERSION,
        BLOCK_NAME,
        BLOCK_NAME_CAPITALIZE,
    ]);
    logSuccess(`Create package ${PACKAGE_NAME}@${PACKAGE_VERSION}`);
} else {
    logError(`
        Sorry :(
        Please set arguments PACKAGE NAME and PACKAGE VESRION.
        -------
        For example: npm run new-block something 1.0.0
    `);
}
