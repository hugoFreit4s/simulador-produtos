import styleBtn from './Button.module.css';

const Button = ({ text }) => {
    return (
        <button className={styleBtn.btn}>{text}</button>
    );
};

export default Button;