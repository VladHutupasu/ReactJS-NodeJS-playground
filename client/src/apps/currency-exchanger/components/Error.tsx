export default function Error({ message }: { message: string | null }) {
  return <div style={{ fontWeight: "700", color: "red" }}>{message}</div>;
}
