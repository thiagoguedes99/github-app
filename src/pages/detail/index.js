import React, { useContext, useEffect } from 'react';

import { GithubContext } from '../../contexts';
import withServices from '../../services';
// import { getUser, } from '../../services/api';

// export default function Detail() {
const Detail = (props) => {
  const { user, setUser } = useContext(GithubContext);

  useEffect(() => {
    console.log('props')
    console.log(props)

    props.service.getUser('thiagoguedes99').then(resp => {
      console.log(resp.data.node_id)
      console.log(resp.data.login)
      setUser(resp.data)
    })

  }, [])

  return (
    <header>
      detail comoponet {user.login}
    </header>
  )
}

export default withServices(Detail);
//export default Detail;
