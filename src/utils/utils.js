export const pxToRem = (pxValue) => `${pxValue / 16}rem`;

export const truncateStr = (str, charCount) => {
  return str?.length > charCount
    ? str.substring(0, charCount - 1).concat('...')
    : str;
};
