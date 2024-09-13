// @ts-nocheck

import React from 'react';

interface FormProps { 
  children: React.ReactNode, 
  onSubmit: (event: any) => void;
}

// Este es el formulario principal, aca es donde se depositaran los componentes hijos
// el children son todos los campos y labels. 
// onSubmit es la accion a tomar cuando se haga submit
export function Form({ children, onSubmit } : FormProps){ 
  return <form onSubmit={onSubmit}>{children}</form>
}


Form.Label = ({ htmlFor, children }) => { 
  return <label htmlFor={htmlFor}>{children}</label>
}

Form.Input = ({ id, type = 'text', value, onChange }) => { 
  return <input id={id} type={type} value={value} onChange={onChange}/>
}

Form.SubmitButton = ({ children }) => { 
  return <button type='submit'>{children}</button>
}