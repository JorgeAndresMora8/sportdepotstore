import { useState } from "react";
import { Form } from "../../components/form/Form";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event: any) => {
      event.preventDefault();
      console.log("Formulario enviado", { username, password });
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="username">Nombre de usuario:</Form.Label>
        <Form.Input
          id="username"
          value={username}
          onChange={(e:any) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="password">Contraseña:</Form.Label>
        <Form.Input
          id="password"
          type="password"
          value={password}
          onChange={(e:any) => setPassword(e.target.value)}
        />
        <Form.SubmitButton>Iniciar sesión</Form.SubmitButton>
      </Form>
    );
  }