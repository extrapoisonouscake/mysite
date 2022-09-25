import {Link} from 'react-router-dom'
import classnames from './index.module.scss';
import {Button} from 'components/interactable'
export default function Greeting(){
    return(
        <div className="section">
            <h1 className={classnames.heading}>Привет, я Влад!</h1>
            <p>Веб-разработчик с 2018 года. А, и мне 14.</p>
            <Link to="/info"><Button text="Узнать больше обо мне"/></Link>
        </div>
    )
}