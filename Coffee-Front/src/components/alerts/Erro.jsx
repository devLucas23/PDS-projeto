import Swal from "sweetalert2"

const Erro = {
    erro: (motivo) => {
        const mensagemFormatada = motivo.replace(/\n/g, '<br>');

        return Swal.fire({
            title: 'Oops...',
            html: `${mensagemFormatada}`,
            icon: 'error',
            htmlMode: true,
        });
    },
};

export default Erro;