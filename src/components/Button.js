import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick}
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
    onClick: PropTypes.func
}
export default Button

// arg has props destructured 
// const color = this.props.color
// const text = this.props.text