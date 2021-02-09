import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    function save(){
        props.saveName(username)
        setShowInput(false)
    }
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
           <button className="ok_button" onClick={save}>OK</button>
            
            
        
        </div>
    }

    return <div className="name-picker">
        <div>{username}</div>
        <button className="name-edit" onClick={()=> setShowInput(true)}>
            Edit Name
        </button>
    </div>
}

export default NamePicker