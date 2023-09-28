import PropTypes from 'prop-types'

function Button ({ label, onClick, className }) {

    return (
        <button
            onClick={onClick}
            className={`w-full font-medium lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white cursor-pointer ${className}`}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default Button;