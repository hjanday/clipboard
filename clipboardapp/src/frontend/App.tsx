import { ButtonHTMLAttributes, ChangeEvent, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  // Create state for the snippet title
  const [data, setData] = useState({
    snippetTitle: "", snippetDesc: ""
  });


  // State for when user actually clicks a button to submit
  const [submit, setSubmit] = useState({
    submitTitle: "", submitDesc: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(name, value)
  };

  // handle input 
  const handleSubmissionTitle = () => {
    setSubmit((prevSubmit) => ({
      ...prevSubmit,
      submitTitle: data.snippetTitle,
    }));
  };

  const handleSubmissionDesc = () => {
    setSubmit((prevSubmit) => ({
      ...prevSubmit,
      submitDesc: data.snippetDesc,
    }));
  };





  return (
    <>

      <h1>Clipboard</h1>

      <div className="title">
        {/* Define user submission for their data */}
      <TextField
        id="outlined-basic"
        name="snippetTitle"
        type="text"
        label="Snippet Title"
        required
        // value={data.snippetTitle}
        value={data.snippetTitle}
        onChange={handleChange}
        placeholder="Enter a title"
        sx={{ // sx prop
          input: {
            color: "white",
          
          }
        }}
      />

      <Button id='title-btn' type='button' onClick={handleSubmissionTitle} variant="contained"> Enter Title </Button>


      <br></br>

      <TextField
        id="outlined-basic"
        name="snippetDesc"
        type="text"
        required
        label="Snippet Desc"
        value={data.snippetDesc}
        onChange={handleChange}
        placeholder="Enter a desc"
        sx={{
          input: {
            color: "white"
          }
        }}
      />

<Button id ='desc-btn' variant="contained" type='button' onClick={handleSubmissionDesc}> Enter Desc </Button>

    <p>Title: {submit.submitTitle}</p>
    <p>Snippet: {submit.submitDesc}</p>
      </div>


      


    </>
  )
}

export default App
