import PropTypes from 'prop-types';
import styles from './Button.module.css';


function Button({text}) {

    return (  
        <button className={styles.btn}>{text}</button> 

        /*css module을 사용하면
        1. 클래스 이름이 중첩되는것을 방지해준다.

        2. 유지보수하기 편해진다

        3. 사용 범위를 제한하여, 스타일링 하고싶은 컴포넌트가 다른 컴포넌트와 중복되는 클래스 이름에 의하여 방해되는것을 막아준다.
        */
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;