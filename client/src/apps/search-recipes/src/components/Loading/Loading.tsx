import loadingSVG from "/loading.svg";

export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img height={100} width={100} src={loadingSVG} alt="Loading..." />
    </div>
  );
}
