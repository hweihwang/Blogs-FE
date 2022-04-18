import React from "react";
import {BlogModel} from "../Models/BlogModel";
import {Box, Heading, Text} from "@chakra-ui/react";
import Link from "next/link";

export default ({blog}: { blog: BlogModel }) => {
    return (
        <Link href={`/${blog.id}`} passHref={true}>
            <Box mt={5} borderWidth={2} borderRadius={"lg"} overflow={"hidden"}>
                <Box mt={5} ml={5} mr={5}>
                    <Box mb={5}>
                        <Heading as={"h2"} size={"lg"}>{blog.title}</Heading>
                        <Text fontSize={"xx-small"}
                              ml={0}>{blog.created_by_id ?? "Hweihwang"}&#9679;{blog.updated_at}</Text>
                    </Box>
                    <Text as={"h3"} mt={5} mb={5}>{blog.description}</Text>
                    <Text fontSize={"sm"} mt={5} mb={5}>{blog.content}</Text>
                </Box>
            </Box>
        </Link>
    );
};
