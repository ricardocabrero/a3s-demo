import React, { Component } from 'react'
import axios from 'axios'
import styles from './style.module.css'
import Item from '../item'
import Form from '../form'

class List extends Component {
    state = {
        loadding: true,
        data: [],
        errorCall: false
    }

    async _fetchCall(){
        try{
            const res = await axios.get('http://www.mocky.io/v2/5e66606c3100005100239f27')
            const { data } = res
            this.setState({
                loadding: false,
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
        const { data, loadding , errorCall } = this.state
        const lengthData = data.length
        return(
            <>
            <Form newValue={this._handleNewValue}/>
            {
            loadding 
            ? <p>Loadding...</p>
            :
            <div>
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
            </div>
            }
            </>
        )
    }
}

export default List