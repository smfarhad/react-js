import PropTypes from 'prop-types';
import styles from './Button.module.css';
Button.propTypes = {
    name: PropTypes.string.isRequired
};
export default function Button({name}){
    const buttonClass = ['btn', 'btn-primary', styles.bold, styles.color].join(' ');
    return(
        <button className={buttonClass}>
            {name}
        </button>
    )
}