function ChampText({ label, type, placeholder, mandatory, onChange, value, name }) {
    return (
        <div className="text-field font-soustitre"> 
            <label className="text-[#F5F5F5]">
                {label}
            </label>
            <input 
                onChange={onChange} 
                required={mandatory} 
                placeholder={placeholder}
                type={type}
                value={value}
                name={name}
                className="my-2 mb-6 p-3 appearance-none block w-full bg-[#f5f5f5]  placeholder:text-slate-300 rounded border focus:border-teal-500" 
            />
        </div>
    );
}

export default ChampText;
