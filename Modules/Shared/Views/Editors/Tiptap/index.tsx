import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Box, Button, Divider, Flex, VStack} from "@chakra-ui/react";

const MenuBar = ({editor}) => {
    if (!editor) {
        return null
    }

    return (
        <Flex wrap={'wrap'}>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                bold
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                italic
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleStrike().run()}
            >
                strike
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleCode().run()}
            >
                code
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
                clear marks
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().clearNodes().run()}
            >
                clear nodes
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().setParagraph().run()}
            >
                paragraph
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
            >
                h1
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
            >
                h2
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
            >
                h3
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
            >
                h4
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 5}).run()}
            >
                h5
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleHeading({level: 6}).run()}
            >
                h6
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                bullet list
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                ordered list
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            >
                code block
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
                blockquote
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
                horizontal rule
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().setHardBreak().run()}
            >
                hard break
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().undo().run()}
            >
                undo
            </Button>
            <Button
                colorScheme='teal'
                size={'xs'}
                variant='outline'
                onClick={() => editor.chain().focus().redo().run()}
            >
                redo
            </Button>
        </Flex>
    )
}

export default () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: '<p>Hello World! 🌎️</p>',
    })

    return (
        <VStack borderWidth={3} borderRadius={"lg"} borderColor={'black'}>
            <MenuBar editor={editor}/>
            <Divider/>
            <EditorContent editor={editor}/>
        </VStack>
    )
}