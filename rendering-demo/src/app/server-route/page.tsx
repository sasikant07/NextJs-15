import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/image-slider";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  //   return <h1>Server Route {result}</h1>;

  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}
