import {useState} from 'react';


const FindColorForm = () => {
    const [findColor, setFindColor] = useState('')
    const handleSubmit = () => async(e) => {
        e.preventDefault()

            const response = await fetch('/colors/:id', {
            method: 'POST',
            body: JSON.stringify(color),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json= await response.json()

        if(!response.ok) {
            //setError(json.error)
        }
        if(response.ok) {
            setFindColor('')
        
        }
    }  

    
    return (
        <form className="border rounded-lg p-12 shadow-xl"> 
            <div className="text-2xl font-semibold text-gray-900 dark:text-white"><p>Add Color</p></div>
            <div className="text-2xl font-semibold text-gray-900 dark:text-white relative z-0 w-full group">
                    <input type="text" onChange={(e) => setFindColor(e.target.value)} value={findColor}  name="Pav" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="Pav" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color Name </label>
            </div>
            <button type="submit" onClick={handleSubmit}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add color</button> 
        </form>
    )
}

export default FindColorForm