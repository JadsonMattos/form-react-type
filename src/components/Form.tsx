import { FormProps } from '../types';

function Form({ formState, onChange }: FormProps) {
  const {
    name,
    email,
    cpf,
  } = formState;

  return (
    <fieldset>
      <legend>Dados pessoais</legend>
      <div className="container">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            name="name"
            maxLength={ 40 }
            required
            value={ name }
            onChange={ onChange }
          />
        </label>
      </div>
      <div className="container">
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            maxLength={ 50 }
            required
            value={ email }
            onChange={ onChange }
          />
        </label>
      </div>
      <div className="container">
        <label htmlFor="cpf">
          CPF
          <input
            id="cpf"
            type="text"
            name="cpf"
            maxLength={ 11 }
            required
            value={ cpf }
            onChange={ onChange }
          />
        </label>
      </div>
    </fieldset>
  );
}

export default Form;
