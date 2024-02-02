'use client'
import styles from './Header.module.css';
import Image from 'next/image';
import gerb from './../../images/icons/gerb.svg';
import grif from './../../images/icons/grif.svg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ThemeThumb from '../ThemeThumb/ThemeThumb';



const Header: React.FC = () => {

    const router = useRouter();


    const [animLogo, setAnimLogo] = useState<boolean>(false);

    const animationLogoHandle = () => {
        if (window.scrollY > 0) {
            setAnimLogo(true);
        } else if (window.scrollY === 0) {
            setAnimLogo(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', animationLogoHandle);


        return  () => {
            window.removeEventListener('scroll', animationLogoHandle);
        }

    }, [animLogo]);


    


    return (
        <header className={styles.header}>
            <div className={`${styles.logo} ${animLogo ? styles.animLogo : ''}`} onClick={() => router.push('/')}>
                <Image src={gerb} alt='' height={50} width={70}/>
                <p>|</p>
                <Image src={grif} alt='' height={50} width={70}/>
            </div>
            <ThemeThumb />
        </header>
    )
}

export default Header;