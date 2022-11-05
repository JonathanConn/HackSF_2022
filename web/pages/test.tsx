import styles from '../styles/Home.module.css'

const test = async (event: any) => {
    event.preventDefault();

    const params = JSON.stringify({
        _data: event.target.data.value 
    });
    console.log(params)
    try {
        const res = await fetch(`http://localhost:3000/api/ipfs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: params,
        });
        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.log(err);
    }
}

export default function Mint() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <form onSubmit={test}>
                        <input id="data" type="text" placeholder="data" className={styles.card}></input><br></br>
                        <button className={styles.center}>Mint</button>
                    </form>
                </div>
            </div>
        </main>
    )
}