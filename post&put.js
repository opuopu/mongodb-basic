const AddUser = () => {
    // using ref to get input value post 

    // ''''''''''''''''''''post method fronted''''''''''''''''''''''''''''
 
    const nameRef = useRef()
    const emailRef = useRef()

    const handleSubmit =(e) =>{
const name = nameRef.current.value
const email  = emailRef.current.value 
const appleuser = {
    name:name,
    email:email
}

fetch('http://localhost:5000/adduser',{
    method: "POST",
    headers:{
        'content-type':'application/json'
    },
body:JSON.stringify(appleuser)

})
.then(res =>res.json())
.then(data=>{})
e.preventDefault()

    }