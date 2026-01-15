import { RegExp } from 'regexp';

const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

const parseUrl = (url: string): boolean => {
    return urlRegex.test(url);
};

export default parseUrl;