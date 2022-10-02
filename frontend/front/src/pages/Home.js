import { useEffect, useState } from "react";
import ColorInfo from "../components/ColorInfo"
import AddColorForm from "../components/AddColorForm"
import FindColorForm from "../components/FindColorForm"

const Home = () => {
    const [colors, setColors] = useState(null)

    useEffect(() => {
        const fetchColors = async () => {
            const response = await fetch('/colors/')
            const json = await response.json()

            if(response.ok) {
                setColors(json)
            }
        }
        fetchColors()
    }, [])

    return (
        <div className="flex m-8 backdrop:justify-between">
            
            <div className="m-6 grid gap-8 grid-cols-3 grid-rows-3">
                {colors && colors.map((color) => (
                    <ColorInfo key={color._id} color={color}/>
                ))}
            </div>
            <FindColorForm />
            <AddColorForm />
            
        </div>
    )
}

export default Home