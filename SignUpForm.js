import "./SignUpStyles.css"

function SignUpForm(){
    return(
        <div className="from">
            <h1>Create an Account</h1>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>Sign Up</button>
                
            </form>
        </div>
    )
}

export default SignUpForm;