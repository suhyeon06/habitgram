import AuthForm from 'components/AuthForm';
import GoogleAuth from 'components/GoogleAuth';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <AuthForm isNewAccount={false} />
      <span>or</span>
      <GoogleAuth />
      <span>Don't have an account?</span>
      <Link to="/signup">Create an account</Link>
    </div>
  );
};

export default Login;
