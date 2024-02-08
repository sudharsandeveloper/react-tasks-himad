import bg_image from '../Img/Screenshot_59.png'

function Register(){
    return(
        <section className="register-page">
            <div className="container form-card">
                <div className="row">
                    <div className="col-7">
                        <form className='form-section'>
                            <div>
                                <h2 className='page-heading'>Register</h2>
                                <p className='des-1'>Enter your details let's you in.</p>
                                <button className='apple-sign-btn'>Continue with Apple</button>
                            </div>
                            <div>
                                <span></span>
                                <span>Or</span>
                                <span></span>
                            </div>
                            <div>
                                <label>Username</label>
                                <input type="text" name="username" />
                                <label>Email address</label>
                                <input type="text" name="email" />
                                <label>Password</label>
                                <input type="password" name="password" />
                                <label>Confirm Password</label>
                                <input type="password" name="confirm_password" />
                                <input type="checkbox" name="rememberme"/>
                                <button>Sign up</button>
                                <span>Have an account?<a>Sign in here</a></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={bg_image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;