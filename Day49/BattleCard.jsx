import { useState } from "react";

function BattleCard() {

    const [heroHealth, setHeroHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);

    const [winner, setWinner] = useState("");

    const [battleLog, setBattleLog] = useState([]);

    const [heroClass, setHeroClass] =
        useState("Warrior");

    function addLog(message) {

        setBattleLog(prev => [
            message,
            ...prev
        ]);

    }

    function attack() {

        if (winner) return;

        let minDamage;
        let maxDamage;

        if (heroClass === "Warrior") {

            minDamage = 10;
            maxDamage = 25;

        }

        else if (heroClass === "Mage") {

            minDamage = 5;
            maxDamage = 35;

        }

        else {

            minDamage = 8;
            maxDamage = 20;

        }

        let damage =
            Math.floor(
                Math.random() *
                (maxDamage - minDamage + 1)
            ) + minDamage;

        const criticalHit =
            Math.random() < 0.2;

        if (criticalHit) {

            damage *= 2;

            addLog(
                `💥 Critical Hit! ${damage} damage`
            );

        }

        const enemyDamage =
            Math.floor(Math.random() * 20) + 1;

        const newEnemyHealth =
            Math.max(enemyHealth - damage, 0);

        const newHeroHealth =
            Math.max(heroHealth - enemyDamage, 0);

        setEnemyHealth(newEnemyHealth);
        setHeroHealth(newHeroHealth);

        addLog(
            `⚔️ ${heroClass} dealt ${damage} damage`
        );

        addLog(
            `👹 Enemy dealt ${enemyDamage} damage`
        );

        if (newEnemyHealth <= 0) {

            setWinner(
                `🏆 ${heroClass} Wins!`
            );

        }

        else if (newHeroHealth <= 0) {

            setWinner(
                "👹 Enemy Wins!"
            );

        }

    }

    function heal() {

        if (winner) return;

        const healAmount =
            Math.floor(Math.random() * 15) + 5;

        const newHealth =
            Math.min(
                heroHealth + healAmount,
                100
            );

        setHeroHealth(newHealth);

        addLog(
            `💚 Healed ${healAmount} HP`
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

            <h2>
                ⚔️ Hero Battle Arena
            </h2>

            <select
                value={heroClass}
                onChange={(e) =>
                    setHeroClass(
                        e.target.value
                    )
                }
            >

                <option>
                    Warrior
                </option>

                <option>
                    Mage
                </option>

                <option>
                    Archer
                </option>

            </select>

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

            <button onClick={heal}>
                Heal 💚
            </button>

            <button onClick={resetBattle}>
                Reset 🔄
            </button>

            <h2>{winner}</h2>

            <div className="log-box">

                <h3>
                    Battle Log
                </h3>

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