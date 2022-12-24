// import reactRouter
import { useNavigate } from "react-router-dom"


export const CategoryItem = ( { name, id } ) => {

    const navigate = useNavigate()

    const onClickCategory = () => {
        navigate(`/category/${id}-${name}`)
    }

    return (
        <p 
            id={ `id${id}` } 
            className="category"
            onClick={ onClickCategory }
        >
            { name } 
        </p>
    )
}
