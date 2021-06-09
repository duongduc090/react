import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import LayoutAdmin from './layout/Admin';
import LayoutSite from './layout/Site';
import NotFoundPage from './pages/404.js'
import Dashboard from './pages/admin/dashboard';
import AdminProductAdd from './pages/admin/product/add.js';
import Home from './pages/home.js';
import AboutPage from './pages/about.js'
import LoginPage from './pages/login.js'
import ProductsPageCli from './pages/products';
import ProductDetailPage from './pages/productDetail';
import ProductsPageAdmin from './pages/admin/product';
import EditProductPage from './pages/admin/product/edit';
import RegisterPage from './pages/register';
import AdminCategoryPage from './pages/admin/category';
import AdminCategoryAddPage from './pages/admin/category/addcate';
import AdminCategoryEditPage from './pages/admin/category/editcate';
import CategoryPage from './pages/categoryPage';

const Routers = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route exact path="/admin">
                                <Redirect to="/admin/dashboard"/>
                            </Route>
                            <Route exact path="/admin/dashboard">
                                <Dashboard/>
                            </Route>
                            <Route exact path="/admin/product">
                                <ProductsPageAdmin {...props}/>
                            </Route>
                            <Route exact path="/admin/category">
                                <AdminCategoryPage {...props}/>
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AdminCategoryAddPage {...props}/>
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAdd {...props}/>
                            </Route>
                            <Route exact path="/admin/product/edit/:id">
                                <EditProductPage {...props}/>
                            </Route>
                            <Route exact path="/admin/category/edit/:id">
                                <AdminCategoryEditPage {...props}/>
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutSite>
                        <Switch>
                            <Route exact path="/">
                                <Home {...props}/>
                            </Route>
                            <Route exact path="/about">
                                <AboutPage/>
                            </Route>
                            <Route exact path="/product">
                                <ProductsPageCli {...props}/>
                            </Route>
                            <Route exact path="/catepage/:id">
                                <CategoryPage {...props}/>
                            </Route>
                            <Route exact path="/login">
                                <LoginPage />
                            </Route>
                            <Route exact path="/register">
                                <RegisterPage />
                            </Route>
                            <Route path="/product/:id">
                                <ProductDetailPage/>
                            </Route>
                            <Route path="*">
                                <NotFoundPage/>
                            </Route>
                        </Switch>
                    </LayoutSite>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers;
