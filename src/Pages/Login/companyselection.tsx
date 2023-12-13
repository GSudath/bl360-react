import { Autocomplete, Box, Button, Container, CssBaseline, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const defaultTheme = createTheme();

 var url : any = "https://bluelotus360.co/CoreAPI/api/Authentication/GetUserCompanies";
 var hdr : any = {
  "Content-type" : "application/json",
  "IntegrationID":"1aa6a39b-5f54-4905-880a-a52733fd6105"
};

type CompanyResponse = {
    CompanyKey : number,
    CompanyCode : string,
    CompanyName : string
  }

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    // var savedToken = await localStorage.getItem('TokenResponse.token');
    // if(savedToken != null)
    // {
    // }
};

export default function CompanySelection() {

    var _req : CompanyResponse = {
        CompanyKey : 1,
        CompanyCode: '',
        CompanyName: ''
    };

    // const response = await axios.post(url, _req, {headers:hdr});

    // console.log(response);

    const options = ['Demo Company'];
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box 
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                    <Typography component="h1" variant="h5">
                        Select a Company
                    </Typography>
                    
                    <Autocomplete
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            CONTINUE...
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}