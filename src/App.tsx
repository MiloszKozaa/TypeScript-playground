import Button from './Button/Button';
import Form from './Form/Form';
import Input from './Input/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email is not valid'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be match')
    .required('Confirm password is a required field'),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='App'>
      <Form header='register' action={handleSubmit(onSubmit)}>
        <Input
          type='email'
          id='email'
          label='E-mail'
          placeholder='example@email.com'
          register={{ ...register('email') }}
          error={errors.email?.message}
        />
        <Input
          type='password'
          id='password'
          label='Password'
          placeholder='minimum 6 characters'
          register={{ ...register('password') }}
          error={errors.password?.message}
        />
        <Input
          type='password'
          id='conformPassword'
          label='Confirm password'
          placeholder='Type the same password'
          register={{ ...register('confirmPassword') }}
          error={errors.confirmPassword?.message}
        />
        <Button name='Sign up' />
      </Form>
      <span>I'm already have account</span>
    </div>
  );
}

export default App;
