export const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data)
      return data.results[0];
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  