const MyComponent = (props) => {
  return (
    <div className="my-classname-here">
      <div className="nested">
        <span className="my-class">
          <span className="last" />
        </span>
        <span className="sibling1" />
        <span className="sibling2" />
      </div>
    </div>
  );
};

export default MyComponent;
