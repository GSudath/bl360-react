import React from 'react'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { ArrowDropDownOutlined, EditOutlined, SplitscreenOutlined, FiberNewOutlined, SaveOutlined } from '@mui/icons-material'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'

export default function Invoice() {
    return (
        <form>
            <div className='form-group' style={{ display: "grid", gridTemplateRows: "40% 40% 40%" }}>
            <div style={{ display: "grid", gridTemplateColumns: "70% 30%", columnGap: "1rem"}}>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                {/* <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup> */}

            </div>
            <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                {/* <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup> */}

            </div>
            <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                <div>
                <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
                </div>
                {/* <FormGroup>
                <FormControl>
                    <InputLabel>No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Invoice No</InputLabel>
                    <Input/>
                </FormControl>
                <FormControl>
                    <InputLabel>Doc No</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup> */}

            </div>
        </div>
        </form>
    )
}


{/* <Container>
                <Box sx={{ bgcolor: "#cfe8fc", height: '100vh' }}>
                    1
                </Box>
                <Box sx={{ bgcolor: "#cfe8fc", height: '100vh' }}>
                    <Box sx={{ bgcolor: "#cfe8fc", height: '100vh' }}>
                        2
                    </Box>
                    <Box sx={{ bgcolor: "#cfe8fc", height: '100vh' }}>
                        3
                    </Box>
                    <Box sx={{ bgcolor: "#cfe8fc", height: '100vh' }}>
                        4
                    </Box>
                </Box>
            </Container> */}