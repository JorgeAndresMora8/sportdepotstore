// // @ts-nocheck

// import React from 'react';

// // // Componente principal del formulario
// // export function Form({ children, onSubmit }) {
// //   return <form onSubmit={onSubmit}>{children}</form>;
// // }

// // // Componente hijo: Label
// // Form.Label = function FormLabel({ htmlFor, children }) {
// //   return <label htmlFor={htmlFor}>{children}</label>;
// // };

// // // Componente hijo: Input
// // Form.Input = function FormInput({ id, type = "text", value, onChange }) {
// //   return <input id={id} type={type} value={value} onChange={onChange} />;
// // };

// // // Componente hijo: SubmitButton
// // Form.SubmitButton = function FormSubmitButton({ children }) {
// //   return <button type="submit">{children}</button>;
// // };


// interface FormProps { 
//   children: React.ReactNode, 
//   onSubmit: (event: any) => void;
// }

// // Este es el formulario principal, aca es donde se depositaran los componentes hijos
// export function Form({ children, onSubmit } : FormProps){ 
//   return <form onSubmit={onSubmit}>{children}</form>
// }


// Form.Label = ({ htmlFor, children }) => { 
//   return <label htmlFor={htmlFor}>{children}</label>
// }

// Form.Input = ({ id, type = 'text', value, onChange }) => { 
//   return <input id={id} type={type} value={value} onChange={onChange}/>
// }

// Form.SubmitButton = ({ children }) => { 
//   return <button type='submit'>{children}</button>
// }