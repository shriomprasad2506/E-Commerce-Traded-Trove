import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User1",
        email: 'admin1@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: "User2",
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    },
    {
        name: "User3",
        email: 'user3@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false
    }
]

export default users