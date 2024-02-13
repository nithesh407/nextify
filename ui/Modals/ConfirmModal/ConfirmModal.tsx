import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

interface T {
    text: string
    open: boolean;
    hideModal: () => void;
}
const ConfirmModal: React.FC<T> = ({ hideModal, open, text }) => {

    return (
        <>
            <Modal
                title={<h3><ExclamationCircleOutlined style={{ padding: 10 }} /> Confirm</h3>}
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="Confirm"
                cancelText="Cancel"
            >
                <p>{text}</p>
            </Modal>
        </>
    );
};

export default ConfirmModal



