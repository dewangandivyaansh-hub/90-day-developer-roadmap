function ProfileCard(props) {

    return (

        <div className="card">

            <h2>{props.name}</h2>

            <p>{props.role}</p>

        </div>
    );
}

export default ProfileCard;