type ButtonType = {
  children: string | undefined;
  onClick?: (e?: any) => void;
}

export const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button onClick={onClick} className="p-1 px-7 rounded-full mx-3 bg-black text-white">{children}</button>
  )
}