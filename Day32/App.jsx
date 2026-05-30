import "./App.css";

import Header from "./Header";

import ProfileCard from "./ProfileCard";

function App() {

  return (

    <div>

      <Header />

      <h1>⚛️ React Props Demo</h1>

      <div className="card-container">

        <ProfileCard
          name="Divyaansh"
          role="Frontend Developer"
        />

        <ProfileCard
          name="Alex"
          role="React Developer"
        />

        <ProfileCard
          name="Sara"
          role="UI Designer"
        />

      </div>

    </div>
  );
}

export default App;