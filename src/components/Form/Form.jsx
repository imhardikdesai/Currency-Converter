import React from 'react'
import { Stack, InputGroup, Input, InputLeftElement, Select, Box } from '@chakra-ui/react';
import './form.css'

const Form = () => {
    // https://www.amdoren.com/api/currency.php?api_key=zt5tHBGL7wN5tEb3iFxX8dxgew5wvT&from=EUR&to=GBP&amount=50
    return (
        <>
            <div className="form-body">
                <Box as='form' >
                    <Stack spacing={4} py="1.5">
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                children='$'
                            />
                            <Input placeholder='Enter amount' variant={'filled'} />
                        </InputGroup>

                        <InputGroup size='sm'>
                            <Select variant={'filled'} placeholder='Select country'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </InputGroup>
                    </Stack>
                </Box>
            </div>
        </>
    )
}

export default Form
