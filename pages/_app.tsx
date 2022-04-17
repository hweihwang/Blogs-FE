import {useState} from 'react';
import {ChakraProvider, Container} from "@chakra-ui/react";
import {ReactQueryDevtools} from "react-query/devtools";
import {Hydrate, QueryClient, QueryClientProvider} from "react-query";

export default function MyApp({Component, pageProps}: { Component: any; pageProps: any }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient} contextSharing={true}>
            <Hydrate state={pageProps.dehydratedState}>
                <ChakraProvider>
                    <Container maxW={'container.md'}>
                        <Component {...pageProps} />
                        <ReactQueryDevtools initialIsOpen={true}/>
                    </Container>
                </ChakraProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}
