import { Autocomplete, Box, Button, Container, CssBaseline, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../store/Routes/Api';
import AuthUser from "../../store/Routes/AuthUser";
import { get } from "http";
import { CompanyResponse } from "../../store/application";

const defaultTheme = createTheme();

export default  function CompanySelection() {

    const navigate = useNavigate();
    const auth = AuthUser();
    const [list,setList] = useState<string[]>([]);
    
    const getCList = async () => {

        //console.log(await auth.GetUsercompaniesList())
        var companies : CompanyResponse[] | undefined = await auth.GetUsercompaniesList();
        if (companies != undefined) {
            var mylist : string[] = [];
            for (var company of companies) {
                mylist = mylist.concat(company.companyName);
            //console.log(company.companyName)
            }
            setList(mylist);
            console.log(mylist)
        }
    }
    useEffect(() => {
        getCList(
        
    )},[])
            console.log(list)
    

    const handleClick = () => {
        navigate("/invoice");
      };
    


    const [value, setValue] = React.useState<string | null>(list[0]);
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
                        options={list}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} />}
                    />

                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Button
                            onClick={handleClick}
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