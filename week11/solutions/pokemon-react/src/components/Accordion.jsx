const Accordion = ({ children, title, defaultChecked }) => {
  return (
    <div className='collapse collapse-plus bg-base-200'>
      <input type='radio' name='my-accordion-3' defaultChecked={defaultChecked} />
      <div className='collapse-title text-xl font-medium'>{title}</div>
      <div className='collapse-content'>{children}</div>
    </div>
  );
};

export default Accordion;
