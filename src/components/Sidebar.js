import React from 'react';

const Sidebar = ({ users, callback }) => (
  <aside id='sidebar' className='sidebar'>
    <ul>
      {/* {console.log(callback)} */}
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;