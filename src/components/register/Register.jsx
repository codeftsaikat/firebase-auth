import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";

function Register() {
  const { createUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Working", email, password, name);

    // create user with firebase
    createUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

  };
  const handleSignInWithGoogle =()=>{
    // login with google
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="hero bg-base-200 h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <FontAwesomeIcon
              onClick={handleSignInWithGoogle}
                className="text-4xl cursor-pointer"
                icon={faGoogle}
                fade
                style={{ color: "#009de0" }}
              />

              <p className="text-center">
                Already have an account? please {""}
                <NavLink className="text-blue-700" to="/login">
                  login
                </NavLink>{" "}
                now
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
