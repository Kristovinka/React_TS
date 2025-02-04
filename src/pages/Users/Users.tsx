import { Link, useNavigate } from "react-router-dom"

import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {
  //useNavigate - возвращает функцию, при вызове которой мы можем перенаправить 
  // пользователя на другой url
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about')
  }

  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to='user'>Go to User page</Link>
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  )
}

export default Users