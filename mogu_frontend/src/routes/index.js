import React, { lazy, Suspense} from 'react';
import { Redirect } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout';
import BlankLayout from '../layouts/BlankLayout';
import AttentionLayout from '../layouts/AttentionLayout'
import FooterLayout from '../layouts/FooterLayout';
import LookLayout from '../layouts/LookLayout'
import Discover from '../pages/Home/discover/Discover';

// 组件懒加载
// const HomeComponent = lazy(() => import ('../pages/home/Home'))
// const AttentionComponent = lazy(() => import ('../pages/attention/Attention'))
const ShoppingComponent = lazy(() => import ('../pages/shopping/Shopping'))
const MessageComponent = lazy(() => import ('../pages/message/Message'))
const MyComponent = lazy(() => import ('../pages/my/My'))
const DiscoverComponent = lazy(() => import ('../pages/Home/discover/Discover'))
const LiveComponent = lazy(() => import ('../pages/home/live/Live'))
const NearbyComponent = lazy(() => import ('../pages/home/nearby/Nearby'))
const AttenComponent = lazy(() => import ('../pages/attention/atten/Atten'))
// const LookComponent = lazy(() => import ('../pages/attention/look/Look'))
const HotComponent = lazy(() => import ('../pages/attention/look/hot/Hot'))
const FavoritesComponent = lazy(() => import ('../pages/favorites/Favorites'))
const GoodsDetailComponent = lazy(() => import ('../pages/goodsDetail/GoodsDetail'))

const SuspenseComponent = Component => props => {
    // fallback 是一个回滚事件
    return (
        <Suspense fallback= {null}>
            <Component {...props}>
            </Component>
        </Suspense>
    )
}

export default [
    {
        component: BlankLayout,
        routes: [
            {
                path: '/',
                component: FooterLayout,
                routes: [
                    {
                        path: '/',
                        exact: true,
                        render: () => <Redirect to="/home" />
                    }, 
                    {
                        path: '/home',
                        component: HomeLayout,
                        // component: SuspenseComponent(HomeComponent),
                        routes: [
                            {
                                path: '/home',
                                exact: true,
                                render: () => <Redirect to="/home/discover" />
                            },
                            {
                                path: '/home/discover',
                                component: SuspenseComponent(DiscoverComponent)
                            },
                            {
                                path: '/home/live',
                                component: SuspenseComponent(LiveComponent)
                            },
                            {
                                path: '/home/nearby',
                                component: SuspenseComponent(NearbyComponent)
                            }
                        ]
                    }, 
                    {
                        path: '/attention',
                        component: AttentionLayout,
                        // component: SuspenseComponent(AttentionComponent)
                        routes: [
                            {
                                path: '/attention',
                                exact: true,
                                render: () => <Redirect to="/attention/atten" />
                            },
                            {
                                path: '/attention/atten',
                                component: SuspenseComponent(AttenComponent)
                            },
                            {
                                path: '/attention/look',
                                component: LookLayout,
                                // component: SuspenseComponent(LookComponent),
                                routes: [
                                    {
                                        path: '/attention/look',
                                        exact: true,
                                        render: () => <Redirect to="/attention/look/hot" />
                                    },
                                    {
                                        path: '/attention/look/hot',
                                        component: SuspenseComponent(HotComponent)
                                    }
                                ]
                            }
                        ]
                    }, 
                    {
                        path: '/shopping',
                        component: SuspenseComponent(ShoppingComponent),
                        routes: [
                            {
                                path: '/shopping/:id',
                                component: SuspenseComponent(GoodsDetailComponent)
                            }
                        ]
                    }, 
                    {
                        path: '/message',
                        component: SuspenseComponent(MessageComponent)
                    }, 
                    {
                        path: '/my',
                        component: SuspenseComponent(MyComponent),
                    },
                    {
                        path: '/favorite',
                        component: SuspenseComponent(FavoritesComponent)
                    }
                ]
            }
        ]
    }
]