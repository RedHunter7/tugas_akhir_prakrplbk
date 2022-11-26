import { Box, Flex, Text } from 'rebass'
import { MyButton } from './my-button'

const TopNav = () => {
    return <Flex px={2} color='white' bg='black'
    alignItems='center'>
    <Text p={2} fontWeight='bold'>Postcard</Text>
    <Box mx='auto' />
    <MyButton href='/'>Home</MyButton>
    <MyButton href='/create-post-card'>Create Postcard</MyButton>
    <MyButton>Profile</MyButton>
    <MyButton>Profile</MyButton>
</Flex>
}

export { TopNav }