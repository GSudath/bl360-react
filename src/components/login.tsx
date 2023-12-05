import { useEffect, useState } from "react"
import AuthUser from './AuthUser';
import { Avatar, Box, Button, Container, CssBaseline, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import axios,{AxiosResponse} from "axios";
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://bl360x.com/BL10/Login">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();
 var url : any = "https://bluelotus360.co/CoreAPI/api/Authentication/Authenticate";
 var hdr : any = {
  "Content-type" : "application/json",
  "IntegrationID":"1aa6a39b-5f54-4905-880a-a52733fd6105"
};

type TokenRequest = {
  UserName : string,
  Password : string
}

interface TokenResponse {
  token : string,
  refreshToken : string,
  isSuccess : boolean
}

export default function Login() {

    //const dispatch = useDispatch();
    //const {http,setToken} = AuthUser();
  
    const [responseObj, setResponseObj] = useState<TokenResponse | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        var _tokenRequest: TokenRequest = {
          UserName: data.get('username') as string,
          Password: data.get('password') as string
        };
        const res = await axios.post(url, _tokenRequest, {headers:hdr});
        await setResponseObj(res.data);
        
        if(res.data != null && res.data.isSuccess)
        {
          localStorage.setItem('TokenResponse.token', JSON.stringify(res.data.token));
          localStorage.setItem('TokenResponse.refreshToken', JSON.stringify(res.data.refreshToken));
          localStorage.setItem('TokenResponse.isSuccess', JSON.stringify(res.data.isSuccess));
          
          //router.push('/companyselection');
        }
    };

    useEffect(() =>{console.log(responseObj)},[responseObj])

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
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )    
}