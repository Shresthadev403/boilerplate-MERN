function About() {
  return (
    <div className="article">
      <h2>Details</h2>I have created this project in the process of learning
      MERN Stack. This project can be easily used for for other projects with no
      or little changes.
      <h2>Features:</h2>
      <ul>
        <li>Sign Up</li>
        <li>SignIn</li>
        <li>Login with Google</li>
        <li>Update Details</li>
        <li>Password Reset through Email Verification</li>
        <li>Delete Account</li>
        <li>Admin Controls</li>
      </ul>
      <h2>Backend Endpoints</h2>"/api": "Show endpoints",
      <br /> "/signup": "create new user in database",
      <br /> "/signin": "signin with email and password",
      <br /> "/sociallogin": "signin using social id google ,facebook,etc.",
      <br /> "/signout": "signed out the current user",
      <br /> "/users": " get all the users from database(only for admin)",
      <br /> "/user/:userId": "get a certain user  with userid(get itself only by subscriber but every user by admin)",
      <br /> "/user/update/:userId": "update user by subscriber itself or
      admin",
      <br /> "/user/delete/:userId": "delete the user by subscriber itself or
      admin",
      <br /> "/forgetpassword": "send a reset link to subscriber's mail with a
      token", <br /> "/resetpassword": "reset passowrd to new password"
      <br /><br />
      <footer id="footer">
            <li>Contact Us </li>
            <li>
              <b>Email:</b> Shresthadev403@gmail.com{" "}
            </li>
          </footer>
    </div>
  );
}

export default About;
