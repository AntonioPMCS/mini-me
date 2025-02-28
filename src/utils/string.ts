export const truncateMiddle = (text: string, startLength = 6, endLength = 6) => {
  if (text.length <= startLength + endLength) return text; // Don't truncate if not needed
  return `${text.slice(0, startLength)}...${text.slice(-endLength)}`;
};
