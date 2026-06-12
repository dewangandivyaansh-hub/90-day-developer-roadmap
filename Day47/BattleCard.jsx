import { useState } from "react";

function BattleCard() {

    const [heroHealth, setHeroHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [winner, setWinner] = useState("");

    function attack() {

        if (winner) return;

        const heroDamage =
            Math.floor(Math.random() * 20) + 1;

        const enemyDamage =
            Math.floor(Math.random() * 20) + 1;

        const newEnemyHealth =
            Math.max(enemyHealth - heroDamage, 0);

        const newHeroHealth =
            Math.max(heroHealth - enemyDamage, 0);

        setEnemyHealth(newEnemyHealth);
        setHeroHealth(newHeroHealth);

        if (newEnemyHealth <= 0) {
            setWinner("🦸 Hero Wins!");
        }
        else if (newHeroHealth <= 0) {
            setWinner("👹 Enemy Wins!");
        }
    }

    function resetBattle() {

        setHeroHealth(100);
        setEnemyHealth(100);
        setWinner("");

    }

    return (

        <div className="battle-card">

            <h2>⚔️ Hero Battle Arena</h2>

            <h3>🦸 Hero Health: {heroHealth}</h3>

            <progress
                value={heroHealth}
                max="100"
            ></progress>

            <h3>👹 Enemy Health: {enemyHealth}</h3>

            <progress
                value={enemyHealth}
                max="100"
            ></progress>

            <br /><br />

            <button onClick={attack}>
                Attack
            </button>

            <button onClick={resetBattle}>
                Reset
            </button>

            <h2>{winner}</h2>

        </div>

    );
}

export default BattleCard;