import  { useState } from 'react';
import { useContext } from 'react';
import MyDataContext from './myDataContext';
import axios from 'axios';

const CenterForm = () => {

    const [newItem,setNewItem] = useState('');
    const [Medicine1, setMedicine1] = useState('Medicine 1');
    const [Medicine2, setMedicine2] = useState('Medicine 2');
    const [Medicine3, setMedicine3] = useState('Medicine 3');
    const [Medicine4, setMedicine4] = useState('Medicine 4');
    const [times1, setTimes1] = useState([]);
    const [times2, setTimes2] = useState([]);
    const [times3, setTimes3] = useState([]);
    const [times4, setTimes4] = useState([]);

    const { fetchData } = useContext(MyDataContext);

    const handleInputChange = (event) => {
        setNewItem(event.target.value);
    };

    const handleAdd1 = () => {
        if (newItem.trim()) {
          setTimes1([...times1, newItem]);
          setNewItem('');
        }
    };

    const handleAdd2 = () => {
    if (newItem.trim()) {
        setTimes2([...times2, newItem]);
        setNewItem('');
    }
    };

    const handleAdd3 = () => {
    if (newItem.trim()) {
        setTimes3([...times3, newItem]);
        setNewItem('');
    }
    };

    const handleAdd4 = () => {
      if (newItem.trim()) {
          setTimes4([...times4, newItem]);
          setNewItem('');
      }
      };

    const handleMedicine1 = (e) => {
        setMedicine1(e.target.value);
    }

    const handleMedicine2 = (e) => {
        setMedicine2(e.target.value);
    }

    const handleMedicine3 = (e) => {
        setMedicine3(e.target.value);
    }

    const handleMedicine4 = (e) => {
      setMedicine4(e.target.value);
  }

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const preSerializedJson = JSON.stringify({
            [Medicine1] : times1,
            [Medicine2] : times2,
            [Medicine3] : times3,
            [Medicine4] : times4
        });
        try {
            const response = await axios.post('http://localhost:8000/upload',preSerializedJson,{ headers: { 'Content-Type': 'application/json' }} );
            console.log('Success! Response:', response);
          } catch (error) {
            console.log(preSerializedJson);
            console.error('Error submitting data:', error);
          }
          await fetchData();
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Medicine Schedule</h2>
        <input type="text" name="name1" value={Medicine1} onChange={handleMedicine1}/>
        <label>Medicine Times</label>
        <div className="times">
        <ul>
          {times1.map((item, index) => (
            <li key={index}>
              <input type="time" value={item} onChange={(e) => {
                const updatedItems = [...times1];
                updatedItems[index] = e.target.value;
                setTimes1(updatedItems);
              }} />
            </li>
          ))}
        </ul>
        <input type="time" value={newItem} onChange={handleInputChange} />
        </div>
        <button type="button" className="add" onClick={handleAdd1}>Add Time</button>
        <input type="text" name="name2" value={Medicine2} onChange={handleMedicine2}/>
        <label>Medicine Times</label>
        <div className="times">
            <ul>
            {times2.map((item, index) => (
                <li key={index}>
                <input type="time" value={item} onChange={(e) => {
                    const updatedItems = [...times2];
                    updatedItems[index] = e.target.value;
                    setTimes2(updatedItems);
                }} />
                </li>
            ))}
            </ul>
            <input type="time" value={newItem} onChange={handleInputChange} />
        </div>
        <button type="button" className="add" onClick={handleAdd2}>Add Time</button>
        <input type="text" name="name3" value={Medicine3} onChange={handleMedicine3}/>
        <label>Medicine Times</label>
        <div className="times">
            <ul>
            {times3.map((item, index) => (
                <li key={index}>
                <input type="time" value={item} onChange={(e) => {
                    const updatedItems = [...times3];
                    updatedItems[index] = e.target.value;
                    setTimes3(updatedItems);
                }} />
                </li>
            ))}
            </ul>
            <input type="time" value={newItem} onChange={handleInputChange} />
        </div>
        <button type="button" className="add" onClick={handleAdd3}>Add Time</button>
        <input type="text" name="name3" value={Medicine4} onChange={handleMedicine4}/>
        <label>Medicine Times</label>
        <div className="times">
            <ul>
            {times4.map((item, index) => (
                <li key={index}>
                <input type="time" value={item} onChange={(e) => {
                    const updatedItems = [...times4];
                    updatedItems[index] = e.target.value;
                    setTimes4(updatedItems);
                }} />
                </li>
            ))}
            </ul>
            <input type="time" value={newItem} onChange={handleInputChange} />
        </div>
        <button type="button" className="add" onClick={handleAdd4}>Add Time</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CenterForm;
