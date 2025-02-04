import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07'
// import Lesson08 from './lessons/Lesson08/Lesson08'
// import Lesson09 from './lessons/Lesson09/Lesson09'
// import Lesson10 from './lessons/Lesson10/Lesson10'
// import Lesson12 from 'lessons/Lesson12/Lesson12'
//---Lesson 13
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Users from 'pages/Users/Users'
import User from 'pages/Users/components/User/User'
import Lesson14 from 'lessons/Lesson14/Lesson14'



//homeworks
// import Homework08 from './homeworks/Homework08/Homework08'
// import Homework09 from './homeworks/Homework09/Homework09'
// import Homework10 from './homeworks/Homework10/Homework10'
// import Homework12 from 'homeworks/Homework12/Homework12'
import Clients from 'pages/Clients/Clients'
import Facebook from 'pages/Clients/components/Facebook/Facebook'
import Google from 'pages/Clients/components/Google/Google'
import Amazon from 'pages/Clients/components/Amazon/Amazon'



//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03'
// import Consultation_04 from './consultations/Consultation_04/Consultation_04'


function App() {

  return (
    //BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами
    // по всему приложению
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/user' element={<User />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          {/* --Topic: useContext */}
          <Route path='/lesson14' element={<Lesson14 />} />
          {/* Route * - этот route показывает контент, если маршрута не существует в перечисленных выше */}
          <Route path='*' element='Page not found' />
        </Routes>
      </Layout>
      {/* --Topic: TypeScript - Introduction */}
      {/* <Lesson06/> */}
      {/* <Consultation03 /> */}
      {/* --Topic: TypeScript - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* --Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* --Topic: Control components, useEffect */}
      {/* <Lesson09 /> */}
      {/* <Consultation_04 /> */}
      {/* <Homework09 /> */}
      {/* --Topic: useEffect, axios */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* --Topic: formik, yup */}
      {/* <Lesson12 /> */}
      {/* <Homework12/> */}
    </BrowserRouter>
  )
}

export default App
