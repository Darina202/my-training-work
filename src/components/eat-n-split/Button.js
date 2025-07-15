export default function Button({ children, onClick }) {
  return (
    <button className="button-eat" onClick={onClick}>
      {children}
    </button>
  );
}
