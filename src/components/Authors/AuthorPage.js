import React from 'react';
import CardEL from '../shared/CardEL';
import sanitizehtml from 'sanitize-html';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import GET_AUTHOR_INFO from '../Graphql/QueriesAuthor';
import { Container , Grid ,Avatar, Typography } from '@mui/material';
import Loader from '../shared/Loader';


const AuthorPage = () => {

    const { slug } = useParams();
 

    const {loading , errors , data } = useQuery(GET_AUTHOR_INFO , { 
        variables: {slug : slug } ,
    });
    
    if (loading) return <Loader/>;

    if (errors)   return <h3>ERRORS...</h3>;


    const { 
        author : { avatar , name , field , description , posts },
    } = data; 

    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid 
                   item
                   xs={12}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                >
                    <Avatar 
                       src={avatar.url} 
                       sx={{ width: 250 , height: 250 }}
                    />

                    <Typography component='h3' variant='h5' fontWeight={700} mt={4}>
                        {name}
                    </Typography>
                    <Typography component='p' variant='h5' color="text.secondary" mt={2}>
                        {field}
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div
                    dangerouslySetInnerHTML={{ 
                        __html:sanitizehtml(description.html)
                    }}
                    ></div>
                </Grid>

                <Grid item xs={12} mt={5}>
                    <Typography component="h3" variant="h5" fontWeight={700}>
                      {name} articles
                    </Typography>

                    <Grid container spacing={2} mt={2}>
                       {posts.map((post) => (
                         <Grid item xs={12}  key={post.id} sm={6}  md={4} >
                            <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
                         </Grid>
                        ))}
                    </Grid>

                </Grid>
            </Grid>          
        </Container>
    );
};



export default AuthorPage;