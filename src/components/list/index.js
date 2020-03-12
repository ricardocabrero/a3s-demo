import React, { Component } from 'react'
import styles from './style.module.css'
import Item from '../item'
import Form from '../form'

class List extends Component {
    state = {
        data: [],
        errorCall: false
    }

    async _fetchCall(){
        try{
            const res = await fetch('http://www.mocky.io/v2/5e66606c3100005100239f27')
            const data = await res.json()
            this.setState({
                data
            })
        }
        catch(e){
            this.setState({
                errorCall: true
            })
        }
    }

    _handleNewValue = (newValue) => {
        const { data } = this.state
        this.setState({
            data: [...data, newValue]
        })
    }

    componentDidMount(){
        this._fetchCall()
    }

    render(){
        const { data, errorCall } = this.state
        const lengthData = data.length
        return(
            <>
            <Form newValue={this._handleNewValue}/>
            <p>counter: <strong>{lengthData}</strong></p>
            <ul className={styles.list}>
                {
                data.map((el,i) => {
                return <Item 
                        key={i}
                        quantity={el.quantity}
                        name={el.name}/>
                    })
                }
            </ul>
            {errorCall && <p>¡Error!</p>}
            </>
        )
    }
}

export default List