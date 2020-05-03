import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Paper, Button } from '@material-ui/core';
import FormInput from './components/FormInput';
import ListBlog from './components/ListBlog';


export default function SimpleContainer() {
  const [blogs , setBlogs] = useState([])

  const removeBlog = (index) =>{
    // console.log(index);
    const data = [...blogs]
    data.splice(index, 1)
    setBlogs(data)
  }
  return (
    <React.Fragment>
      <Container style={{paddingTop : 16}}>
      <Grid container spacing={3}>
      <Grid item xs={4} >
          <FormInput add={(blog)=>{setBlogs([...blogs, blog])}}/>
      </Grid>
      <Grid item xs={8} >
        <ListBlog blogContent={blogs} remove={removeBlog}/>    
      </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}
