//import hooks
import { useEffect } from "react";


export const lazyLoading = ( referency ) => {

    const callbackFunction = ( entries => {
        entries.forEach( entry => {
            if(entry.isIntersecting) {
                const urlImg = entry.target.getAttribute('data-img')
                entry.target.setAttribute('src', urlImg) 
            }
        });
    })

    useEffect( () => {

        //Intersection Observer
        const observer = new IntersectionObserver( callbackFunction )
        const currentTarget = referency.current;

        if(currentTarget) {
            observer.observe(currentTarget)
        }

    }, [ referency ])

}
