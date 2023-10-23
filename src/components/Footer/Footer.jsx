import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
     
            mt={'4'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            style={{
                position: 'relative',
                bottom: '0',
                width: '100%',
            }}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'center' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© {currentYear} Currency Converter. All rights reserved</Text>
            </Container>
        </Box>
    );
}