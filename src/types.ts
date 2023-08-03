import states from './countryStates';

export type FormStateType = {
  name: string,
  email: string,
  cpf: string,
  address:string,
  city: string,
  countryState: typeof states[number],
  addressType: 'Casa' | 'Apartamento',
  resume: string,
  role: string,
  roleDescription: string,
};

export type FormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler,
};

export type AddressFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler,
  onBlur: React.FocusEventHandler,
};

export type ProfessionalFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler,
};
