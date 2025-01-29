import GlobalStyles from './styles/GlobalStyles'

//lessons
// import Lesson06 from './lessons/Lesson06/Lesson06'
// import Lesson07 from './lessons/Lesson07/Lesson07'
// import Lesson08 from './lessons/Lesson08/Lesson08'
// import Lesson09 from './lessons/Lesson09/Lesson09'
import Lesson10 from './lessons/Lesson10/Lesson10'

//homeworks
// import Homework08 from './homeworks/Homework08/Homework08'
// import Homework09 from './homeworks/Homework09/Homework09'

//consultations
// import Consultation03 from './consultations/Consultation03/Consultation03'
// import Consultation_04 from './consultations/Consultation_04/Consultation_04'


function App() {

  return (
    <>
      <GlobalStyles />
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
      <Lesson10 />
    </>
  )
}

export default App
