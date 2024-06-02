import React, { useContext, useState } from 'react'
import Navbar from "./components/navbar"
import Content from './components/content'
import Footer from "./components/footer"
import Card from "./components/card"
import Conditional from './components/conditional'
import Users from './components/users'
import Updatearr from './components/updatearr'
import Updateobject from './components/updateobjects'
import UpdateArrayofobjects from './components/updateArrayofobjects'
import TwoWayBinding from './components/twoway'
import Ref from "./components/ref"
import Cards from './components/data'
import axios from './utils/axios'
import USERS from "./components/newcards"
import Useeffect from "./components/useeffect"
import Miniproject from "./components/miniproject"
import Routes from "./routes/Approutes"



const App = () => {

    const [age1, setage1] = useState(0);
    const [age2, setage2] = useState(0);
    const [age3, setage3] = useState(0);
    const [age4, setage4] = useState(0);
    const [age5, setage5] = useState(0);
    let age = 25;




    return ( <
        >

        <
        div className = 'w-[100vw] h-screen overflow-x-hidden overflow-y-auto bg-zinc-950 text-white flex justify-center flex-wrap  p-6 ' > { /* <Routes/> */ }

        { /* <Miniproject/> */ }

        { /* <Useeffect/>*/ }

        { /* <USERS/> */ }

        { /* <button className='px-4 py-1 rounded-lg bg-orange-600 text-white' onClick={getusers}>Get users</button> */ }

        { /* <Cards/> */ }


        { /* <Ref/> */ }


        { /* <TwoWayBinding/> */ }

        { /* <UpdateArrayofobjects/> */ }


        { /* <Updateobject/> */ }


        { /* <Updatearr/> */ }


        { /* <Users/> */ }



        {
            /* <h1>Conitional rendering in react js</h1>
                  <Conditional  age={age} /> */
        }



        {
            /* <Card  name="Ahsan Ahemd" age={age1} setage={setage1} image="https://images.unsplash.com/photo-1715412406818-48241c841c9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  <Card  name="syed samad ali" age={age2} setage={setage2} image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  <Card  name="Arham ali" age={age3} setage={setage3} image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  <Card  name="salim khan" age={age4} setage={setage4} image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                   */
        }


        <
        /div> <
        />
    )
}




export default App