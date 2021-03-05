import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import Navbar from '../../features/Navbar/Navbar';

const MainLayout = ({ children }) => (
    <div>
        <PageContainer>
            <Navbar />
            {children}
        </PageContainer>
    </div>
);

export default MainLayout;