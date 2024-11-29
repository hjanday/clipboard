import { ChangeEvent, SetStateAction, useState } from 'react'
import './App.css'

function App() {
  // this is state - use as mutable object (let it be empty object)
  const [data, setData] = useState({
    userData: ""
  });
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data, 
      userData: event.target.value,
    });
  };


  return (
    <>

      <h1>Clipboard</h1>
      <div className="card">
        {/* Define user submission for their data */}
        <input name="user-submit" value={data.userData} onChange={handleInputChange}/>

        {/* Create form */}
        <button onClick={() => console.log(data.userData)}>
          Send Input
        </button>

      </div>

    </>
  )
}

export default App
