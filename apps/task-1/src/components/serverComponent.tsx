import { getComponentTypeClass } from "~/components/utils/componentTypeUtils";

type ServerComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const ServerComponent = (
  { message = "Hello ServerComponent!", children }: ServerComponentProps
) => {
  console.log(`### ServerComponent: ${message} ###`);
  return (
    <div className={getComponentTypeClass}>
      <p>{message}</p >
      {children}
    </div >
  );
}; 
