import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const clicked = () => {
        console.log('back to this shit')
    }

    return <button onClick={clicked}
                   style={{backgroundColor: color }}
                   className='btn'> 
                    {text}
           </button>     
}

Button.deafultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    clicked: PropTypes.func
}
export default Button

// arg has props destructured 
// const color = this.props.color
// const text = this.props.text