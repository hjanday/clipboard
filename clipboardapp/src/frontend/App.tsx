import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  // Create state for the snippet title
  const [data, setData] = useState({
    snippetTitle: "", snippetDesc: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };



  return (
    <>

      <h1>Clipboard</h1>

      <div className="title">
        {/* Define user submission for their data */}
        <label htmlFor="title">Title: </label>
      <input
        id="data.snippetTitle"
        name="data.snippetTitle"
        type="text"
        required
        // value={data.snippetTitle}
        defaultValue={data.snippetTitle}
        onChange={handleChange}
        maxLength={50}
        placeholder="Enter a title"
      />

<label htmlFor="desc">Desc: </label>
      <input
        id="data.snippetDesc"
        name="data.snippetDesc"
        type="text"
        required
        defaultValue={data.snippetDesc}
        onChange={handleChange}
        maxLength={50}
        placeholder="Enter a desc"
      />

    <p>Title: {data.snippetTitle}</p>
    <p>Snippet: {data.snippetDesc}</p>
      </div>


      


    </>
  )
}

export default App
