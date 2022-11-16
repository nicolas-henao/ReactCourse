export function Greeting(props) {
  return <h1>{props.title}, dice {props.name}</h1>;
}

export function UserCard({name, amount, married, points, address}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? 'married' : 'single'}</p>
      <p>{points}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
