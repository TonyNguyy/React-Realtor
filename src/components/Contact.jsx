import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../firebase";
import {toast} from "react-toastify"

export default function Contact({userRef, listing}) {
    const[landlord, setLandLord] = useState(null)

    const [message,setMessage] = useState("")

    useEffect(() =>{
        async function getLandlord(){
            const docRef = doc(db,"user", userRef)
            const docSnap= await getDoc(docRef);
            if(docSnap.exists()){
                setLandLord(docSnap.data())
            }else{
                toast.error("Could not get Landlord Data");
            }
        }
        getLandlord();
    },[userRef]);

    function onChange(e){
        setMessage(e.target.value);
    }

  return (
    <>{landlord !== null && (
        <div className="flex flex-col w-full">
            <p>Contact {landlord.name} for the {listing.name.toLowerCase()}</p>
            <div className="mt-3 mb-6">
                <textarea className="w-full px-4 py-2 text-xl
                text-gray-700 bg-white border border-gray-300
                rounded transition duration-150 ease-in-out
                focus:text-gray-700 focus:bg-white focus:border-slate-600"
                onChange={onChange}  
                name="message" id="message" rows="2" value={message}>

                </textarea>
            </div>

            <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}>
                <button className="px-7 py-3 bg-blue-600 text-white
                rounded text-sm uppercase shadow-md hover:bg-blue-700
                hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6" type="button">Send Message</button>
            </a>
        </div>
    )}
    </>
  )
}
