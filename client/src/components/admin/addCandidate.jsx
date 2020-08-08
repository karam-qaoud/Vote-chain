import React, { Component } from "react";
import axios from "axios";

export class AddCandidate extends Component {
       state = {
             name: "",
             img: "",
             description: ""
            };
    handleChange = event => {
        this.setState({ 
            name: event.target.name,
            img: event.target.img,
            description:event.target.description
         });
    }        

    handleSubmit = () =>{
        const candidate = {
            name: this.state.name,
            img: this.state.img,
            description:this.state.description
        }

        axios.post("/admin", {candidate}).then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    };

    render() {
        return (
            <div>
                <div id="addCandidate">
                    <div className="container">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="section-title">
                                   <hr />                                   
                                </div>
                                <form name="sentMessage" id="contactForm" noValidate onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    id="nameOfCan"
                                                    className="form-control"
                                                    placeholder="Name of candidate"
                                                    required="required"
                                                    name = "name"
                                                    onChange={this.handleChange}

                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="url"
                                                    id="ImgUrlCan"
                                                    className="form-control"
                                                    placeholder="Image Url"
                                                    required="required"
                                                    name = "img"
                                                    onChange={this.handleChange}
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="description"
                                            id="descriptionCan"
                                            className="form-control"
                                            rows="4"
                                            placeholder="description"
                                            required
                                            onChange={this.handleChange}
                                        ></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-custom btn-lg">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                                           
                        </div>
                    </div>
                </div>
               
           
        );
    }
}

export default AddCandidate;