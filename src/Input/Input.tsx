import './Input.css';

type InputProps = {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  register: any;
  error: any;
};

const Input = ({
  type,
  id,
  label,
  placeholder,
  register,
  error,
}: InputProps) => {
  return (
    <div className='valid'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span>{error}</span>
    </div>
  );
};

export default Input;
