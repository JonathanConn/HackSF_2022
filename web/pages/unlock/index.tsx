import styles from '../../styles/Home.module.css'
import { useState } from "react";

export default function TesterForm() {

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <a href="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220x34dbf1db4e0d5cfe899a28ccd9b85d53d5c1a712%22%3A%7B%22network%22%3A5%7D%7D%2C%22pessimistic%22%3Atrue%2C%22title%22%3A%22HNDSHK%22%2C%22icon%22%3A%22%22%7D">
                            <h1>Join our unlock</h1>
                        </a>
                    </div>
                </div>
            </div>
        </main>

    )
}

