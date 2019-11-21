import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ users }) => (
  <aside id='sidebar' className='sidebar'>
  {console.log(users)}
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          {console.log(users)}
        </li>
      ))}
    </ul>
  </aside>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired
  ).isRequired
}

export default Sidebar;