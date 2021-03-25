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
import { Switch, Route } from 'react-router-dom';

// component
import ListPlan from 'src/components/Content/ListPlans';

function Content() {
    return (
        <Switch>
            <Route path={'/'} exact component={ListPlan} />
        </Switch>
    );
}

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
