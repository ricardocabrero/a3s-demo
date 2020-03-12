import React, { Component } from 'react'
import styles from './style.module.css'
import PropTypes from 'prop-types'

class Header extends Component {

    static propTypes = {
        title: PropTypes.string
    }

    render(){
        const { title } = this.props
        return(
            <header>
                <h1 className={styles.header}>{title}</h1>
            </header>
        )
    }
}

export default Header

