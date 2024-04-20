import { useContext,useEffect } from 'react';
import MyDataContext from './myDataContext';

const RightSection = () => {
  const { data,fetchData } = useContext(MyDataContext);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


  return (
    <div className='right'>
    <h2>Latest Medicine Data</h2>
      {data && (
        <ol>
          {Object.entries(data).map(([key, values]) => (
            <li key={key}>
              <b>{key}:</b>
              <ol>
                {values.map(value => (
                  <li key={value}>{value+ " Hours"}</li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default RightSection;
