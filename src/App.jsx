/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header />
            <Content />
            <Footer />
        </React.Fragment>
    );
}

export default React.memo(App);
