import CenterForm from './components/CenterForm'
import RightSection from './components/RightSection'
import LeftSection from './components/LeftSection'
import MyDataContext from './components/myDataContext';
import {useState} from 'react'
import './App.css'

function App() {


  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/latest');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="App">
      <MyDataContext.Provider value={{ data, fetchData }}>
        <LeftSection />
        <CenterForm />
        <RightSection />
      </MyDataContext.Provider>
    </div>
  )
}

export default App
