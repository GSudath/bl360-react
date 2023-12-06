import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import Autocomplete from '@mui/material/Autocomplete'
import { FormControl } from '@mui/base'

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
        // <form>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete='off'>
            <div style={{ display: 'grid', gridTemplateRows: '30% 30% 40%' }}>
                <div style={{ display: "grid", gridTemplateColumns: "30% 40% 30%", columnGap: "1rem" }}>
                    <div style={{ width: 'auto' }}>

                        
                            {/* <div className="form-group">
                                <label >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" >Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                         */}

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

                    </div>
                    <div style={{ width: 'auto' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Job" />}
                        />
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
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Adv. Analysis" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Service Advisor" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Vehicle" />}
                        />
                        <TextField id='des' label='Description' />
                    </div>
                    <div style={{ width: 'auto' }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />
                        <TextField id='disAmt' label='Dis Amt' />
                        <TextField id='disPer' label='Dis %' />
                    </div>
                </div>

            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}>
                <div>
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
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr 1fr' }}></div>
        </Box>
        // </form>
    )
}
