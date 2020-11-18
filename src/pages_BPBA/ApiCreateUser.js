import React, { Component } from "react";


class GetUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
   /* SAMPLE UNTUK POST DATA */

  componentDidMount() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://18.191.9.5:8090/user/create', requestOptions)
        .then(response => response.json())
        //.then((data) => console.log('This is your data', data))
        .then(data => this.setState({ 
            postId: data.user.Id,
            postNama: data.user.nama,
            postAlamat: data.user.alamat
        }));
}

render() {
    const { postId, postAlamat, postNama } = this.state;
    
    return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Returned Id: {postId} {postNama} {postAlamat}
                </div>
            </div>
    );
}

}

export default GetUsers;
