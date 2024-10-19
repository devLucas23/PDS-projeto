import Swal from 'sweetalert2';

const Sucess = {
    register: () => {
        return Swal.fire(
            'Registered!',
            'Successful registration operation',
            'success'
        )
    },
   
    delete: () => {
        return Swal.fire(
            'Deleted!',
            'The delete operation was successful.',
            'success'
        )
    },
    tokenExpired: () => {
        return Swal.fire(
            'Runtime Expired',
            'Please log in again or restart your session.',
            'info'
        )
    }
};


export default Sucess