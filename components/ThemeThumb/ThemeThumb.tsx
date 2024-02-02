'use client'
import { useTheme } from '@/hooks/useTheme';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './ThemeThumb.module.css';
import moon from './../../images/icons/moon.svg';
import sun from './../../images/icons/sun.svg';

const ThemeThumb: React.FC = () => {


    const {theme, setTheme} = useTheme();
    const [mode, setMode] = useState<boolean>(false);


    const themeHandle = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else if (theme === 'dark') {
            setTheme('light')
        }
    }

    useEffect(() => {
        if (theme === 'light') {
            setMode(true);
        } else if (theme === 'dark') {
            setMode(false);
        }
    }, [theme]);

    



    return (
        <>
            <div className={`${styles.aura} el`} onClick={themeHandle}>
                <div className={`${styles.thumb} ${!mode ? styles.animThumb : null}`}>
                    {mode ? <Image src={sun} alt='' width={22} height={22}/>
                     : 
                     <Image src={moon} alt='' width={22} height={22}/>
                    }
                </div>
            </div>
        </>
    )
}


export default ThemeThumb;