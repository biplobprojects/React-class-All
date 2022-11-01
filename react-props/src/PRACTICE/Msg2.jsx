import React from 'react'

const Msg2 = (props) => {
  return (
    <div>
      <h1>MSG2 COMPONENTS</h1>

      <pre>{JSON.stringify(props)}</pre>
<h3>id:{props.fullData.id}</h3>
<h3>name: {props.fullData.name}</h3>
<h3>salary:{props.fullData.salary}</h3>
   
    </div>
  )
}

export default Msg2
