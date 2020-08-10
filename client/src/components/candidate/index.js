import React, {useState} from "react";
// import React, {Component} from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";

function Candidate() {
  const [value, setValue] = useState(false);
  const [code, setCode] = useState("");
  const isVoted = () => {
    if (value === false) setValue(true);
    else {
      Swal.fire("You are already voted !!");
    }
  };
  const sendCodeToMobile = () => {
    return axios
      .get("http://localhost:4000/verfiy")
      .then((res) => {
        console.log("code is sent", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirm = () => {
    Swal.fire({
      title: "Submit your code",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Vote",
      showLoaderOnConfirm: true,
      preConfirm: (code) => {
        setCode(code);
        axios({
          method: "post",
          url: "http://localhost:4000/confirm",
          data: {
            code,
          },
        })
          .then((response) => {
            if (response.data.succses) {
              isVoted();
            }
            // return response.json();
            else Swal.fire("You intered wrong code");
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.code}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
  const combine = () => {
    sendCodeToMobile();
    setTimeout(confirm(), 1000);
  };

  return (
    <div className="divv">
      <div class="thumbnail">
        <img src="https://i.ibb.co/88ZFzYC/01.jpg" alt="cand"></img>
        <h1>Ayman</h1>
        <button data-target="modal1" className="button" onClick={combine}>
          Vote
        </button>
      </div>
      <div class="thumbnail">
        <img src="https://i.ibb.co/C73t72L/02.jpg" alt="cand"></img>
        <h1>Ahmad</h1>
        <button type="button" className="button" onClick={combine}>
          Vote
        </button>
      </div>
      <div class="thumbnail">
        <img src="https://i.ibb.co/LJ5xyhR/05.jpg" alt="cand"></img>
        <h1>Yasmin</h1>
        <button type="button" className="button" onClick={combine}>
          Vote
        </button>
      </div>
      <div class="thumbnail">
        <img src="https://i.ibb.co/5nY7tbp/03.jpg" alt="cand"></img>
        <h1>Karam</h1>
        <button type="button" className="button" onClick={combine}>
          Vote
        </button>
      </div>
      <div class="thumbnail">
        <img src="https://i.ibb.co/PChQrmX/04.jpg" alt="cand"></img>
        <h1>Mohammad</h1>
        <button type="button" className="button" onClick={combine}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default Candidate;
