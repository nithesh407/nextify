
import { Card, Avatar, Button } from "antd"
const Createpost: React.FC<{ profile: string }> = ({ profile }) => {


    return (
        <Card style={{ width: '90%', alignSelf: "center" }}>
            <div style={{ display: 'flex', flexDirection: "row" }}>
                <Avatar size={"large"} src={profile} />
                <Button size="large" shape="round" type="text" style={{ backgroundColor: '#D3D3D3', marginLeft: 20, width: '85%' }}>Create a post</Button>
            </div>
        </Card>
    )
}

export default Createpost;