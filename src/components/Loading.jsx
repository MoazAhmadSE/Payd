import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <MoonLoader
        color="rgba(0, 0, 0, 1)"
        cssOverride={{}}
        size={70}
        speedMultiplier={1}
      />
    </div>
  );
}
