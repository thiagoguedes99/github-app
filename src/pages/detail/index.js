import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom'

import { GithubContext } from '../../contexts';
import withServices from '../../services';

const Detail = (props) => {
  const { user, setUser } = useContext(GithubContext);
  const location = useLocation();
  // const params = useParams();
  const { user: userSeacr } = useParams();

  useEffect(() => {
    console.log(location)
    // console.log(params)
    props.service.getUser(userSeacr).then(resp => {
      setUser(resp.data)
      console.log(resp.data)
    })

  }, [])

  return (
    <>
    <br/>
    <h1>{user.name}</h1>
    <br/>
    <p>{user.bio}</p>
    <br/>
    <p>{user.location}</p>
    <br/>
    <button>Ver repositórios</button>
    </>
  )
}

export default withServices(Detail);
