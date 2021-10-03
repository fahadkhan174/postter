import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Guard = ({ element, path, roles }) => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.user);

  const goTo = () => {
    if (authenticated) {
      if (roles.some((role) => user.roles.includes(role))) {
        return element;
      }
      return <Navigate to="/401" replace state={{ path }} />;
    }
    return <Navigate to="/login" replace state={{ path }} />;
  };

  return goTo();
};

Guard.propTypes = {
  element: PropTypes.node,
  roles: PropTypes.array,
  authenticated: PropTypes.bool,
  user: PropTypes.object
};

export default Guard;
