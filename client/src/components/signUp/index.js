import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CreatePassword from "../createPassword";
import SignIn from "../signIn";

class SignUp extends React.Component {
  state = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    motherName: "",
    signIn: null,
  };
  handleChange = this.handleChange.bind(this);

  // handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const idd = this.state.id;
    //Axios request goes here
    axios
      .post("/signup", {
        mobile: this.state.mobile,
        mother_name: this.state.motherName,
        id: this.state.id,
        email: this.state.email,
        dateOfBirth: this.state.dateOfBirth,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        gender: this.state.gender,
      })
      .then((response) => {
        if (response.data.message === "id cannot be blank") {
          Swal.fire("id cannot be blank");
        }

        if (response.data.message === "first name cannot be blank") {
          Swal.fire("first name cannot be blank");
        }

        if (response.data.message === "last name cannot be blank") {
          Swal.fire("last name cannot be blank");
        }

        if (response.data.message === "email cannot be blank") {
          Swal.fire("email cannot be blank");
        }

        if (response.data.message === "mobile cannot be blank") {
          Swal.fire("mobile cannot be blank");
        }

        if (response.data.message === "date Of birth cannot be blank") {
          Swal.fire("date Of birth cannot be blank");
        }

        if (response.data.message === "gender cannot be blank") {
          Swal.fire("gender cannot be blank");
        }

        if (response.data.message === "mother name cannot be blank") {
          Swal.fire("mother name cannot be blank");
        }

        if (response.data.message === "user does not exist") {
          Swal.fire("user does not exist");
        }
        if (response.data.message === "first name does not match with id") {
          Swal.fire("first name does not match with id");
        }
        if (response.data.message === "last name does not match with id") {
          Swal.fire("last name does not match with id");
        }
        if (response.data.message === "email does not match with id") {
          Swal.fire("email does not match with id");
        }

        if (response.data.message === "mobile does not match with id") {
          Swal.fire("mobile does not match with id");
        }

        if (response.data.message === "date of birth does not match with id") {
          Swal.fire("date of birth does not match with id");
        }

        if (response.data.message === "mother name does not match with id") {
          Swal.fire("mother name does not match with id");
        }

        if (response.data.message === "gender does not match with id") {
          Swal.fire("gender does not match with id");
        }

        if (
          response.data.success &&
          response.data.message ===
            "you successfully signed up. set a password to continue"
        ) {
          Swal.fire("you successfully signed up. set a password to continue");
          this.setState({
            signIn: <CreatePassword id={idd} />,
          });
        } else {
          // Swal.fire({
          //   icon: "error",
          //   title: "Error",
          //   text: "Please fill all fields with accurate and valid info.",
          // });
          console.log("Can't redierect to create password");
        }
      })
      .catch(function (error) {
        console.log("Failed to send sign up data", error);
      });
    this.setState({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      mobile: "",
      dateOfBirth: "",
      gender: "",
      motherName: "",
    });
  }
  showSignin() {
    this.setState({
      signIn: <SignIn />,
    });
  }
  render() {
    return this.state.signIn == null ? (
      <div id="SignIn">
        <div className="component">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>ID:</label>
            <input
              name="id"
              placeholder=" e.g. 403328682"
              value={this.state.id}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label>First Name:</label>{" "}
            <input
              type="text"
              name="first_name"
              placeholder=" John "
              value={this.state.first_name}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              placeholder=" Smith "
              value={this.state.last_name}
              onChange={this.handleChange.bind(this)}
            />
            <label>
              <br />
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder=" e.g. jsmith@gmail.com"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label>Phone Number:</label>{" "}
            <input
              type="number"
              name="mobile"
              placeholder=" 05********"
              value={this.state.mobile}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label>Date Of Birth:</label>{" "}
            <input
              type="date"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <label>Gender:</label>{" "}
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange.bind(this)}
            >
              <option value="none"> </option>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
            </select>
            <br />
            <label>Mother Name:</label>
            <input
              type="text"
              name="motherName"
              placeholder=" e.g. Liza"
              value={this.state.motherName}
              onChange={this.handleChange.bind(this)}
            />
            <br />
            <input type="submit" value="Next" />
            <br />
            <p>
              Go bak to
              <button className="button" onClick={this.showSignin.bind(this)}>
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    ) : (
      this.state.signIn
    );
  }
}

export default SignUp;
