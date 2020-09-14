import React, { useState } from 'react';

const Login = () =>{
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const loginHandler = (props) =>{
        fetch(`http://localhost:8010/api/auth/login`,{
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers:{
                'Content-Type' : 'application/json'            }
        }).then(res => res.json()
        ).then(data =>{ 

            localStorage.setItem('token',data.token);

            fetch(`http://localhost:8010/api/auth/isAuthenticated`,{
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
            }).then(res => res.json()
            ).then(data =>{ 

            localStorage.setItem('isAuthenticated',data.isAuthenticated);
            });
        });
    }

    return(
    <div data-testid="content" className="container mt-3">
        <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                    <input id ="Username" type="text" placeholder="Enter Username" className="form-control" onChange={(e) => setUsername(e.target.value)}  />
                </div>
                <div className="form-group">
                    <input id="password" type="password" placeholder="Enter Password" className="form-control" onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="form-group">
                    <button id="loginBtn" data-testid="btnPrimary" onClick={loginHandler} type="button" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Login;
