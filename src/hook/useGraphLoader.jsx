
export default function useGraphLoader() {
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <PulseLoader
                color="rgba(236, 204, 255, 1)"
                cssOverride={{}}
                margin={20}
                size={50}
                speedMultiplier={0.5}
            />
        </div>
    )
}