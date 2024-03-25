// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import { useState } from "react";
import "./Contact.css"

const useForm = (initialData, onValidate) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = onValidate(form);
    setErros(err);

    if (Object.keys(err).length === 0) {
      setLoading(true);
      fetch("https://formsubmit.co/ajax/juampiribero@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.success === "true" && setForm(initialData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return { form, errors, loading, handleChange, handleSubmit };
};

const Contact = () => {
  const initialData = {
    nombre: "",
    apellido: "",
    correo: "",
    celular: "",
    asunto: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[0-9\s]+$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe ser vacio.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.apellido.trim()) {
      errors.apellido = 'El campo "Apellido" no debe ser vacio.';
    } else if (!regexName.test(form.apellido)) {
      errors.apellido = 'El campo "Apellido" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo Electrónico" no debe ser vacio.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo =
        'El campo "Correo Electrónico" contiene un formato no valido.';
    }

    if (!form.celular.trim()) {
      errors.celular = 'El campo "Celular" no debe ser vacio.';
    } else if (!regexPhone.test(form.celular)) {
      errors.celular = 'El campo "Celular" solo acepta números y espacios.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe ser vacio.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe ser vacio.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }

    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  return (
    <>
      <h1 className="my-5" id={'contact'}>Contacto</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label mb-1">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errors.nombre && (
          <div className="alert alert-danger p-1">{errors.nombre}</div>
        )}
        <label className="form-label mt-2 mb-1">Apellido</label>
        <input
          type="text"
          className="form-control"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
        />
        {errors.apellido && (
          <div className="alert alert-danger p-1">{errors.apellido}</div>
        )}
        <label className="form-label mt-2 mb-1">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
        {errors.correo && (
          <div className="alert alert-danger p-1">{errors.correo}</div>
        )}

        <label className="form-label mt-2 mb-1">Celular</label>
        <input
          type="text"
          className="form-control"
          name="celular"
          value={form.celular}
          onChange={handleChange}
        />
        {errors.asunto && (
          <div className="alert alert-danger p-1">{errors.celular}</div>
        )}

        <label className="form-label mt-2 mb-1">Asunto</label>
        <input
          type="text"
          className="form-control"
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
        />
        {errors.asunto && (
          <div className="alert alert-danger p-1">{errors.asunto}</div>
        )}
        <label className="form-label mt-2 mb-1">Mensaje</label>
        <textarea
          className="form-control"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
        />
        {errors.mensaje && (
          <div className="alert alert-danger p-1">{errors.mensaje}</div>
        )}
        <button className="btn btn-warning mt-3 w-100" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </>
  );
};

export default Contact;

// function Contact() {
//   return (
//     <>
//       <h1 className="my-5">Contacto</h1>
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//           <Form.Text className="text-muted">
//             Tu dirección de correo electrónico nunca será compartida con
//             terceros
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// }

// export default Contact;
