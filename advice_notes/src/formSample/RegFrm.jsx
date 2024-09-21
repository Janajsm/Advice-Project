import React from 'react'
import { useState } from 'react'
import './RegFrm.css'

export const RegFrm = () => {
    const [User, setUser] = useState({
        name : "Jana",
        age : 26,
        gender : "Male",
        isMarried : false,
        country:"India",
        bio:"I am Programmer"
    })
    function changeHandler (e) {
        const name = e.target.name;
        const value = e.target.type==="checkbox" ? e.target.checked : e.target.value;
        setUser({...User, [name]:value})
    }
  return (
    <>
    <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{User.name}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{User.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{User.gender}</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td>{User.isMarried ? "Married" : "Unmarried"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{User.country}</td>
            </tr>
            <tr>
                <td>Bio</td>
                <td>{User.bio}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type='text' placeholder='Enter the Name' onChange={changeHandler} name="name" />
        <input type='number' placeholder='Enter the Age' onChange={changeHandler} name="age"/>
        <div className='Gender'>
            <label htmlFor='male'>
                <input type='radio' name="gender" id="male" checked={User.gender == "Male"} onChange={changeHandler} value="Male" />
                Male
            </label>
            <label htmlFor='female'>
                <input type='radio' name="gender" id="female" checked={User.gender == "Female"} onChange={changeHandler} value="Female" />
                Female
            </label>
        </div>
        <label htmlFor='isMarried'>
            <input type='checkbox' id='isMarried' checked={User.isMarried} onChange={changeHandler} name="isMarried"/>
            Is Married
        </label>
        <div className='select-div'>
            <label htmlFor='country'>Select Your Country</label>
            <select name='country' id="country" value={User.country} onChange={changeHandler}>
                <option>India</option>
                <option>USA</option>
                <option>Canda</option>
                <option>UK</option>
            </select>
        </div>
        <textarea name='bio' id="bio" cols="30" rows="5" placeholder='Write about you' value={User.bio} onChange={changeHandler} />
    </form>
    </>
  )
}
