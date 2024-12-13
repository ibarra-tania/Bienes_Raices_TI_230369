import bcrypt from 'bcrypt'
const usuarios = [
    {
        nombre: 'Tania',
        email: '',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios