import React from 'react';
import {AppBar, Toolbar, Typography , Container} from '@mui/material';
import {Link} from 'react-router-dom';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';


const Header = () => {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography  component="h1" variant='h5' fontWeight='bold' flex={1}>
                        <Link to='/' style={{color:"#fff" , textDecoration:"none"}}>
                            Venus.Blog
                        </Link>
                    </Typography>
                    <Link to='/' style={{color:"#fff"}}>
                      <ImportContactsIcon/>    
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;