import { useState } from "react";

function BattleCard() {

    const [heroHealth, setHeroHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);

    const [winner, setWinner] = useState("");

    const [battleLog, setBattleLog] = useState([]);

    function addLog(message) {

        setBattleLog(prev => [
            message,
            ...prev
        ]);

    }

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

        addLog(
            `⚔️ Hero dealt ${heroDamage} damage`
        );

        addLog(
            `👹 Enemy dealt ${enemyDamage} damage`
        );

        if (newEnemyHealth <= 0) {

            setWinner("🦸 Hero Wins!");

        } else if (newHeroHealth <= 0) {

            setWinner("👹 Enemy Wins!");

        }

    }

    function specialAttack() {

        if (winner) return;

        const damage =
            Math.floor(Math.random() * 30) + 20;

        const newEnemyHealth =
            Math.max(enemyHealth - damage, 0);

        setEnemyHealth(newEnemyHealth);

        addLog(
            `🔥 Special Attack dealt ${damage} damage`
        );

        if (newEnemyHealth <= 0) {

            setWinner("🦸 Hero Wins!");

        }

    }

    function heal() {

        if (winner) return;

        const healAmount =
            Math.floor(Math.random() * 15) + 5;

        const newHealth =
            Math.min(heroHealth + healAmount, 100);

        setHeroHealth(newHealth);

        addLog(
            `💚 Hero healed ${healAmount} HP`
        );

    }

    function resetBattle() {

        setHeroHealth(100);
        setEnemyHealth(100);

        setWinner("");

        setBattleLog([]);

    }

    return (

        <div className="battle-card">

            <h2>⚔️ Hero Battle Arena</h2>

            <h3>
                🦸 Hero Health:
                {heroHealth}
            </h3>

            <progress
                value={heroHealth}
                max="100"
            ></progress>

            <h3>
                👹 Enemy Health:
                {enemyHealth}
            </h3>

            <progress
                value={enemyHealth}
                max="100"
            ></progress>

            <br /><br />

            <button onClick={attack}>
                Attack ⚔️
            </button>

            <button onClick={specialAttack}>
                Special 🔥
            </button>

            <button onClick={heal}>
                Heal 💚
            </button>

            <button onClick={resetBattle}>
                Reset 🔄
            </button>

            <h2>{winner}</h2>

            <div className="log-box">

                <h3>Battle Log</h3>

                {battleLog.map(
                    (log, index) => (

                        <p key={index}>
                            {log}
                        </p>

                    )
                )}

            </div>

        </div>

    );

}

export default BattleCard;