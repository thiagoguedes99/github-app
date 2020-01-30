import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

import withServices from '../../services';
import { Avatar } from '../../components';

const List = ({ service }) => {
  const [userList, setUserList] = useState([]);
  const [userListTotal, setUserListTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    console.log('location')
    console.log(location)

    service.getUsersList(location.search.split('=')[1]).then(resp => {
      setUserList(resp.data.items)
      setUserListTotal(resp.data.total_count)
      console.log(resp.data.items)
      console.log(resp.data.total_count)
    })
  }, [])

  return (
    <ul>
      {userList.map((item, index) => (
        <li key={index}>
          <Link to={`detail/${item.login}`}>
            <Avatar src={item.avatar_url} />
            <span>{item.login}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default withServices(List);
