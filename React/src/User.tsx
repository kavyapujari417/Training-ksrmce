function User() {
  const isLoggedIn: boolean = true;
  return (
    <>
    <div>
      {isLoggedIn ? <h2>Welcome kavya</h2> : <h2>Please Login</h2>}
    </div>
    </>
  );
}

export default User;
