import { useState } from 'react';
import styles from "./mainpage.module.css"


export default function HeaderComponent() {


    return (
        <div className={styles.maindiv}>
            <b>Header нашого додатку</b>
            <button >Зареєструватися</button>
            <div>
                <form className={styles.myform}>
                    <label className={styles.mylabel}>Емейл</label>
                    <input type='email' className={styles.myinput}></input>
                    <label className={styles.mylabel}>Пароль</label>
                    <input type='password' className={styles.myinput}></input>
                    <button className={styles.mybutton}>Зареєструватися</button>
                </form>
            </div>
        </div>
    )

}