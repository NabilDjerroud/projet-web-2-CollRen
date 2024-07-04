

function ChampTextArea (props) {

    const handleTyping = (event) => {
        props.whenChanged(event.target.value);
    }

    return (

        <div className="text-field"> 
            <label className="text-[#F5F5F5]">
                {props.label}
            </label>
            <textarea 
            value={props.content} 
            onChange={handleTyping} 
            required={props.mandatory} 
            placeholder = {props.placeholder}                             
            className='my-2 mb-6 p-3 block w-full bg-[#f5f5f5]  placeholder:text-slate-300 rounded border focus:border-teal-500'
            ></textarea>
        </div>

    )
}

export default ChampTextArea;