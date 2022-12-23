import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../Graphql/QueriesAuthors';
import { Avatar, Grid, Typography ,Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';

const Authors = () => {
    
    const {loading , errors , data } = useQuery(GET_AUTHORS_INFO)

    if (loading) return <Loader/>
  
    if (errors)   return <h3>ERRORS...</h3>

    
    const {authors} = data;
    return (
        <Grid container sx={{boxShadow:"rgba(0,0,0,0.4) 0px 8px 13px" , borderRadius: 4 }} >
            {authors.map((author) => (
                <React.Fragment key={author.id}>

                <Grid item xs={12} padding={2} > 
                    <Link 
                    to={`/authors/${author.slug}`} 
                    style={{
                        display: "flex" , 
                        alignItems: "center" , 
                        textDecoration:"none"
                        }}>
                        
                    <Avatar src={author.avatar.url} sx={{marginRight: 2 }}/>
                    <Typography component='p' variant='p' color="text.secondary">
                        {author.name}
                    </Typography>
                    </Link>
                </Grid>
               
                <Grid item xs={12}>
                    <Divider variant="middle" />
                </Grid>
            
                </React.Fragment>
            )) }
        </Grid>
    );
};

export default Authors;