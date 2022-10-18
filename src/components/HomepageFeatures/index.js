import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Drop-in schemas',
        Svg: require('@site/static/img/undraw_moving_forward_re_rs8p.svg')
            .default,
        description: <>Copy pasta any schema you'd like</>
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_start_building_re_xani.svg')
            .default,
        description: (
            <>Grab & go schemas let you focus on the rest of your app</>
        )
    },
    {
        title: 'Schemas for everyone',
        Svg: require('@site/static/img/undraw_collaborating_re_l43g.svg')
            .default,
        description: <>Sharing is caring</>
    }
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
