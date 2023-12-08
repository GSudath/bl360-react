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
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Li Number', width: 90 },
    {
      field: 'firstName',
      headerName: 'Item Code',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Item Name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Qty',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'subTotal',
      headerName: 'Sub Total',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'discountPer',
        headerName: 'Discount %',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'discount',
        headerName: 'Discount',
        type: 'number',
        width: 110,
        editable: true,
      },
  ];
  
  const rows = [
    { id: 1, lastName: 'Item - 001', firstName: 'Cement', age: 35, subTotal:72000, discountPer: 5, discount: 3600 },
    { id: 2, lastName: 'Item - 002', firstName: 'Ladder', age: 42,subTotal: 54000,discountPer: 5, discount: 2700},
    { id: 3, lastName: 'Item - 003', firstName: 'T-Shirt', age: 45,subTotal: 25000,discountPer: 5, discount: 1250},
    { id: 4, lastName: 'Item - 004', firstName: 'Trouser', age: 16,subTotal: 45000 ,discountPer: 5, discount: 2250},
    { id: 5, lastName: 'Item - 005', firstName: 'Shirt', age: null,subTotal: null,discountPer: null, discount: null},
    { id: 6, lastName: 'Item - 006', firstName: null, age: 150,subTotal: 15000,discountPer: 5, discount: 750},
    { id: 7, lastName: 'Item - 007', firstName: 'Signal Light', age: 44,subTotal: 44000,discountPer: 5, discount: 2200},
    { id: 8, lastName: 'Item - 008', firstName: 'Cricker Bat', age: 36,subTotal: 360000,discountPer: 5, discount: 18000},
    { id: 9, lastName: 'Item - 009', firstName: 'Ball', age: 65,subTotal: 6500,discountPer: 5, discount: 325},
  ];

export default function Invoice() {
    const pmtTrm = [
        { label: 'Cash' },
        { label: 'Cheque' },
        { label: 'Credit Card' },
        { label: 'Bank Transfer' },
        { label: 'Splash' }
    ]
    const sales = [
        { label: 'Debtors Control' },
        { label: 'Demo Raj' },
        { label: 'Demo Cus - 1' },
        { label: 'DFCC Bank' },
        { label: 'Distribution co' }
    ]
    const customer = [
        { label: 'AntonyUSDCus' },
        { label: 'CW Cus - Withanage Cus' },
        { label: 'DemoCus01' },
        { label: 'DemoCus02' },
        { label: 'DemoCus03' }
    ]
    const location = [
        { label: 'DMB LOC' },
        { label: 'Dehivala' },
        { label: 'Wellawatta' },
        { label: 'Colombo 05' },
        { label: 'Galle' }
    ]
    const item = [
        { label: 'Cement-Cement' },
        { label: 'Ladder-Ladder' },
        { label: 'ConMixer' },
        { label: 'Poker' },
        { label: 'Semi Skilled Labour' }
    ]
    const itemCode = [
        { label: 'Item - 001' },
        { label: 'Item - 002' },
        { label: 'Item - 003' },
        { label: 'Item - 004' },
        { label: 'Item - 005' }
    ]
    const height = '40px'
    
    
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} >
                    <hr />
                    <TextField id='invNo' label='Invoice No' sx={{
                        width: "200px", "& .MuiInputBase-root": {
                        height: height
                    }}} />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>

                            <DatePicker
                                label="Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                sx={{
                                    width: "200px", "& .MuiInputBase-root": {
                                    height: height
                                }}}
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <TextField disabled id='docNo' label='Doc No' sx={{
                        width: "200px", "& .MuiInputBase-root": {
                        height: height
                    }}}/>
                    <TextField disabled id='yurRef' label='Yur Ref' sx={{
                        width: "200px", "& .MuiInputBase-root": {
                            height: height,
                            
                    }}}/>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={pmtTrm}
                        sx={{
                            width: "200px", "& .MuiInputBase-root": {
                            height: height
                        }}}
                        renderInput={(params) => <TextField {...params} label="Payment Term" />}
                    />
                    <hr />
                </Grid>
                
                <Grid item xs={6} >
              <hr />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={sales}
                            sx={{
                                width: "200px", "& .MuiInputBase-root": {
                                height: height
                            }}}
                            renderInput={(params) => <TextField {...params} label="Sales" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={customer}
                            sx={{
                                width: "200px", "& .MuiInputBase-root": {
                                height: height
                            }}}
                            renderInput={(params) => <TextField {...params} label="Customer" />}
                        />
   
                    <TextField id='des' label='Description' />
                    <hr />
                </Grid>
                
                <Grid item xs={6} >
                <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={location}
                            sx={{
                                width: "200px", "& .MuiInputBase-root": {
                                height: height
                            }}}
                            renderInput={(params) => <TextField {...params} label="Location" />}
                        />
                        <TextField id='disAmt' label='Dis Amt' />
                    <TextField id='disPer' label='Dis %' />
                    <hr />
                    </Grid>
                
                <Grid item xs={6} >
                <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={item}
                        sx={{
                            width: "200px", "& .MuiInputBase-root": {
                            height: height
                        }}}
                        renderInput={(params) => <TextField {...params} label="Item" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={itemCode}
                        sx={{
                            width: "200px", "& .MuiInputBase-root": {
                            height: height
                        }}}
                        renderInput={(params) => <TextField {...params} label="Item Code" />}
                    />
                    <hr />
                </Grid>
                
            </Grid>
            <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
        </Box>
    );
}