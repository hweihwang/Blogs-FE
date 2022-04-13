import {ChakraProvider, Container} from '@chakra-ui/react'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

export default function App({Component, pageProps}: { Component: any; pageProps: any }) {
    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <ChakraProvider>
                <Container maxW={'container.md'}>
                    <Component {...pageProps}/>
                </Container>
            </ChakraProvider>
        </QueryClientProvider>
    )
}
