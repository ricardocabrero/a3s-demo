import React, { Component } from 'react'
import * as utils from '../../utils'
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

    async _axiosCall(){
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
        let isRepeat = new utils.IsExist(data, newValue.name)
        let lengthIsRepeat = isRepeat.length
        lengthIsRepeat ?
        this.setState({
            data: [...isRepeat]
        })
        :
        this.setState({
            data: [...data, newValue]
        })
    }

    componentDidMount(){
        this._axiosCall()
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
                <p>counter: 
                    <strong>{lengthData}</strong>
                    <strong>&nbsp;({utils.TotalProducts(data)})</strong>
                </p>
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