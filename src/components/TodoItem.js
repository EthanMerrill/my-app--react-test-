import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return { 
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <button class="foo-button mdc-button">Button</button>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem
