import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/image-slider";
import { clientSidefunctions } from "@/utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  const clientResult = clientSidefunctions(); // it will throw error because the util function using client-only import
  //   return <h1>Server Route {result}</h1>;

  return (
    <>
      <h1>
        Server Route {result} {clientResult}
      </h1>
      <ImageSlider />
    </>
  );
}
