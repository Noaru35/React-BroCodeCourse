import Student from "./Students"

function App() {
  return(
    <>
    <Student name="CabeçaChata" age={67} isStudent={true}/>
    <Student name="CabeçaOca" age={66} isStudent={false}/>
    <Student name="CabeçaDeCuia" age={68} isStudent={false}/>
    <Student name="CabeçaDeNosTodos" age={65} isStudent={true}/>
    <Student name="CabeçaDeVento"/>
    </>
  );
}

export default App
