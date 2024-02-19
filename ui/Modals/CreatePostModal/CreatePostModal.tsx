'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Modal, message, Button, Typography, Input } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


const { Dragger } = Upload;

interface CreatePostModalProps {
    visible: boolean;
    handleCancel: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ visible, handleCancel }) => {
    const [uploadedFile, setUploadedFile] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const [postDescription, setPostDescription] = useState<string | null>(null);
    const [showDragger, setShowDragger] = useState<boolean>(true);
    useEffect(() => {
        if (!visible) {
            setUploadedFile(null);
            setShowDragger(true);
        }
    }, [visible]);

    const handleUploadChange = (info: any) => {
        const { status, originFileObj } = info.file;
        if (status === 'done') {
            setUploadedFile(originFileObj);
            setFile(originFileObj);
            setShowDragger(false);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleOk = async () => {
        if (file && postDescription) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('postDescription', postDescription);
            try {
                const response = await fetch('http://localhost:3000/api/v1/posts/createPost', {
                    method: 'POST',
                    // headers: { "Content-Type": "application/json" },
                    body: formData
                })
                const msg = await response.json()
                message.success(msg)
            } catch (err) {
                message.error(`${err}`)
            }
            handleCancel();
            window.location.reload()
        } else {
            message.error('Please upload a file and provide a valid description.');
        }
    };


    const handleButtonCancel = () => {
        setUploadedFile(null);
        setPostDescription(null);
        setShowDragger(true);
        handleCancel();
    };

    return (
        <Modal
            title="Upload Files"
            open={visible}
            onCancel={handleButtonCancel}
            footer={null}
        >
            {showDragger && (
                <ImgCrop aspect={5 / 4}>
                    <Dragger onChange={handleUploadChange} showUploadList={false}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    </Dragger>
                </ImgCrop>
            )}
            {uploadedFile && (
                <>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={URL.createObjectURL(uploadedFile)}
                            alt="Uploaded File"
                            style={{ maxWidth: '100%', maxHeight: '500px', marginBottom: '10px' }}
                        />
                    </div>
                    <div>
                        <Typography.Title level={5}>Description</Typography.Title>
                        <Input
                            count={{
                                show: true,
                                max: 300,
                            }}
                            placeholder='Post Description'
                            onChange={(e) => setPostDescription(e.target.value)}
                        />
                    </div>
                </>
            )}

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <Button onClick={handleButtonCancel} style={{ marginRight: '10px' }}>Cancel</Button>
                <Button type="primary" onClick={handleOk}>OK</Button>
            </div>
        </Modal>
    );
};

export default CreatePostModal;
