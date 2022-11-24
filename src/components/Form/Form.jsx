import { React, useState } from 'react'
import { Stack, InputGroup, Input, InputLeftElement, Select, Box, Text, HStack, WrapItem, Button } from '@chakra-ui/react';
import './form.css'

const Form = () => {
    const [price, setPrice] = useState(0);
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

                        <Text mb='5px'>From </Text>
                        <InputGroup size='sm'>
                            <Select variant={'filled'} placeholder='Select country'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </InputGroup>

                        <Text mb='5px'>To </Text>
                        <InputGroup size='sm'>
                            <Select variant={'filled'} placeholder='Select country'>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </InputGroup>
                    </Stack>
                </Box>

                <div className="bottom">
                    <HStack mt={'10'} justifyContent="center">
                        <Text fontSize="2xl" fontWeight="600">
                            Exchange Rate <br />
                            <Text align={'center'} fontSize="5xl" fontWeight="900">
                                {price ? price : '0.00'}
                            </Text>
                        </Text>
                    </HStack>
                    <WrapItem>
                        <Button px={'20'} my={'5'} colorScheme='blue'>Convert</Button>
                    </WrapItem>
                </div>

            </div>
        </>
    )
}

export default Form
