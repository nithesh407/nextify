import { ProfileActivity, ProfileSkills, ProfileComponent, ProfileEducation, ProfileUtil } from "@/ui/components/";
import { Layout, Row, Col, Flex } from "antd";
import { Footer } from "antd/es/layout/layout";
import { cookies } from "next/headers";

const getUserDetails = async () => {
    const id = cookies().get('user_id')?.value
    const response = await fetch('http://localhost:3000/api/v1/users/getUser', {
        method: 'POST',
        body: JSON.stringify(id)
    })

    const user = await response.json();
    return user
}

const Profile: React.FC = async () => {
    const { userDetails } = await getUserDetails()
    console.log(userDetails)
    return (
        <Layout>
            <Row style={{ marginTop: 15 }}>
                <Col span={13} offset={3}>
                    <Flex style={{ top: 80 }} vertical gap={10}>
                        <ProfileComponent
                            data={userDetails}
                        />
                        <ProfileActivity />
                        <ProfileEducation educations = {userDetails.educations} />
                        <ProfileSkills skills = {userDetails.skills}/>
                    </Flex>

                </Col>
                <Col span={5} offset={1}>
                    <ProfileUtil />
                </Col>
            </Row>


            <Footer style={{ textAlign: 'center' }}>
                Nextify © {new Date().getFullYear()} - The Social Media You Love
            </Footer>
        </Layout>
    )
}

export default Profile;