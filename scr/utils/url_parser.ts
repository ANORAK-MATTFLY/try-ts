import re from 'regex';

function parseUrl(url: string): boolean {
    const pattern = /^https?:\/\//;
    return pattern.test(url);
}

export { parseUrl };