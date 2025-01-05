import { ButtonHTMLAttributes, ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  // Create state for the snippet title
  const [data, setData] = useState({
    snippetTitle: "", snippetDesc: ""
  });


  // State for when user actually clicks a button to submit
  const [submit] = useState({
    submitTitle: "", submitDesc: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(name, value)
  };

  const handleSubmissionTitle = () =>{
    submit.submitTitle = data.snippetTitle;
  }
  const handleSubmissionDesc = () => {
    submit.submitDesc = data.snippetDesc;
  }





  return (
    <>

      <h1>Clipboard</h1>

      <div className="title">
        {/* Define user submission for their data */}
        <label htmlFor="title">Title: </label>
      <input
        id="data.snippetTitle"
        name="snippetTitle"
        type="text"
        required
        // value={data.snippetTitle}
        value={data.snippetTitle}
        onChange={handleChange}
        maxLength={50}
        placeholder="Enter a title"
      />

      <button id='title-btn' type='button' onClick={handleSubmissionTitle}> Enter Title </button>


      <br></br>

<label htmlFor="desc">Desc: </label>
      <input
        id="data.snippetDesc"
        name="snippetDesc"
        type="text"
        required
        value={data.snippetDesc}
        onChange={handleChange}
        maxLength={50}
        placeholder="Enter a desc"
      />

<button id ='desc-btn' type='button' onClick={handleSubmissionDesc}> Enter Desc </button>

    <p>Title: {submit.submitTitle}</p>
    <p>Snippet: {submit.submitDesc}</p>
      </div>


      


    </>
  )
}

export default App
