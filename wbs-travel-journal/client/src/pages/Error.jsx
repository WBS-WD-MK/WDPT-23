import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div className='container mx-auto my-5'>
      <h1 className='text-center text-2xl'>
        Error{' '}
        <span role='img' aria-labelledby='eye'>
          👁️
        </span>
        <span role='img' aria-labelledby='mouth'>
          👄
        </span>
        <span role='img' aria-labelledby='eye'>
          👁️
        </span>
      </h1>
      <p className='text-center'>
        In production, please don&apos;t show this{' '}
        <span role='img' aria-labelledby='pointing down'>
          👇
        </span>{' '}
        to the user! But here&apos;s the stack trace:
      </p>
      <div className='mockup-code'>
        {error.stack.split('\n').map((line, index) => (
          <pre
            key={index}
            data-prefix={index + 1}
            className={`${index === 0 && 'bg-warning text-warning-content'}`}
          >
            <code>{line}</code>
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Error;
