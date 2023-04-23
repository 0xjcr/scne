import SignUpForm from "../components/SignUpForm"


const SignUp = () => {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>JOIN THE SCNE</h1>
    
    <h2>CREATE A PROFILE</h2>
    </div>
    <SignUpForm></SignUpForm>
    </>
  )
}

export default SignUp