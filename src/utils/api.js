const availableTimesByDate = {
    '2024-02-17': ['19:30'],
    '2024-02-18': ['17:00', '19:00'],
    '2024-02-19': ['17:30', '18:00', '20:00', '20:30'],
    '2024-02-20': ['17:00', '18:00', '19:00', '19:30', '20:00', '20:30'],
    '2024-02-21': ['17:00', '18:00', '19:00'],
    '2024-02-22': ['17:30', '18:30', '19:30'],
    '2024-02-23': ['17:00', '18:00', '19:00'],
    '2024-02-24': ['17:00', '18:00', '19:00'],
    '2024-02-25': ['17:30', '18:30', '19:00'],
    '2024-02-26': ['17:00', '18:00', '19:30'],
    '2024-02-27': ['17:00', '18:00', '20:00'],
    '2024-02-28': ['17:30', '18:00', '20:30'],
    '2024-02-29': ['17:00', '18:00', '18:30', '20:00'],
    '2024-03-01': ['17:00', '20:30'],
    '2024-03-02': ['17:30', '18:00', '18:30', '19:00', '20:30'],
    '2024-03-03': ['18:00', '19:00', '19:30', '20:00'],
    '2024-03-04': ['17:00', '19:00', '20:30'],
    '2024-03-05': ['17:30', '18:30', '19:30'],
    '2024-03-06': ['17:30', '18:00', '19:30', '20:30'],
    '2024-03-07': ['17:00', '17:30', '19:00'],
    '2024-03-08': ['17:00', '18:00', '20:00'],
    '2024-03-09': ['17:00', '17:30', '19:00', '20:30'],
    '2024-03-10': ['17:30', '18:00', '16:00'],
    '2024-03-11': ['17:00', '20:30'],
    '2024-03-12': ['17:30', '18:00', '19:00'],
    '2024-03-13': ['17:00', '18:00', '19:00', '19:30', '20:30'],
    '2024-03-14': ['17:00', '18:00', '19:00'],
    '2024-03-15': ['17:00', '18:00', '19:00'],
    '2024-03-16': ['18:00', '19:00', '19:30', '20:00'],
    '2024-03-17': ['17:00', '18:00', '19:30'],
    '2024-03-18': ['17:00', '18:30', '19:00'],
    '2024-03-19': ['17:30', '18:00', '20:00', '20:30'],
    '2024-03-20': ['17:00', '18:00', '19:00', '19:30', '20:00', '20:30'],
    '2024-03-21': ['17:00', '18:00', '19:00'],
    '2024-03-22': ['17:30', '18:30', '19:30'],
    '2024-03-23': ['17:00', '18:00', '19:00'],
    '2024-03-24': ['17:00', '18:00', '19:00'],
    '2024-03-25': ['17:30', '18:30', '19:00'],
    '2024-03-26': ['17:00', '18:00', '19:30'],
    '2024-03-27': ['17:00', '18:00', '20:00'],
    '2024-03-28': ['17:30', '18:00', '20:30'],
    '2024-03-29': ['17:00', '18:00', '18:30', '20:00'],
    '2024-03-30': ['17:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'],
    '2024-03-31': ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
  };

  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        if (date && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
          setTimeout(() => {
              if (date) {
                  if (availableTimesByDate[date] && availableTimesByDate[date].length !== 0) {
                      resolve(availableTimesByDate[date]);
                  } else {
                      resolve(['None available']);
                  }
              } else {
                  reject(new Error(`Invalid date`));
              }
          }, 500);
        }
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date.value] = availableTimesByDate[formData.date.value].filter(time => time !== formData.time.value);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true);
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000);
    });
  };

  export { fetchAPI, submitAPI };