/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 25/03/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, nhưng khát vọng phải lớn"
 */

import React from 'react';
// import PropTypes from 'prop-types';

// components
import Plans from 'src/components/Content/ListPlans/Plans';

// styles
import styles from './styles/index.module.css';

function ListPlan() {
    const renderPlans = (n = 10) => {
        const array = [];
        for (let i = 0; i <= n; i++) {
            array.push(<Plans />);
        }
        return array;
    };
    return <div className={styles.controller}>{renderPlans(20).map((item) => item)}</div>;
}

ListPlan.propTypes = {};

ListPlan.defaultProps = {};

export default ListPlan;
