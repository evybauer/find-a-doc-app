import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const DashboardFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            ©2024 Avalon.AI All Rights Reserved
        </Footer>
    )
}

export default DashboardFooter