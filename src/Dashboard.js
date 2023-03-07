import React, {useEffect, useState, } from 'react'



const Dashboard = () => {

  const countries = [
    {
      Id:1,
      country: "India",
      states: [{
        Id: 1,
        state: "Delhi"
      },
      {
        Id: 1,
        state: "Up"
      },
      {
        Id: 1,
        state: "Bihar"
      }
      ]
    },
    {
      Id:2,
      country: "America",
      states: [{
        Id: 1,
        state: "New York"
      },
      {
        Id: 1,
        state: "Chicago"
      },
      {
        Id: 1,
        state: "Los Angles"
      }
      ]
    },

  ]
  const [user, setUser] = useState(null)
  const url = "https://jsonplaceholder.typicode.com/users";
   
  useEffect(()=>{
       const getData = new Promise("https://jsonplaceholder.typicode.com/users");
      
  }, [])



  return (
    <div style={{textAlign:"center"}}>
          { user && user.map((item)=>{
               return <li>{item.name}</li> 
           })
          }
    </div>
  )
}

export default Dashboard