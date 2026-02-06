function UserProfile({ name, email, role }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserProfile;
