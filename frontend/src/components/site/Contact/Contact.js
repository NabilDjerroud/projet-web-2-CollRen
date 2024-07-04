import React from 'react';
import "./Contact.css";

function Contact({ t }) {
    return (
        <main className="main-background ">
            <div className="form-container ">
                <h1 className="text-4xl  font-titre font-bold">Contactez nous</h1>
                <form  className="form-inner">
                    
                   
                  
                 
                   
                    <div className="flex justify-center">
                        <button type="submit" className="orange-button font-soustitre">Envoyer</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contact;
