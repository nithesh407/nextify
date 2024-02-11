import {ProfileActivity,ProfileSkills, ProfileComponent, ProfileEducation, ProfileUtil} from "@/ui/components/";
import { Layout, Row, Col, Flex } from "antd";
import { Footer } from "antd/es/layout/layout";

const Profile: React.FC = () => {
    return (
        <Layout>
            <Row style={{ marginTop: 15 }}>
                <Col span={13} offset={3}>
                    <Flex style={{top:80}} vertical gap={10}>
                    <ProfileComponent
                        profileName="Lana Del rey"
                        profileTag="@lanadelrey.idk"
                        profileImage="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg"
                        profileRole="Software Developer"
                        profileOrg='Student at Kongu Engineering College, Perundurai'
                        profileLocation="Erode, TamilNadu"
                        profileURL="google.com"
                        profileDescription="I'm passionate in singing. I like the way I'm. Going through the flow.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam officiis repellendus totam illo ducimus ratione, eaque, quo eveniet accusantium similique iusto magni! Consequatur distinctio et sit, quidem nulla id!"
                        linkedInURL=""
                        githubURL=""
                        twitterURL=""
                        instagramURL=""
                    />
                    <ProfileActivity/>
                    <ProfileEducation/>
                    <ProfileSkills/>
                    </Flex>

                </Col>
                <Col span={5} offset={1}>
                    <ProfileUtil/>
                </Col>
            </Row>


        <Footer style={{ textAlign: 'center' }}>
        Nextify © {new Date().getFullYear()} - The Social Media You Love
      </Footer>
        </Layout>
    )
}

export default Profile;