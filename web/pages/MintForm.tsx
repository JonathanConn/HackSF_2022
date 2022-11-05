import styles from '../styles/Home.module.css'

const mintProcess = async (event: any) => {
    event.preventDefault();

    const params = JSON.stringify({
        _name: event.target.name.value,
        _number: event.target.number.value,
    });
    console.log(params)
    try {
        const res = await fetch(`http://localhost:3000/api/metadata`, {
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
                    <form onSubmit={mintProcess}>
                        <input id="name" type="text" placeholder="Name" className={styles.card}></input><br></br>
                        <input id="number" type="text" placeholder="Phone #" className={styles.card}></input><br></br>
                        <button className={styles.center}>Mint</button>
                    </form>
                </div>
            </div>
        </main>
    )
}