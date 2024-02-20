import React from 'react';
import { LockTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';

interface T {
    open: boolean;
    hideModal: () => void;
}
const OTPModal: React.FC<T> = ({ hideModal, open }) => {

    return (
        <>
            <Modal
                title={<h3><LockTwoTone style={{ padding: 10 }} /> OTP</h3>}
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="Confirm"
                cancelText="Cancel"
            >
                <Form>
                    <Form.Item
                        name="otp"
                        label="Enter OTP for Verification"
                        rules={[{ required: true }, { type: 'number', max: 6 }]}
                    >
                        <Input placeholder="123456" />
                    </Form.Item>
                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Button type="primary" ghost htmlType="submit">
                                    Resend OTP
                                </Button>
                                <Button style={{ marginLeft: 5 }} type="primary" htmlType="submit">
                                    Verify OTP
                                </Button>
                            </div>
                            <div>
                                <p>Status : {true ? 'Verified ✅' : 'Not Verified ❌'}</p>
                            </div>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default OTPModal



