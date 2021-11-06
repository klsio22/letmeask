type ButtonProps = {
  children?: string;
};

export function Button(props: ButtonProps) {
  return (
    <div>
      <button>{props.children || 'Default'}</button>
    </div>
  );
}
