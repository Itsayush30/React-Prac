fetch('https://xyz.com')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });
