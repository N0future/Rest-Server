
const { response } = require('express')

const usuariosGet = (req, res = response) => {


    const {apikey,nombre = "noname"} = req.query
    res.status(403).json({

        msg: "GET Api - Controlador",
        apikey,
        nombre
    })

}

const usuariosPost = (req, res = response) => {


    const { nombre, edad } = req.body;
    res.status(403).json({

        msg: "POST Api - Controlador",
        nombre,
        edad

    })

}

const usuariosPut = (req, res = response) => {

    const id = req.params.id
    res.status(403).json({

        msg: "PUT Api - Controlador",
        id
    })

}

const usuariosDelete = (req, res = response) => {

    res.status(403).json({

        msg: "DELETE Api - Controlador"
    })

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
