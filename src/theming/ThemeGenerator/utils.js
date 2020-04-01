import escapeStrRegexp from 'escape-string-regexp';

const TEMPLATE_NAME_KEY = 'TEMPLATE_NAME';

const replaceText = (source, from, to) => {
    const newRegExp = new RegExp(escapeStrRegexp(from), 'g');
    return source.replace(newRegExp, to);
};

export const downloadFile = (filename, text) => {
    const element = document.createElement('a');

    element.setAttribute(
        'href',
        `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

export const replaceThemeCss = (themeCss, themeName, rootValues) => {
    let result = replaceText(themeCss, TEMPLATE_NAME_KEY, themeName);

    Object.keys(rootValues).forEach(key => {
        const value = !!rootValues[key] ? rootValues[key] : 'transparent';
        result = replaceText(result, key, value);
    });

    return result;
};
