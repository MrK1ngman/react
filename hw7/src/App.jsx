import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card
        img=
          {
            <img src='https://media.istockphoto.com/id/497040301/photo/white-baseball-hat.jpg?s=612x612&w=0&k=20&c=CdfjW7GlFoUOvUozoe3UL0fe205V3FcaCwDxfipsQ1g=' className="card-img-top"/>
          }
        title={'Card title'}
        text={'Some quick example text to build on the card title and make up the bulk of the card`s content.'}
        btnText={'Go somewhere'}
      />
      <Card
        title={'Second title'}
        text={'Anyone text'}
        btnText={'let`s go'}
      />
      <Card
        img=
          {
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
            </svg>
          }
        title={'Mega title'}
        text={'Super text'}
        btnText={'go go go'}
      />
    </>
  )
}

export default App
