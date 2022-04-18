export const List = (props) => {
  const { title, items, renderItem, className } = props;

  const list = (
    <ul className="grid content-start gap-2">
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );

  return (
    <div className={[className].join(" ")}>
      <h2>{title}</h2>
      {items.length ? list : ""}
    </div>
  );
};
