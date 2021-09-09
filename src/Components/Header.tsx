type HeaderProps = {
    children: React.ReactNode //passing children inside a component
}
export default function Header(props: HeaderProps) {
    return (
        <h1>
            {props.children}
        </h1>
    )
}
