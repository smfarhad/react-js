import PropTypes from 'prop-types'


export default function UserNav({isLogin,userName}) {
    const welcomeElement = <div>Welcome, {userName}</div>;
    const notLoginElement = <div>
                                <button type="button" className="btn btn-outline-primary me-2"> Login </button>
                                <button type="button" className="btn btn-primary"> Sign-up </button> 
                            </div>;
  return ( 
    <div>
       {isLogin?welcomeElement:notLoginElement}
    </div>
  );
}
UserNav.propTypes={
    isLogin: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
}