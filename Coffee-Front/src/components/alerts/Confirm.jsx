import Swal from "sweetalert2";

const Confirm = {
    delete: () => {
        return Swal.fire({
            title: 'Do you really want to delete?',
            text: 'Confirming the deletion, the data cannot be recovered.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085de',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete!',
        });
    },
    register: () =>{
        return Swal.fire({
            title: 'Do you want to complete this registration?',
            text: 'By confirming the registration, all data will be saved.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085de',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, register',
        });
    },
    
    cancel: () => {
        return Swal.fire({
            title: 'Do you really want to cancel?',
            text: "When canceling, all information will be lost!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel!',
            cancelButtonText: 'No!'
        })
    },

};

export default Confirm;