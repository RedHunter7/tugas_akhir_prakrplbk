import React from 'react'
import { Box, Card, Heading, Text } from 'rebass'

class PostCard extends React.Component {
    render() {
        return (
          <Box px={2} py={3} key={this.props.id}>
            <Card width='320px' bg='#086972' color='#fff' 
            textAlign='center' padding='20px 30px' 
            sx={{
              borderRadius: '20px',
              boxShadow: '5px 10px #888888'
            }}>
              <Heading>{this.props.title}</Heading>
              <Text pb='10px'>{this.props.body}</Text>
            </Card>
          </Box>
        )
    }
}

export default PostCard