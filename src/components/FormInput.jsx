import React, { useState } from 'react'
import { Paper, FormControl, InputLabel, Input, Button, TextareaAutosize, FormGroup } from '@material-ui/core'

export default (props) => {
    // console.log(props, "ini props from input");
    const [title, setTitle] = useState('Judul')
    const [content, setContent] = useState('Content')
    const [author, setAuthor] = useState('Author')


    return(
        <Paper style={{padding: 16}}>
            <form onSubmit={()=> props.add({title,content, author})}>
            <FormGroup>
            <FormControl style={{width : "100%"}}>
                <InputLabel htmlFor="my-title">Judul</InputLabel>
                <Input 
                id="my-title" 
                aria-describedby="my-helper-text" 
                value={title} 
                onChange={(event)=> setTitle(event.target.value)}/>
            </FormControl>
            <FormControl>
                <TextareaAutosize 
                    id="content"
                    aria-label="empty textarea" 
                    style={{minHeight: 200, marginTop:16}} 
                    placeholder="Your blog content here..." 
                    value={content}
                    onChange={(event)=> setContent(event.target.value)}/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="author">Author</InputLabel>
                    <Input 
                    id="author"
                    aria-describedby="my-helper-text" 
                    value={author} 
                    onChange={(event)=> setAuthor(event.target.value)}/>
            </FormControl>
            <Button 
                variant="outlined" 
                color="primary" 
                style={{marginTop: 8}} 
                onClick={()=> props.add({title,content, author})}>Submit</Button>
            </FormGroup>
            </form>
        </Paper>
    )
}