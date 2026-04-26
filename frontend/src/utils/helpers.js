export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
};

export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
