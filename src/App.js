// App.js
import './App.css';
import ProfileCard from './Components/Card';
import { useEffect, useState } from 'react';
import { fetchDataFromAPI } from './api';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchDataFromAPI();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // or display a loading spinner
  }

  const { picture, name, gender, phone } = userData;
  const dummyProps = {
    image: <img src={picture.large} alt="Profile" />,
    title: name.title,
    firstName: name.first,
    lastName: name.last,
    gender,
    phoneNumber: phone
  };

  return (
    <div className="App">
      <ProfileCard {...dummyProps} />
    </div>
  );
}

export default App;
