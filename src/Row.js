import './App.css'
import $ from "jquery"
import { useEffect } from 'react'

function Row(props) {

    const AppsCheck = ["Dream","Imagine","Inspire","DreamEye"]

    let Apps = []

    useEffect(() => {
        AppsCheck.forEach(app => {
          if(props.data.apps.includes(app)){
              $("#"+props.data.id+app).addClass("image-enabled")
              Apps.push(app)
          }
      }, [])
    })

    const update = (app) => {
        if(!Apps.includes(app)){
            Apps.push(app)
            $("#"+props.data.id+app).addClass("image-enabled")
        }
        else {
            var index = Apps.indexOf(app)
            if (index !== -1) {
                Apps.splice(index, 1)
                $("#"+props.data.id+app).removeClass("image-enabled")
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: props.data.id, apps: Apps })
            }
            fetch(`https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/launcher/${props.data.id}`, requestOptions)
                .then(response => response.json())
    }


  return (
    <div className="row-container">
        <div className='userName'>{props.data.id}</div>
        <button title="Dream" onClick={() => update("Dream")} className='btn'><img id={props.data.id+"Dream"} alt="" className='image' src="./image1.jpg"></img></button>
        <button title="Imagine" onClick={() => update("Imagine")} className='btn'><img id={props.data.id+"Imagine"} alt="" className='image' src="./image2.jpg"></img></button>
        <button title="Inspire" onClick={() => update("Inspire")} className='btn'><img id={props.data.id+"Inspire"} alt="" className='image' src="./image3.jpg"></img></button>
        <button title="Dream Eye" onClick={() => update("DreamEye")} className='btn'><img id={props.data.id+"DreamEye"} alt="" className='image' src="./image4.jpg"></img></button>
    </div>
  )
}

export default Row
