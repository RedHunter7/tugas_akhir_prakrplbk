import React, { useState } from 'react'
import { Label, Input, Textarea } from '@rebass/forms'
import { Box } from 'rebass'
import { MyButton } from '../components'
import swal from 'sweetalert';



const CreatePostCardPage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleInputHandler = (event) => {
        setTitle(event.target.value)
    }

    const contentInputHandler = (event) => {
        setContent(event.target.value)
    }

    const submitHandler = () => {
        if (title !== '' && content !== '') {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                }).then((response) => {
                    if (response.status >= 200 && response.status <= 299) {
                        return response.json();
                    } else swal("Error!!", response.statusText, "error");
                })
                .then((json) => {
                    console.log(title)
                    swal("Success", `${title} has been added`, "success");
                    setTitle('')
                    setContent('')
                }).catch(error => {
                    swal("Error!!", error, "error");
                })

        } else swal("Error!!", "You must fill title & content input field", "error");
    }

    return <>
        <Box width='40%' margin='auto'>
            <Label htmlFor='title' marginTop='30px'>Title</Label>
            <Input id='title' name='title' type='title'
            value={title} onChange={titleInputHandler} 
            placeholder='Insert Postcard Title'
            />

            <Label htmlFor='content' marginTop='30px'>Content</Label>
            <Textarea id='body' name='content'
            value={content} onChange={contentInputHandler}
            height='140px' marginBottom='30px' 
            placeholder='Insert Postcard Content'/>

            <MyButton bgColor='blue' onClick={submitHandler}>
                Create Postcard
            </MyButton>
        </Box>
    </>
}

export { CreatePostCardPage }