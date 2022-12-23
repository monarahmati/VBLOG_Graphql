import React , {useState} from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify'
import { SEND_COMMENT } from '../Graphql/MutationSend';
import 'react-toastify/dist/ReactToastify.css';


const CommentFolder = ({slug}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [pressed, setPressed ] = useState(false);
    const [sendComment, { loading , errors , data }] = useMutation(SEND_COMMENT, {
        variables: { email , name , slug , text },
    })


    if (errors) return <h1>ERRORS...</h1>

    const  clickHandler = () => {
        if ( text && name && email ) {
            sendComment();
            setPressed(true);
        } else {
            toast.warn(" your filed is empety", {position:"top-center"})
        }
    };

    if ( data && pressed ) {
        toast.success("comment send successful" ,
        {position:"top-center" });
        setPressed(false);
    }


    return (
        <Grid container sx={{
            boxShadow:"rgba(0,0,0,0.4) 0px 4px 12px 2px" ,
            borderRadius: 2 ,
            py: 2 ,
            mt: 2 ,
            }}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h4" fontWidth={700} color="primary">
                    Comment Form
                </Typography>
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="Username"
                variant='outlined'
                sx={{width:"100%"}}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} m={2}>
                <TextField
                label="Email"
                variant='outlined'
                sx={{width:"100%"}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>      
            <Grid item xs={12} m={2}>
                <TextField
                label="Comment Text"
                variant='outlined'
                sx={{width:"100%"}}
                value={text}
                onChange={(e) => setText(e.target.value)}
                multiline
                minRows={3}
                />
            </Grid>
            <Grid item xs={12} m={2} >
                {
                    loading ? <Button variant="contained" disabled>sending...</Button>
                    : <Button variant='contained' onClick={ clickHandler } > Send</Button>
                }
                <ToastContainer/>
            </Grid>
        </Grid>
    );
};

export default CommentFolder;