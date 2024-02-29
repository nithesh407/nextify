'use client'

import React, { useRef } from 'react';
import { Avatar, Card, List } from 'antd';
import styles from './connectionsComponent.module.scss'
import { UserItem } from '@/Interface';


interface T {
    category: string;
    data: UserItem[];
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    appendData: () => void;
}

const ContainerHeight = 400;

const ConnectionsComponent: React.FC<T> = ({ category, appendData, data, loading, setLoading }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;
            if (Math.abs(scrollHeight - scrollTop - clientHeight) <= 1) {
                setLoading(true);
                appendData();
            }
        }
    };

    return (
        <Card style={{ width: '90%', alignSelf: 'center', position: 'relative', top: 10 }}>
            <div
                ref={containerRef}
                className={styles['scrollable-list']}
                style={{ height: ContainerHeight, overflowY: 'scroll', overflowX: 'hidden' }}
                onScroll={handleScroll}
            >
                <List
                    loading={loading}
                    dataSource={data}
                    renderItem={(item: UserItem) => (
                        <List.Item key={item._id}>
                            <List.Item.Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={item.imageUrl} />}
                                title={<a href="https://ant.design">{item.userName}</a>}
                                description={item.email}
                            />
                            <div>{category === 'followings' ? 'Followings' : 'Follower'}</div>
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
};

export default ConnectionsComponent;
