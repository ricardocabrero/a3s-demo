import React, { Component } from 'react'
import styles from './style.module.css'
import propTypes from 'prop-types'

class Item extends Component {

    static propTypes = {
        quantity: propTypes.string.isRequired,
        name: propTypes.string.isRequired
    }

    render(){
        const { quantity, name } = this.props
        return(
            <li className={styles.item}>
                <p className={styles.name}>
                <span className={styles.quantity}>{quantity}</span>
                {name}</p>
            </li>
        )
    }
}

export default Item