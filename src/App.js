import validator from 'validator'
import './App.css';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [firstname, setfirstname] = useState('')

  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpass] = useState('')
  const [number, setnum] = useState('')
  const [dob, setdob] = useState('')
  const [gender, setgender] = useState('')
  const [err, seterr] = useState('')
  const [err2, seterr2] = useState('')
  const [err3, seterr3] = useState('')
  const [err4, seterr4] = useState('')
  const [err5, seterr5] = useState('')
  const [err6, seterr6] = useState('')
  const [err7, seterr7] = useState('')
  const [data, setdata] = useState([])


  const EventHandler = () => {
    if (data === '') {
      setdata('')
    }
    localStorage.setItem('data', JSON.stringify([{
      name: firstname + ' ' + lastname,
      email: email,
      number: number,
      dob: dob,
      gender: gender,
    }]))


    if (firstname === '') {
      seterr("Enter Name")
    } else {
      seterr('')
    }
    if (lastname === '') {
      seterr2('Enter Lastname')
    } else {
      seterr2('')
    }
    if (validator.isEmail(email)) {
      seterr3('')
    } else {
      seterr3('Enter valid email')
    }
    if (email === '') {
      seterr3('Enter Email ')
    }



    if (password === '') {
      seterr4('Enter Password')
    } else {
      seterr4('')
    }

    if (number === '') {
      seterr5("Enter Number")
    } else if (number.length <= 10) {
      seterr5("10 Digit Allow")
    } else {
      seterr5('')
    }




    if (dob === '') {
      seterr6('Enter DOB')
    } else {
      seterr6('')
    }
    if (gender === '') {
      seterr7('Select gender')
    } else {
      seterr7('')
    }
    if (firstname === '' || lastname === '' || email === '' || password === '' || number === '' || gender === 'Gender' || dob === '') {
      toast.error('Enter fields')

    } else {
      setdata(JSON.parse(localStorage.getItem('data')))
      console.log(data)
      toast.success("User Created succes")
    }

  }

  return (
    <>

      <div className='w-full h-screen  flex justify-evenly items-center flex-col' >

        <form className='mt-5 bg-white' onSubmit={(e) => {
          e.preventDefault()
        }}>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input onChange={(e) => {
                setfirstname(e.target.value)
              }} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
              {
                err && <span className='text-xs text-red-500' >{err}</span>
              }
            </div>


            <div class="relative z-0 w-full mb-6 group">
              <input onChange={(e) => {
                setlastname(e.target.value)
              }} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
              {
                err2 && <span className='text-xs text-red-500' >{err2}</span>
              }
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input onChange={(e) => {
              setemail(e.target.value)
            }} type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            {
              err3 && <span className='text-xs text-red-500' >{err3}</span>
            }
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input onChange={(e) => {
              setpass(e.target.value)
            }} type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            {
              err4 && <span className='text-xs text-red-500' >{err4}</span>
            }
          </div>

          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input onChange={(e) => {
                setnum(e.target.value.replace(/\D/g, ''))
              }} type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={number}  required/>
              <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
              {
                err5 && <span className='text-xs text-red-500' >{err5}</span>
              }
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input onChange={(e) => {
                setdob(e.target.value)
              }} type="date" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date Of Birth</label>
              {
                err6 && <span className='text-xs text-red-500' >{err6}</span>
              }
            </div>

          </div>
          <label for="underline_select" class="sr-only">Underline select</label>
          <select onChange={(e) => {
            setgender(e.target.value)
          }} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            <span className='text-xs text-red-500' >select gende</span>
          </select>

          {
            err7 && <span className='text-xs text-red-500' >{err7}</span>
          }

          <div className='flex w-full justify-center items-center'>

            <button onClick={EventHandler} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Submit</button>
          </div>
          <ToastContainer />
        </form>

        <div class="table-wrapper w-full">
          {data.map((item, id) => {
            return (

              <table class="fl-table">
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th> Email </th>
                    <th>Date of birth</th>
                    <th>Gender</th>
                    <th>Contact</th>

                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.number}</td>


                  </tr>

                </tbody>
              </table >
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
