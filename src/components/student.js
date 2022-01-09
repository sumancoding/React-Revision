function Student({ name, email, other }) {
  return (
    <div className="suman">
      <h1>Hello {name}</h1>
      <h2>Email: {email}</h2>
      <h2>Address: {other.address}</h2>
    </div>
  );
}
export default Student;
