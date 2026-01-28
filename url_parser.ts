import { URL } from 'url';
const urlParser = (url: string) => {
  const parsedUrl = new URL(url);
  const regex = /^https?:\/\//;
  if (regex.test(url)) {
    return parsedUrl;
  } else {
    throw new Error('Invalid URL');
  }
};
export default urlParser;