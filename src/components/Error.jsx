import Header from './Header'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <Header/>
      <h1>Error This page does not exist.</h1>
      <h2>{error.status} {error.statusText}</h2>
    </div>
  )
}

export default Error