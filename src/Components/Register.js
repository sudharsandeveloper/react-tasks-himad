import bg_image from '../Img/Screenshot_59.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'


function Register(){
    return(
        <section className="register-page">
            <div className="container form-card">
                <div className="row">
                    <div className="col-8">
                        <form className='form-section'>
                            <div>
                                <p className='page-heading'>Register</p>
                                <p className='des-1'>Enter your details let's you in.</p>
                                <button className='form-control text-white apple-sign-btn'><FontAwesomeIcon icon={faApple} style={{marginRight: '10px'}} />   Continue with Apple</button>
                            </div>
                            <div className='d-flex mt-4 mb-4 text-center'>
                                <span className='r-line'></span>
                                <span className='r-text'>Or</span>
                                <span className='r-line'></span>
                            </div>
                            <div>
                                <label className='mb-3 d-block'>Username</label>
                                <input className='mb-3 form-control d-block form-section-input' type="text" name="username" />
                                <label className='mb-3 d-block font-weight-bold'>Email address</label>
                                <input className='mb-3 form-control d-block form-section-input' type="text" name="email" />
                                <label className='mb-3 d-block'>Password</label>
                                <input className='mb-3 form-control d-block form-section-input' type="password" name="password" />
                                <label className='mb-3 d-block'>Confirm Password</label>
                                <input className='mb-3 form-control d-block form-section-input' type="password" name="confirm_password" />
                                <div className='gap-3'>
                                    <input className='mb-3' type="checkbox" name="rememberme"/>
                                    <label className='p-3'>Remember me</label>
                                </div>
                                <button className='form-control mb-3 sign-up-btn'>Sign up</button>
                                <div className='text-center'>
                                    <label>Have an account?<a href='#' className='a-text'> Sign in here</a></label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-4">
                        <img className='bg-image' src={bg_image} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;