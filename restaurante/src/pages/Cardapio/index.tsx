import style from './Cardapio.module.scss';
import logo from 'assets/logo.svg'

export default function Cardapio(){
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt="logo" />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa !!!
                </div>
            </header>
        </main>
    );
}