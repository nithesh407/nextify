import React, { useEffect, useState, useRef } from 'react';
import { Avatar, Card, List, Spin } from 'antd';
import styles from './connectionsComponent.module.scss'
interface UserItem {
    email: string;
    gender: string;
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    phone: string
}

interface T {
    category: string
}

const ContainerHeight = 400;

const ConnectionsComponent: React.FC<T> = ({ category }) => {
    const fakeDataUrl = 'https://randomuser.me/api/?results=20&inc=name,gender,phone,nat,picture&noinfo'
    const [data, setData] = useState<UserItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const containerRef = useRef<HTMLDivElement>(null);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData(body.results);
                setLoading(false);
            });
    }

    useEffect(() => {
        appendData()
    }, [category]);

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
                        <List.Item key={item.phone}>
                            <List.Item.Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.phone}
                            />
                            <div>{category === 'following' ? 'Following' : 'Follower'}</div>
                        </List.Item>
                    )}
                />
            </div>
        </Card>
    );
};

export default ConnectionsComponent;
