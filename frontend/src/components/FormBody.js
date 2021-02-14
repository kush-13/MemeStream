import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

const FormBody = () => {
  const [postData, setPostData] = useState({
    name: "",
    caption: "",
    url: ""
  });

  const clear = () => {
    setPostData({
      name: "",
      caption: "",
      url: ""
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(postData);
      axios.post("https://heaby-driver.herokuapp.com/memes", postData);
    } catch (error) {
      console.log(error.message);
    }
    clear();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setPostData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  return (
    <postsProvider>
      <div className="content__formBody">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Push A Meme</h2>

          <TextField
            className="givePadding"
            name="name"
            variant="outlined"
            label="Author"
            fullWidth
            value={postData.name}
            onChange={handleChange}
          ></TextField>

          <TextField
            className="givePadding"
            name="caption"
            variant="outlined"
            label="Caption"
            fullWidth
            value={postData.caption}
            onChange={handleChange}
          ></TextField>

          <TextField
            className="givePadding"
            name="url"
            variant="outlined"
            label="URL"
            fullWidth
            value={postData.url}
            onChange={handleChange}
          ></TextField>

          <Button
            className="givePadding"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Upload !
          </Button>
        </form>
      </div>
    </postsProvider>
  );
};

export default FormBody;
