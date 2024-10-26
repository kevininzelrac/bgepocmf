/// <reference types="vite/client" />

declare module "cognitive/App" {
  export default function App({ message }: { message?: string }): JSX.Element;
}
