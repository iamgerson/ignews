import Image from 'next/image';
import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'


export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image priority src="/imagens/logo.svg" height={100} width={100} alt='ig.news'/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}