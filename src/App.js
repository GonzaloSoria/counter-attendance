import { Counter } from './components/Counter/Counter'
import './App.css'

function App() {
  const wards = [{
    name: "Merlo 1"
  }, {
    name: "Merlo 2"
  },{
    name: "Rivadavia"
  },{
    name: "Villa Amelia"
  },{
    name: "Altos de Merlo"
  },{
    name: "Libertad"
  },{
    name: "Padua"
  },{
    name: "Parque San Martin"
  }]

  return (
    <>
      <h1 className="main-title">ASISTENCIA CONFERENCIA DE ESTACA MERLO OCTUBRE 2024</h1>
        {
          wards.map((ward, i) => {
            return (
              <>
                <div className="ward-container" key={i}>
                  <h2 className="ward-name">{ward.name}</h2>
                  <Counter />
                </div>
              </>
            )
          })
        }
        
    </>
  )
}

export default App
