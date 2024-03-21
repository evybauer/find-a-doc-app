import React from 'react'
import { Layout , Menu, Button } from 'antd'
import { Divider } from 'antd'

const { Header } = Layout

const labels = ['Browse', 'Help', 'List your practice on Avalon.AI']

const items = labels.map((label, index) => ({
    key: index + 1,
    label: label,
}))

const Navbar = () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
            }}
        >
            <div style={{fontWeight: 800}}>Logo</div>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                    justifyContent: 'end',
                    border: 'none',
                }}
            />
            <Divider 
                type="vertical" 
                style={{
                    margin: '0 8px', 
                    height: 30
                }}
            />
            <Button style={{marginRight: 8}}>Log in</Button>
            <Button type="primary">Sign up</Button>
        </Header>
    )
}

export default Navbar