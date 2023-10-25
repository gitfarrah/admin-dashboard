import { Link } from "react-router-dom";

export default function login(){
    const onSubmit=(ev)=>{
        ev.preventDefault();
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">Login into your account</h1>
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to="/signup">Create an account </Link>
                    </p>
                </form>

            </div>
        </div>
    )
}