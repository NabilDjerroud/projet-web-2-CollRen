function Bouton({onClick, type, children}) {
    return (
        <button
            className="bg-orange font-soustitre hover:bg-[#868E9B] text-white font-bold py-2 px-4 rounded-full mx-[1rem]"
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

export default Bouton;