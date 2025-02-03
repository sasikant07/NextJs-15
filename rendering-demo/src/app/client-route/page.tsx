import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  const result = serverSideFunction(); // it will throw error because the util function using server-only import
  return <h1>Client Route {result}</h1>;
}
