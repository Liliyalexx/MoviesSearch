import { useState } from "react";
 const Form = ({movieSearch}) => {
    const [formData, setFormData] = useState({title:''});
    
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        movieSearch(formData.title)
    }
    return (
      <div>
        <form onSubmit={handleSubmit} action=''>
          <input type='text' name='title' placeholder='Movie Title...' onChange={handleChange}/>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  };
  export default Form;