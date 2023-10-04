function sortData(input) {
    const { data, condition } = input;
  
    let sortedData = [...data];
  
    if (condition.exclude) {
      condition.exclude.forEach(rule => {
        sortedData = sortedData.filter(item => {
          return !Object.entries(rule).every(([key, value]) => item[key] === value);
        });
      });
    }
  
    if (condition.sortBy) {
      sortedData.sort((a, b) => {
        return condition.sortBy.reduce((ab, key) => {
          const aValue = a[key];
          const bValue = b[key];
          
          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return ab || aValue.localeCompare(bValue, undefined, { numeric: true });
          } else {
            return ab || (aValue - bValue); 
          }
        }, 0);
      });
    }

    if (condition.include) {
      condition.include.forEach(rule => {
        sortedData = sortedData.filter(item => {
          return Object.entries(rule).every(([key, value]) => item[key] === value);
        });
      });
    }
  
    return { result: sortedData };
  }
  
  module.exports = { sortData };