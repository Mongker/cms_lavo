/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 25/03/2021
 * @email: levanmong.dola.99@gmail.com
 * @phone: +84373668113
 * @slogan: "Mọi thứ đều bắt đầu từ việc nhỏ, những khát vọng phải lớn"
 */

import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { Steps, Button, message } from 'antd';

// styles
import styles from '../styles/index.module.css';
import product from '../styles/image/product.jpeg';

// const
const { Step } = Steps;

function Plans() {
    const [current, setCurrent] = React.useState(1);

    return (
        <div className={styles.controller__plans}>
            <div className={styles.controller__plans__1}>
                <div className={styles.image__product}>
                    <img className={styles.image__content} src={product} alt={'product'} />
                </div>
                <div className={styles.title__product}>Dầu gội đầu</div>
                <div className={styles.certificate}>
                    <img className={styles.certificate__logo} src={'https://en.pimg.jp/060/025/814/1/60025814.jpg'} alt={'iOS'} />
                    <img className={styles.certificate__logo} src={'https://lh3.googleusercontent.com/proxy/O_fA8wUPtLXTBdFliZYN76HLvcBZF6NYSLSN-WAA3c7S6ftmNfWYuwWV48D_Sd4omfhA8QOGLdEJaX11p1JoeEytkJI5Qrf5qII6MYGuZqgvIiSDYAufH2Asbg'} alt={'iOS'} />
                </div>
            </div>
            <div className={styles.controller__plans__2}>
                <div className={styles.plan__title}>C.111.62 - Nhuộm chuyên nghiệp Spaline 100ml - 0/00 -Hộp</div>
                <div className={styles.plan__lot}>C.111.62 - Nhuộm chuyên nghiệp Spaline 100ml - 0/00 -Hộp</div>
                <Steps current={current} onChange={(current) => setCurrent(current)}>
                    <Step title='Date' />
                    <Step title='Fill' />
                    <Step title='Pack' />
                    <Step title='Stock' />
                </Steps>
                {/*<div className='steps-content'>{steps[current].content}</div>*/}
                {/*<div className='steps-action'>*/}
                {/*    {current < steps.length - 1 && (*/}
                {/*        <Button type='primary' onClick={() => next()}>*/}
                {/*            Next*/}
                {/*        </Button>*/}
                {/*    )}*/}
                {/*    {current === steps.length - 1 && (*/}
                {/*        <Button type='primary' onClick={() => message.success('Processing complete!')}>*/}
                {/*            Done*/}
                {/*        </Button>*/}
                {/*    )}*/}
                {/*    {current > 0 && (*/}
                {/*        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>*/}
                {/*            Previous*/}
                {/*        </Button>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
            <div className={styles.controller__plans__3}>
                <div className={classNames(styles.order, styles.status)}>
                    <div className={styles.status__title}>Order</div>
                    <div>30.000</div>
                </div>
                <div className={classNames(styles.plan, styles.status)}>
                    <div className={styles.status__title}>Plan</div>
                    <div>25.000</div>
                </div>
                <div className={classNames(styles.stock, styles.status)}>
                    <div className={styles.status__title}>Stock</div>
                    <div>25.000</div>
                </div>
            </div>
        </div>
    );
}

Plans.propTypes = {};

Plans.defaultProps = {};

export default Plans;
