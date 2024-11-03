import loadingSVG from "/loading.svg";

export default function Loading() {
  return <img style={{ display: "block", margin: "0 auto" }} src={loadingSVG} width={200} height={200} />;
}
