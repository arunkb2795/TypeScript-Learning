type MessageProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
    details: {
        phoneNumber: string,
        age: number,
    }
    friendsDetails?: { name: string, age: number }[] //array of objects //use a ? mark for optional properties
}
export default function Message(props: MessageProps) {
    const { friendsDetails = [] } = props //if a prop is optional assign suitable default value
    return (
        <div>
            <ul>
                <li>{props.isLoggedIn ? `Hi ${props.name} You have ${props.messageCount} unread messages.`
                    : `Welcome Guest`}</li>
                <li>Your Phone Number is {props.details.phoneNumber} and age {props.details.age}</li>
                <li>Your Friends Details</li>
                {friendsDetails.map((friend, index) => {
                    return <li key={index}>{`${friend.name} and ${friend.age}`}</li>;
                })}
            </ul>
        </div>
    )
}
