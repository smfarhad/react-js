import PropTypes from 'prop-types'


export default function UserNav({isLogin,userName}) {
  return ( 
    <div>
        {isLogin?(
            <div>Welcome {userName}</div>
        ):
        (<div>
            <button type="button" className="btn btn-outline-primary me-2">
            Login
        </button>
        <button type="button" className="btn btn-primary">
            Sign-up
        </button> 
        </div>)
        }
    </div>
  );
}
UserNav.propTypes={
    isLogin: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
}