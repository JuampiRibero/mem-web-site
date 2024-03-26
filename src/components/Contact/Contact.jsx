// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

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
    telefono: "",
    correo: "",
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

    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "Teléfono" no debe ser vacio.';
    } else if (!regexPhone.test(form.telefono)) {
      errors.telefono = 'El campo "Teléfono" solo acepta números y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo Electrónico" no debe ser vacio.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo =
        'El campo "Correo Electrónico" contiene un formato no valido.';
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
    <Container>
      <h1 className="mt-5 mb-3" id={"contact"}>
        ¡Hablemos! Contáctame sin compromiso
      </h1>
      <h5 className="mb-5">
        Completa este formulario y me pondré en contacto contigo para evacuar
        todas las dudas.
      </h5>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label mb-1">
          Nombre<span className="text-danger"> *</span>
        </label>
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
        <label className="form-label mt-2 mb-1">
          Teléfono<span className="text-danger"> *</span>
        </label>
        <input
          type="phone"
          className="form-control"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
        />
        {errors.telefono && (
          <div className="alert alert-danger p-1">{errors.telefono}</div>
        )}
        <label className="form-label mt-2 mb-1">
          Correo Electrónico<span className="text-danger"> *</span>
        </label>
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
        <label className="form-label mt-2 mb-1">
          Mensaje<span className="text-danger"> *</span>
        </label>
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
    </Container>
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
