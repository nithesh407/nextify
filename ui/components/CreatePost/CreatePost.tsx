
import { Card , Input, Avatar, Button} from "antd"
import { useState } from "react";

const {TextArea} = Input

const Createpost:React.FC<{profile:string}> =({profile})=>{

    const [value, setValue] = useState('');

    return(
        <Card style={{width:'90%',alignSelf:"center",marginTop:10}}>
            <div style={{display:'flex', flexDirection:"row"}}>
            <Avatar size={"large"} src={profile}/>
            <Button size="large" shape="round" type="text" style={{marginLeft:20 , width:'85%'}}>Create a post</Button>
            </div>
        </Card>
    )
}

export default Createpost;