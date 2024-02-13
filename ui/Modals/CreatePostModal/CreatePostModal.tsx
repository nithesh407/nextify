'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Modal, message, Button, Typography, Input, InputRef } from 'antd';
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
    const [showDragger, setShowDragger] = useState<boolean>(true);
    const [imageStream, setImageStream] = useState<string | null>(null);
    const imageDescriptionRef = useRef<InputRef>(null);

    useEffect(() => {
        if (!visible) {
            setUploadedFile(null);
            setShowDragger(true);
            setImageStream(null);
        }
    }, [visible]);

    const handleUploadChange = (info: any) => {
        const { status, originFileObj } = info.file;
        if (status === 'done') {
            setUploadedFile(originFileObj);
            setShowDragger(false);
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && typeof event.target.result === 'string') {
                    setImageStream(event.target.result);
                }
            };
            reader.readAsDataURL(originFileObj);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleOk = () => {
        if (uploadedFile && imageStream) {
            // Here you can send the imageStream to your backend server to store it in S3
            // Example:
            // fetch('your_backend_url', {
            //     method: 'POST',
            //     body: JSON.stringify({ imageStream, description: imageDescriptionRef.current?.input.value }),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => {
            //     if (response.ok) {
            //         return response.json();
            //     }
            //     throw new Error('Network response was not ok.');
            // })
            // .then(data => {
            //     console.log('Success:', data);
            //     message.success('File uploaded successfully.');
            //     handleCancel();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     message.error('Failed to upload file.');
            // });
            message.success('File uploaded successfully.');
            console.log(imageStream, uploadedFile)
            handleCancel();
        } else {
            message.error('No file uploaded.');
        }
    };

    const handleButtonCancel = () => {
        setUploadedFile(null);
        setShowDragger(true);
        setImageStream(null);
        handleCancel();
        message.error('No file uploaded.');
    }

    return (
        <Modal
            title="Upload Files"
            open={visible}
            onCancel={handleButtonCancel}
            footer={null}
        >
            {showDragger && (
                <ImgCrop aspect={6 / 4}>
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
                                max: 30,
                            }}
                            defaultValue="Post Description"
                            ref={imageDescriptionRef}
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
