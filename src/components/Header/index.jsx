/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 25/03/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Avatar, Badge } from 'antd';
import { MessageOutlined, BellOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';

// style
import styles from './styles/index.module.css';
import logo from './styles/image/logo.png';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} style={{ width: 95, height: 30, marginLeft: '10%' }} />
            </div>
            <div className={styles.search}>
                <input className={styles.search_input} type='text' placeholder='Tìm kiếm sản phẩm' />
            </div>
            <div className={styles.info}>
                <MessageOutlined />
                <Badge count={0} showZero>
                    <BellOutlined style={{ color: '#b5b5b5', fontSize: '20px' }} />
                </Badge>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </div>
        </div>
    );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
