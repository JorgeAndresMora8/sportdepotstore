import { useState } from 'react'
import { Form } from '../../components/form/Form'

const Admin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event: any){ 
        event.preventDefault()

        console.log(username, password)
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="username">Enter your username</Form.Label>
        <Form.Input id='1' value={username} onChange={(e:any) => setUsername(e.target.value)} />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Input id='2' value={password} onChange={(e:any) => setPassword(e.target.value)}/>

        <Form.SubmitButton>Create Admin</Form.SubmitButton>
      </Form>
    </div>
  )
}

export default Admin
