import React, { useContext, useEffect } from 'react';

import { GithubContext } from '../../contexts';
import withServices from '../../services';

const Detail = (props) => {
  const { user, setUser } = useContext(GithubContext);

  useEffect(() => {
    props.service.getUser('thiagoguedes99').then(resp => {
      setUser(resp.data)
    })

  }, [])

  return (
    <div>
      detail comoponet {user.login}
    </div>
  )
}

export default withServices(Detail);
