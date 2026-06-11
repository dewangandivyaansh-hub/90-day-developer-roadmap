import { useState } from "react";
import "./App.css";
import Header from "./Header";
import BattleCard from "./BattleCard";

function App() {

  const [heroHp, setHeroHp] =
    useState(100);

  const [monsterHp, setMonsterHp] =
    useState(100);

  function attackMonster() {

    setMonsterHp(
      monsterHp - 10
    );

  }

  function healHero() {

    setHeroHp(
      heroHp + 10
    );

  }

  return (

    <div>

      <Header />

      <BattleCard
        heroHp={heroHp}
        monsterHp={monsterHp}
        attackMonster={attackMonster}
        healHero={healHero}
      />

    </div>

  );

}

export default App;