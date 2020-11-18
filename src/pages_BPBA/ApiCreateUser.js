import React, { Component } from "react";
import { Form, Col, Row, Button, Modal, Table, ButtonGroup } from 'react-bootstrap'


class PostUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {nama: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({nama: event.target.value});
      }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    fetch('http://18.191.9.5:8090/user/create', {
        method: 'POST',
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

                        /* SAMPLE UNTUK POST DATA */

                        //   componentDidMount() {
                        //     const requestOptions = {
                        //         method: 'POST',
                        //         headers: { 'Content-Type': 'application/json' },
                        //         body: JSON.stringify({ title: 'React POST Request Example' })
                        //     };
                        //     fetch('http://18.191.9.5:8090/user/create', requestOptions)
                        //         .then(response => response.json())
                        //         //.then((data) => console.log('This is your data', data))
                        //         .then(data => this.setState({ 
                        //             postId: data.user.Id,
                        //             postNama: data.user.nama,
                        //             postAlamat: data.user.alamat
                        //         }));
                        // }

                        // render() {
                        //     const { postId, postAlamat, postNama } = this.state;
                            
                        //     return (
                        //             <div className="card text-center m-3">
                        //                 <h5 className="card-header">Simple POST Request</h5>
                        //                 <div className="card-body">
                        //                     Returned Id: {postId} {postNama} {postAlamat}
                        //                 </div>
                        //             </div>
                        //     );
                        // }

}

export default PostUsers;
