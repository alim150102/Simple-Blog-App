import React from 'react'
import { Paper, Typography, Box, Button} from '@material-ui/core'

export default props => {
    console.log(props);
    
    return(
        <Paper style={{padding: 16}}>
            <Typography variant="h6">
                List Blogs
            </Typography>
            {
                props.blogContent.length == 0 
                ? <Typography>Belum ada Content</Typography>
                : props.blogContent.map((blog, index) => {
                    return( 
                    <Typography 
                    key={index}
                    component='div'
                    style={{flex : 1, backgroundColor: "#f0f0f0", borderRadius: 8, padding:12, marginTop:12}} >
                        <Box component='p' fontWeight='700' >
                    {index + 1}. {blog.title}                            
                        </Box>
                        <Box>
                            {blog.content}
                        </Box>
                        <Box component='p' fontSize={12}>
                            {blog.author}
                        </Box>
                        <Button variant="outlined" size="small" style={{textAlign : "right", marginTop:12}} onClick={()=>{props.remove(index)}}>Delete</Button>
                    </Typography>
                    )
                }) 
            }
            
        </Paper>
    )
}