const MyComponent = (props) => {
  return (
    <div className={cx`my-classname-here`}>
      <div className={cx`nested`}>
        <span className={cx`my-class`}>
          <span className={cx`last`} />
        </span>
        <span className={cx`sibling1`} />
        <span className={cx`sibling2`} />
      </div>
    </div>
  );
};

export default MyComponent;
