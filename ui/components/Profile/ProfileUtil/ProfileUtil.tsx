import { EditOutlined } from "@ant-design/icons";
import { Card, Divider, Button, Flex } from "antd";


const ProfileUtil: React.FC = () => {
  return (
    <Card>
        <Flex justify="space-between" align="center" style={{padding:'0 0 0 0'}}>
          <h3>Profile Language</h3>
          <Button icon={<EditOutlined />} type="text"></Button>
        </Flex>
      <Divider/>
        <Flex justify="space-between" align="center">
          <h3>Public Profile & URL</h3>
          <Button  icon={<EditOutlined />} type="text"></Button>
        </Flex>
    </Card>
  );
};
export default ProfileUtil;
