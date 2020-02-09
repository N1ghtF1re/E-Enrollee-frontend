const toWords = (input) => {
    const result = input.replace(/([A-Z])/g, ' $1');

    return result.charAt(0)
        .toUpperCase() + result.slice(1);
};

export const getLabel = (label, source) => {
    const parts = source && source.replace(/^_/, '').split('.');
    const isLabelDefined = typeof label !== 'undefined';

    return isLabelDefined ? label : toWords(parts[parts.length - 1]);
};
