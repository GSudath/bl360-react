import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material'
import Divider from '@mui/material/Divider';

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import Autocomplete from '@mui/material/Autocomplete'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Invoice() {
    const top100Films = [
        { label: 'Cash' },
        { label: 'Cheque' },
        { label: 'Credit Card' },
        { label: 'Bank Transfer' },
        { label: 'Splash' }
    ]
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} >
                    <TextField id='invNo' label='Invoice No' sx={{ width: "500px" }} />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>

                            <DatePicker
                                label="Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <TextField disabled id='docNo' label='Doc No' />
                    <TextField disabled id='yurRef' label='Yur Ref' />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Payment Term" />}
                    />
                    <hr />
                </Grid>
                
                <Grid item xs={6} >
              
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Sales" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Customer" />}
                        />
   
                    <TextField id='des' label='Description' />
                    <hr />
                </Grid>
                
                <Grid item xs={6} >
                <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />
                        <TextField id='disAmt' label='Dis Amt' />
                        <TextField id='disPer' label='Dis %' />
                    </Grid>
                
                <Grid item xs={6} >
                <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Item" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Item Code" />}
                    />
                    <hr />
                </Grid>
                <Grid item xs={6} >
                    <Item>xs=6 md=8</Item>
                    <hr />
                </Grid>
            </Grid>
        </Box>
    );
}