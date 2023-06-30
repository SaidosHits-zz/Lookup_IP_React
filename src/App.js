import './App.css';
import { useState , useRef} from 'react';



function App() {
let ipinput = useRef()
const [Ip , setip] = useState("")
  const [inetrnetpro, setinetrnetpro] = useState([])
  const fetchUserData = () => {
    const url = `https://weatherapi-com.p.rapidapi.com/ip.json?q=${Ip}`
    const option = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '033b6742b7mshe3030434a7892e8p1ef822jsnbd2fe53b8f48',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
      
    };
      fetch(url, option)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setinetrnetpro(data)
      })
  
  }
  return(
    <>
    <div className='container'>
      <div className='search'>
        <input type='text' ref={ipinput} onChange={(event) => setip(event.target.value)} placeholder='Ex:145.148.13.1'/>
        <button onClick={fetchUserData}>Lookup</button>
      </div>
      <div className='ruselt'>
        <h3>Ips:    <span>{inetrnetpro.ip}</span></h3>
        <h3>type: <span>{inetrnetpro.type}</span></h3>
        <h3>continent code: <span>{inetrnetpro.continent_code}</span></h3>
        <h3>continent name: <span>{inetrnetpro.continent_name}</span></h3>
        <h3>country_code: <span>{inetrnetpro.country_code}</span></h3>
        <h3>country name: <span>{inetrnetpro.country_name}</span></h3>
        <h3>city: <span>{inetrnetpro.city}</span></h3>
        <h3>region: <span>{inetrnetpro.region}</span></h3>
        <h3>lat: <span>{inetrnetpro.lat}</span></h3>
        <h3>lon: <span>{inetrnetpro.lon}</span></h3>
        <h3>tz_id: <span>{inetrnetpro.tz_id}</span></h3>
        <h3>localtime: <span>{inetrnetpro.localtime_epoch}</span></h3>
        <h3>localtime_epoch: <span>{inetrnetpro.localtime}</span></h3>
      </div>
    </div>
    </>
  )
  
}

export default App;
