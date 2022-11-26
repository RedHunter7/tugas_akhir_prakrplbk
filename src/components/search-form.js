import React from 'react'
import { Flex } from 'rebass'
import { Input } from '@rebass/forms'
import { MyButton } from './my-button'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            inputValue: '',
        }
    }

    inputHandler = (event) => {
        this.setState({inputValue: event.target.value})
    }

    render() {
        const clickHandler = () => {
            this.props.onSubmit(this.state.inputValue)
        }

        return (
            <Flex maxWidth='60%' margin='auto' marginTop='20px' >
                <Input marginRight='20px'
                    type='text' onChange={this.inputHandler}
                    placeholder='Search Postcard name'
                />
                <MyButton bgColor='blue' onClick={clickHandler}>
                    Search
                </MyButton>
            </Flex>
        )
    }
}

export { SearchForm }