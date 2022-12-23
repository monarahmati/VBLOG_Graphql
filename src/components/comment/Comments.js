import React from 'react';
import { useQuery } from '@apollo/client';
import {Avatar, Grid, Typography , Box} from '@mui/material'
import {GET_POST_COMMENT} from '../Graphql/QueriesComment'

const Comments = ({slug}) => {

    const {data , loading , errors } = useQuery(GET_POST_COMMENT , {
        variables: {slug}
    })

    if (loading) return null ; 
    
    if (errors)  return <h1>errors</h1>;  


    return (
       <Grid container 
        sx={{
            boxShadow:"rgba(0,0,0,0.4) 0px 4px 12px 2px" ,
            borderRadius: 2 ,
            py: 2 ,
            mt: 2 ,
        }}>
        <Grid item xs={12} m={2}>
            <Typography component="p"  variant="h6" fontWeight={700} color='primary'>
                Comments
            </Typography>
            {data.comments.map((comment) => (
                <Grid 
                  item 
                  xs={12} 
                  key={comment.id} 
                  m={2} 
                  p={2} 
                  border="1px silver solid"
                  borderRadius={1} 
                >
                    <Box component="div" display="flex" alignItems="center">
                        <Avatar>{comment.name[0]}</Avatar>
                        <Typography component='span' variant='p' fontWeight={700} m={2} >
                            {comment.name}
                        </Typography>
                    </Box>
                    <Typography component='p' variant='p' m={1}>
                        {comment.text}
                    </Typography>
                </Grid>
            ))}
         </Grid>
       </Grid>
    );
};

export default Comments;