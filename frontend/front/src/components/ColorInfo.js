const ColorInfo = ({ color }) => {
    return (
        <div className="border rounded-lg p-12 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Formulation {color.Pav}
                </h5>
                <h5 className="text-xl font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Amount
                </h5>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                    <p> {color.c1} </p>
                    <p>{color.p1}</p>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                    <p>{color.c2} </p>
                    <p>{color.p2}</p>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                    <p>{color.c3} </p>
                    <p>{color.p3}</p>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                    <p>{color.c4} </p>
                    <p>{color.p4}</p>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                    <p>{color.c5} </p>
                    <p>{color.p5}</p>
                </div>             
            </div>              
            <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            > Print
            </button>     
          </div>    
                   
            
    )
}

export default ColorInfo