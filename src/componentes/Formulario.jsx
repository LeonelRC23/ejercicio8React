import React from "react";
import { Formik } from "formik";
import { Button, Form, FormControl, FormLabel } from "react-bootstrap";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import "../styles/formulario.css";

const Formulario = () => {
  const toast = useRef(null);
  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "OK",
      detail: "Informacion enviada.",
    });
  };
  let valuesForm = {
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  };
  return (
    <div className="w-100">
      <Formik
        initialValues={valuesForm}
        validate={(values) => {
          let errors = {};
          if (values.nombre.trim() === "") {
            errors.nombre = "Requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
            errors.nombre = "Ingrese nombre valido";
          }
          if (values.apellido.trim() === "") {
            errors.apellido = "Requerido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellido)) {
            errors.apellido = "Ingrese apellido valido";
          }
          if (values.dni.trim() === "") {
            errors.dni = "Requerido";
          } else if (!/^\d{7,8}(?:[-\s]\d{4})?$/.test(values.dni)) {
            errors.dni = "Ingrese DNI valido";
          }
          if (values.email.trim() === "") {
            errors.email = "Requerido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "Dirección de Email invalida";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          show();
          resetForm();
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form className="m-4" onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                id="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="errorMsg">
                {touched.nombre && errors.nombre && (
                  <p className="text-danger">{errors.nombre}</p>
                )}
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                id="apellido"
                value={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="errorMsg">
                {touched.apellido && errors.apellido && (
                  <p className="text-danger">{errors.apellido}</p>
                )}
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type="text"
                id="dni"
                value={values.dni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="errorMsg">
                {touched.dni && errors.dni && (
                  <p className="text-danger">{errors.dni}</p>
                )}
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="errorMsg">
                {touched.email && errors.email && (
                  <p className="text-danger">{errors.email}</p>
                )}
              </div>
            </Form.Group>
            <Toast ref={toast} />
            <div className="text-center">
              <Button type="submit">Enviar</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
