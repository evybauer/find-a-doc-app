import React from 'react'
import { Layout as AntDLayout } from 'antd'
import  Navbar  from './Navbar'
import Footer from './Footer'
import { Typography } from 'antd'
import SearchBar from '../SearchBar'

const { Content } = AntDLayout
const { Title } = Typography

const Layout = () => {

    return (
        <AntDLayout>
            <Navbar />
            <Content
                style={{
                    padding: '48px',
                    minHeight: '100vh',
                }}
            >
                <>
                    <div>
                        <Title style={{fontSize: 60, fontWeight: 100, margin: 0}}>Book local "DOCTORS"</Title>
                        <Title style={{fontSize: 60, fontWeight: 100, margin: 0}}>who take your insurance</Title>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </>
            </Content>
            <Footer />
        </AntDLayout>
    )
}

export default Layout