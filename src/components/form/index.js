import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {

    static  propTypes = {
        newValue: PropTypes.func.isRequired
    }
    
    state = {
        stateValue: {
            num: '',
            name: ''
        }
    }

    _handleChange = ({target}) => {
        this.setState({
            stateValue: {
                quantity: '1',
                name: target.value
            } 
        })
    }

    _handleSubmit = (stateValue) => (e) => {
        e.preventDefault()
        const { newValue } = this.props
        const { name } = stateValue
        name.length && newValue(stateValue)
        this.setState({
            stateValue: {
                quantity: '',
                name: ''
            } 
        })
    }

    render(){
        const { stateValue } = this.state

        return(
            <form onSubmit={this._handleSubmit(stateValue)}>
                <input 
                placeholder='add item'
                onChange={this._handleChange}
                type="text" value={stateValue.name}/>
                <input type="submit" value="Add item"/>
            </form>
        )
    }
}

export default Form