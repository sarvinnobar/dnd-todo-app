export default function Button({ children, action }) {
  return (
    <div className={"w-[1.7vw] h-[1.7vw] mx-[1vw]"}>
      <button type="button" onClick={action}>
        {children}
      </button>
    </div>
  );
}
