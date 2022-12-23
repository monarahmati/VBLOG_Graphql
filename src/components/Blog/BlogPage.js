import   React from 'react';
import   Loader from '../shared/Loader';
import { Avatar, Box, Container , Grid , Typography } from '@mui/material';
import { useQuery }  from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import   GET_POST_INFO from '../Graphql/QuiresPost';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import sanitizeHtml from 'sanitize-html';
import CommentFolder from '../comment/CommentFolder';
import Comments from '../comment/Comments';


const BlogPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { loading , errors , data } = useQuery(GET_POST_INFO , {
        variables: {slug} ,
    });
  

    if(loading) return <Loader/>;

    if(errors) return <h1>Errors...</h1>;


    
    return (
        <Container maxWidth="lg">
            <Grid container >
                <Grid item  xs={12}  mt={9} display='flex' justifyContent="space-between" >

                    <Typography
                    component="h2"
                    variant="h3"
                    color="primary"
                    fontWidth={700}>
                        {data.post.title}
                    </Typography>

                    <ArrowCircleRightRoundedIcon  
                        style={{marginTop:"20px"}} 
                        color="primary" 
                        fontSize='large' 
                        onClick={() => navigate(-1)}
                    />
                   
                </Grid>
                <Grid item xs={12}  mt={6}>
                    <img   
                    src={data.post.coverPhoto.url}  
                    alt={data.post.slug}
                    width='100%'
                    style={{ borderRadius: 16 }} />
                </Grid>
                <Grid  item  xs={12} mt={7} display="flex" alignItems="center" style={{ marginLeft : "20px"}}>
                    <Avatar 
                     src={data.post.author.avatar.url}
                     sx={{ width:80 , height:80 , marginLeft: 2}}
                    />

                    <Box component="div">
                        <Typography component='p' variant="h5" fontWeight={700} style={{ marginLeft : "15px"}}>
                            {data.post.author.name}
                        </Typography>
                        <Typography component='p' variant="p" color="text.secondary" style={{ marginLeft : "15px"}}>
                            {data.post.author.field}
                        </Typography>
                    </Box>

                </Grid>
                <Grid item  xs={12} mt={6}>
                    <div dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(data.post.contect.html),
                    }}
                    ></div>
                </Grid>
                <Grid item xs={12}  >
                    <CommentFolder slug={slug}/>
                </Grid>
                <Grid item xs={12}  >
                    <Comments slug={slug}/>
                </Grid>
            </Grid>            
        </Container>
    );
};

export default BlogPage;