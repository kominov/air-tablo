// eslint-disable-next-line import/prefer-default-export
export const searchHelper = (array = [], searchStr = '') => array.filter((t) => t?.direction
  .toLowerCase()
  .includes(searchStr)
        || t?.flight_number
          .toLowerCase()
          .includes(searchStr));
