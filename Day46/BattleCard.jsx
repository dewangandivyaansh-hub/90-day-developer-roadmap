function BattleCard({
    heroHp,
    monsterHp,
    attackMonster,
    healHero
}) {

    return (

        <div className="battle-card">

            <h2>
                Hero HP ❤️: {heroHp}
            </h2>

            <h2>
                Monster HP 👹: {monsterHp}
            </h2>

            <button onClick={attackMonster}>
                Attack ⚔️
            </button>

            <button onClick={healHero}>
                Heal 💚
            </button>

        </div>

    );

}

export default BattleCard;