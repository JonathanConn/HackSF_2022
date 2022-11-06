import { useState, useEffect } from 'react'
import ABI from '../../abi.json'
import styles from '../../styles/Home.module.css'

const CONTRACT_ADDRESS = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'

export default function Profile() {
    const [account, setAccount] = useState('')

    async function connectWallet() {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        console.log('accounts: ', accounts)
        accounts[0]
        setAccount(account)
    }

    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <button onClick={connectWallet} className={styles.center}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

const profileContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
}