import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            {
                error && error?.statusText
            } 
            
            {
                error && error?.status
            }
        </div>
    )
}

export default NotFound