import { useState, useRef } from 'react';
import { FormStateType } from './types';
import Form from './components/Form';
import AddressForm from './components/AddressForm';
import ProfissionalForm from './components/ProfessionalForm';
import { DataDisplay } from './components/DataDisplay';
import './app.css';

function App() {
  const [formState, setFormState] = useState<FormStateType>({
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    countryState: 'Acre',
    addressType: 'Casa',
    resume: '',
    role: '',
    roleDescription: '',
  });

  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement>) => {
    const { target } = event;
    const { name, value } = target;

    let newValue = value;
    if (name === 'name') {
      newValue = value.toUpperCase();
    } else if (name === 'address') {
      newValue = value.replace(/[^\w\s]/g, '');
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target;
    if (name === 'city' && /^\d/.test(value)) {
      setFormState((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    }
  };

  const [displayData, setDisplayData] = useState(false);
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisplayData(true);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setFormState({
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: 'Acre',
      addressType: 'Casa',
      resume: '',
      role: '',
      roleDescription: '',
    });
    setDisplayData(false);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Form onChange={ handleChange } formState={ formState } />
      <AddressForm
        onChange={ handleChange }
        onBlur={ handleBlur }
        formState={ formState }
      />
      <ProfissionalForm
        onChange={ handleChange }
        formState={ formState }
      />
      <button type="submit">Enviar</button>
      { displayData && <DataDisplay formState={ formState } /> }
      <button type="reset" onClick={ handleClear }>Limpar</button>
    </form>
  );
}

export default App;
