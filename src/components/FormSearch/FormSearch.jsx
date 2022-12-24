//import react router
import { useNavigate } from "react-router-dom"

//import hooks
import { useForm } from "../../hooks/useForm"

export const FormSearch = () => {

    const navigate = useNavigate()

    const { searchText, inputChange } = useForm( {
        searchText: '',
    })

    const onSubmitForm = (e) => {
        e.preventDefault();

        if(searchText.trim().length <= 1) return;
        

        navigate(`/search?q=${ searchText.split(' ').join('-').toLowerCase().trim() } `)

    }

    return (
        
        <form onSubmit={ onSubmitForm } className="formSearch">

            <input 
                className="inputSearchMovie" 
                type="text"
                name="searchText"
                placeholder="Search movie"
                value={ searchText }
                onChange={ inputChange }
                autoComplete="off"
            />
            <button className="lenssSearch__container" >
                <img src="/assets/lupa.png" alt="Ícono búsqueda" />
            </button>
        </form>
    )
}
