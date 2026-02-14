const normalizeValue = (value = '') => String(value).toLowerCase();

// eslint-disable-next-line import/prefer-default-export
export const searchHelper = (array = [], searchStr = '') => {
  const query = normalizeValue(searchStr).trim();

  if (!query) {
    return array;
  }

  return array.filter((item) => {
    const direction = normalizeValue(item?.direction);
    const flightNumber = normalizeValue(item?.flight_number);

    return direction.includes(query) || flightNumber.includes(query);
  });
};
