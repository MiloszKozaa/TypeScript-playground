import './Form.css';

type FormType = {
  header: string;
  children: React.ReactNode;
  action?: (data: any) => void;
};

const Form = ({ children, header, action }: FormType) => {
  return (
    <div className='form-wrapper'>
      <div className='form-title'>{header}</div>
      <form onSubmit={action}>{children}</form>
    </div>
  );
};

export default Form;