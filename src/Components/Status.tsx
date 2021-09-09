type statusProps = {
    statusMessage: "loading" | "success" | "error", //restrictions of invalid strings
}
export default function Status(props: statusProps) {
    return (
        <h2>{props.statusMessage}</h2>
    )
}
