import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Card, List, message, Spin } from 'antd'; // Import Spin component for loading state
import VirtualList from 'rc-virtual-list';

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
    // const fakeDataUrl = category === 'following' ? 'https://randomuser.me/api/?results=20&inc=name,gender,phone,nat,picture&noinfo' : 'https://jsonplaceholder.typicode.com/users'
    const [data, setData] = useState<UserItem[]>([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((body) => {
                setData((data) => data.concat(body.results));
            });
    };

    useEffect(() => {
        appendData()
    }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
            appendData();
        }
    };

    return (
        <Card style={{ width: '90%', alignSelf: 'center', position: 'relative', top: 10 }}>

            <List>
                <VirtualList
                    data={data}
                    height={ContainerHeight}
                    itemHeight={47}
                    itemKey="phone"
                    onScroll={onScroll}
                // onLoad={() => <Spin />}
                >
                    {(item: UserItem) => (
                        <List.Item key={item.phone}>
                            <List.Item.Meta
                                avatar={<Avatar style={{ width: 50, height: 50 }} src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description={item.phone}
                            />
                            <div>{category === 'following' ? 'Following' : 'Follower'}</div>
                        </List.Item>
                    )}
                </VirtualList>
            </List>
        </Card>
    );
};

export default ConnectionsComponent;
