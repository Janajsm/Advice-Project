import React from 'react'
import { useState } from 'react'

export const Cart = () => {
  const [cartCount, setCartCount] = useState(0)
  const [User, setUser] =useState({"name":"Jana","age":27})
  const [Users, setUsers] =useState({"fname":"Jana", "lname":"JP", "age":27})
  // const [userName, setUserName] =useState("Arul")
  // const [userAge, setUserAge] =useState(23)

  const additem = () =>(setCartCount(cartCount + 1))
  const subtractitem = () =>(setCartCount(cartCount - 1))

  const updateusername = () =>{
    setUser({...User, name:"Arul"})
    // userName == "Arul" ? setUserName("Sam") : setUserName("Arul");
  }

  const updateuserage = () => {
    setUser({...User, name:"Sam", age:25 })
    // userAge == 23 ? setUserAge(30) : setUserAge(23);
  }

  // function changeHandlerName(e){
  //   /* Option 1 */

  //   // const newStateObject = {...User};
  //   // newStateObject.name = e.target.value;
  //   // setUser(newStateObject);

  //   /* Option2 */
  //   setUser((oldState) =>{
  //     return { ...oldState, name:e.target.value};
  //   });
  // }

  // function changeHandlerAge(e) {
  //   setUser((oldState) => {
  //     return { ...oldState, age:e.target.value}
  //   })
  // }

  // multi property use Single Handle function used
  function singleHandler(e){
    setUsers({...Users, [e.target.name]:e.target.value})
  }
  return (
    <>
      <h1>Number of Item in the Cart: {cartCount}</h1>
      <button onClick={additem}>{cartCount} Add Item</button>
      <button onClick={subtractitem}>{cartCount} Subtract Item</button>
      <h1>Update User Details</h1>
      <h2>{User.name}</h2>
      <h2>{User.age}</h2>
      <button onClick={updateusername}>Update User Name</button>
      <button onClick={updateuserage}>Update User Age</button>
      <h1>
        {Users.fname} {Users.lname}, {Users.age}
      </h1>
      <form>
        <input type='text' placeholder='Enter User Name' value={Users.fname} onChange={singleHandler} name="fname"/>
        <input type='text' placeholder='Enter User Name' value={Users.lname} onChange={singleHandler} name="lname"/>
        <input type='text' placeholder='Enter User Age' value={Users.age} onChange={singleHandler} name="age"/>
      </form>
    </>
  )
}
