import { AddressFormProps } from '../types';
import states from '../countryStates';
import './AdressForm.css';

function AddressForm({ formState, onChange, onBlur }: AddressFormProps) {
  const { address, city, countryState, addressType } = formState;

  return (
    <fieldset>
      <legend>Dados de Endereço</legend>
      <label htmlFor="address">
        Endereço
        <input
          id="address"
          type="text"
          name="address"
          maxLength={ 200 }
          required
          value={ address }
          onChange={ onChange }
        />
      </label>
      <label htmlFor="city">
        Cidade
        <input
          id="city"
          type="text"
          name="city"
          maxLength={ 28 }
          required
          value={ city }
          onChange={ onChange }
          onBlur={ onBlur }
        />
      </label>
      <label htmlFor="countryState">
        Estado
        <select
          id="countryState"
          name="countryState"
          required
          onChange={ onChange }
          value={ countryState }
        >
          <option value="">Selecione</option>
          {
            states.map((state) => (
              <option key={ state }>{ state }</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="house">
        <input
          type="radio"
          id="house"
          name="addressType"
          value="Casa"
          checked={ addressType === 'Casa' }
          onChange={ onChange }
        />
        Casa
      </label>
      <label htmlFor="apart">
        <input
          type="radio"
          id="apart"
          name="addressType"
          value="Apartamento"
          checked={ addressType === 'Apartamento' }
          onChange={ onChange }
        />
        Apartamento
      </label>
    </fieldset>
  );
}

export default AddressForm;
