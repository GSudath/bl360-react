import { useEffect, useState } from "react"
import { Box, Button, Container, CssBaseline, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import axios,{AxiosResponse} from "axios";
import { useNavigate } from "react-router-dom";
import { CompanyResponse, TokenRequest, TokenResponse, companyResponse, tokenRequest } from "../../store/application";

const defaultTheme = createTheme();
 var url : any = "https://bluelotus360.co/CoreAPI/api/Authentication/Authenticate";
 var hdr : any = {
  "Content-type" : "application/json",
  "IntegrationID":"1aa6a39b-5f54-4905-880a-a52733fd6105"
};

export default function Login() {

    const [responseObj, setResponseObj] = useState<TokenResponse | null>(null);
    const navigate = useNavigate();
    const _tokenRequest: TokenRequest = tokenRequest;
    const _req: CompanyResponse = companyResponse;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        _tokenRequest.UserName = data.get('username') as string;
        _tokenRequest.Password = data.get('password') as string;

        const res = await axios.post(url, _tokenRequest, {headers:hdr});
        await setResponseObj(res.data);
        
        if(res.data != null && res.data.isSuccess)
        {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('isSuccess', res.data.isSuccess);         

          navigate('/companyselection');
        }
    };

    // useEffect(() =>{console.log(responseObj)},[responseObj])

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
                  }}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="User Name"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign In
                        </Button>
                    </Box>  
                </Box>
            </Container>
        </ThemeProvider>
    )    
}