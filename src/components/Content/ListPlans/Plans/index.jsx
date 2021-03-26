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
import { Progress, Steps } from 'antd';

// styles
import styles from '../styles/index.module.css';

// icon
import product from '../styles/image/product.jpeg';
import time_start from 'src/image/start_time.png';
import time_end from 'src/image/clock.png';
import group_user from 'src/image/group_user.png';
import group_user_root from 'src/image/decision-making.png';
import avatar from 'src/image/profile-user.png';
import loading from 'src/image/loading.png';
import check from 'src/image/check.png';
import comment from 'src/image/comment.png';
import compliant from 'src/image/compliant_2.png';

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
                    <img className={styles.certificate__logo} src={'https://en.pimg.jp/060/025/814/1/60025814.jpg'} alt={'iOS'} />
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
                <div className={classNames('row', styles.plan__controller)}>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'icon start'} src={time_start} className={styles.icon__time} />
                        </div>
                        <div className={classNames('row', 'center', 'color-green')}>
                            <div>Start: &nbsp;</div>
                            <div>01/02/2021 08:30</div>
                        </div>
                    </div>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'icon start'} src={time_end} className={styles.icon__time} />
                        </div>
                        <div className={classNames('row', 'center', 'color-red')}>
                            <div>End: &nbsp;</div>
                            <div>01/02/2021 10:30</div>
                        </div>
                    </div>
                </div>
                <div className={classNames('row', styles.plan__controller)}>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'nhân viên'} src={group_user} className={styles.icon__group_user} />
                        </div>
                        <div className={classNames('row', 'center')}>
                            {[1, 2, 3].map((item) => (
                                <div className={classNames('row', 'center', styles.tag_user)}>
                                    <img alt={'avatar'} src={avatar} className={styles.icon__avatar} />
                                    <div>User {item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'nhân viên kiểm tra'} src={group_user_root} className={styles.icon__group_user} />
                        </div>
                        <div className={classNames('row', 'center')}>
                            {[1, 2, 3].map((item) => (
                                <div className={classNames('row', 'center', styles.tag_user)}>
                                    <img alt={'avatar'} src={avatar} className={styles.icon__avatar} />
                                    <div>User {item}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classNames('row', styles.plan__controller)}>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'loading'} src={loading} className={styles.icon__avatar} />
                        </div>
                        <div className={classNames('row', 'center', 'color-red', styles.tag_user)}>
                            <div>Còn: &nbsp;</div>
                            <div>3000 pcs</div>
                        </div>
                    </div>
                    <div className={classNames('row', 'center')}>
                        <div>
                            <img alt={'check'} src={check} className={styles.icon__avatar} />
                        </div>
                        <div className={classNames('row', 'center', 'color-green', styles.tag_user)}>
                            <div>Hoàn thành: &nbsp;</div>
                            <div>3000 pcs</div>
                        </div>
                    </div>
                </div>
                <div className={classNames('row', 'center')} style={{ backgroundColor: 'white', borderRadius: 5 }}>
                    <Progress percent={70} />
                </div>
                <div className={classNames('row', styles.plan__controller)}>
                    <div className={classNames('row', 'center')} style={{ cursor: 'pointer' }}>
                        <div>
                            <img alt={'comment'} src={comment} style={{ width: 20, height: 20 }} />
                        </div>
                        <div className={classNames('row', 'center', styles.tag_user)}>
                            <div>Comment: &nbsp;</div>
                            <div>6</div>
                        </div>
                    </div>
                    <div className={classNames('row', 'center')} style={{ cursor: 'pointer' }}>
                        <div>
                            <img alt={'check'} src={compliant} style={{ width: 20, height: 20 }} />
                        </div>
                        <div className={classNames('row', 'center', styles.tag_user)}>
                            <div>Quality: &nbsp;</div>
                            <div>10</div>
                        </div>
                    </div>
                </div>
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
