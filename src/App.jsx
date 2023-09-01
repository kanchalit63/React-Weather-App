import { useState } from 'react'
import axios from 'axios'
function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=108fddee5d4ce084d39104f6de342107` // สร้างตัวแปรสำหรับเก็บค่า API

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }

  } //Function ค้นหาข้อมูลเกี่ยวกับ การค้นหาที่พื้น โดยสร้างเงื่อนไขว่า เมื่อ evnet.key มีการ enter ข้อมูล ให้ทำการเรียกใช้ Api


  return (
    <div className='app'>
      <div className="search">
        <input type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' onKeyUp={searchLocation} /> {/* ทำการเมื่อรับ Input เข้ามาให้ข้อมูลไปเก็บอยู่ในตัวแปรของ location เพื่อทำค่าไปใช้งานใน Api โดยหลังจากใช้ Onkeyup   */}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}   {/* เรียกใช้ข้อมูลในส่วนของ API เพื่อดึงค่ามาแสดงข้อมูล อ้างอิงจากไฟล์ weather.json ได้เลย*/}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null} {/* เรียกใช้ข้อมูลในส่วนของ API เพื่อดึงค่ามาแสดงข้อมูล อ้างอิงจากไฟล์ weather.json ได้เลย*/}
          </div>
        </div>
        {data.name != undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}</p> : null} {/* เรียกใช้ข้อมูลในส่วนของ API เพื่อดึงค่ามาแสดงข้อมูล อ้างอิงจากไฟล์ weather.json ได้เลย*/}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null} {/* เรียกใช้ข้อมูลในส่วนของ API เพื่อดึงค่ามาแสดงข้อมูล อ้างอิงจากไฟล์ weather.json ได้เลย*/}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null} {/* เรียกใช้ข้อมูลในส่วนของ API เพื่อดึงค่ามาแสดงข้อมูล อ้างอิงจากไฟล์ weather.json ได้เลย*/}
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default App
