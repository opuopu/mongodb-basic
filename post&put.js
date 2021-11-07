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
    
//     ------------------------------query by email frontend---------------------------
    const [appoitments,setappoitments] = useState()
console.log(appoitments);

useEffect(()=>{
fetch(`http://localhost:5000/query?email=${user?.email}`)
.then(res =>res.json())
.then(data => setappoitments(data))

},[])
    
//     -------------------------------cheek exist in database and send data to database if exist nothing working ---frontend----------
    এইখানে অনলি পূট মেথড লিখতে হবে বাকি কাজ backend  এ
    const saveUser = (email,displayName,method) =>{
const user = {email,displayName}
fetch(`http://localhost:5000/adduser`,{
    method:method,
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)
})
}
//     ---------------------------cheek exist backend code--------------------------------
//     এইখানে filter by email  দিকে চেক করছি ডাটাবেসে আগে আছে কিনা থাকলে add  করবে না থাকলে  add  করবে না
    app.put('/adduser', async(req,res)=>{
 
  const filter = {email:req.body.email}
  const options = {upsert:true};
  const updatedoc ={$set: req.body}
  const result = await newUser.updateOne(filter,updatedoc,options)
res.send(result)
})
    
    
