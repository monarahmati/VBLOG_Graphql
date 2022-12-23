import React from 'react';
import { Link } from 'react-router-dom';
// import {GET_BLOGS_INFO } from '../Graphql/QueriesBlog';

import { 
    Avatar, 
    Button, 
    Card, 
    CardActions,  
    CardContent, 
    CardHeader, 
    CardMedia,
    Divider,
    Typography } 
    from '@mui/material';


    const CardEL = ({ title, slug, coverPhoto , author }) => {
        return (
            <Card sx={{ boxShadow: "rgba(0,0,0,0.3) 0px 4px 12px" , borderRadius: 4 }}>

            {   author && (
                    <CardHeader
                       avatar={ <Avatar src={author.avatar.url} sx={{ marginRight: 0.5 }}/>}
                       title={ 
                           <Typography component="p" variant='p' color="text.secondary">
                              {author.name}
                            </Typography>
                       } 
                    />
                )}

            <CardMedia
                    component='img'
                    height='194'
                    image={(coverPhoto.url)}
                    alt={slug}
            />

            <CardContent>
                <Typography
                  component='h3'
                  variant='h6'
                  color="text.primary"
                  fontWeight={600}
                >
                  {title}
                </Typography>
            </CardContent>
            <Divider variant='middle' sx={{ margin: "10px" }} />
            <CardActions>
                <Link 
                    to={`/blogs/${slug}`} 
                    style={{ textDecoration:"none" , width:"100%" }}>    

                    <Button
                      variant='outlined'
                      size='small'
                      sx={{ width: '100%' , borderRadius: 3 }}
                    >
                    See More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default CardEL;