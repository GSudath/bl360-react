import { Grid, Paper,Avatar,Typography, TextField, Button } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React from "react";

const Login = () => {
    const paperStyle = {padding: '30px 20px', width: 300, height: 400 , margin: "20px auto"}
    const headerStyle = {margin: 0, align: 'justify-center'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid>
                    <div className="d-flex justify-center">
                        <Avatar>

                        </Avatar>
                    </div>
                    <h2 style={headerStyle}>Sign In</h2>
                    <Typography variant="caption">Login with your Credentials.</Typography>
                    <form>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button variant="contained">Sign In</Button>
                    </form>                  
                </Grid>
            </Paper>
        </Grid>
    );
};

export default Login;