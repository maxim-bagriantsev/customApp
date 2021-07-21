import React from "react";
import {Layout, Menu} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {TeamsList} from "../TeamsList";
import {Matches} from "../Matches";
import {CompetitionsList} from "../CompetitionsList";
import {NavLink} from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css'
import {HomePage} from "../HomePage";
import {HomeOutlined} from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import {TeamMatches} from "../TeamMatches";
import {Input} from "../Input";

const {Header, Content, Footer} = Layout;

export const App = (props) => {
    return (
        <Router>
            <div className='main'>
                <Layout>
                    
                    <Header style={{backgroundColor: '#001529'}}>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item key={1}><NavLink style={{color: 'white'}} to='/'><HomeOutlined
                                style={{fontSize: '35px'}}/></NavLink></Menu.Item>
                            <Menu.Item key={2}><NavLink style={{color: 'white'}}
                                                        to='/competitions'>Чемпионаты</NavLink></Menu.Item>
                            <Menu.Item key={3}><NavLink style={{color: 'white'}} to='/teams'>Команды
                            </NavLink></Menu.Item>
                            <Menu.Item key={4}><NavLink style={{color: 'white'}} to='/matches'>Матчи
                            </NavLink></Menu.Item>
                            <Menu.Item key={5}><NavLink style={{color: 'white'}} to='/customHooks'>Пользовательскиу хуки
                            </NavLink></Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{margin: '10px 50px'}}>
                        <div className='content'>
                            <Route exact path='/' component={HomePage}/>
                            <Route exact path='/competitions' component={CompetitionsList}/>
                            <Route exact path='/teams' component={TeamsList}/>
                            <Route exact path='/matches' component={Matches}/>
                            <Route exact path='/teams/:teamId/matches' component={TeamMatches}/>
                            <Route exact path='/customhooks' component={Input}/>
                        </div>
                    </Content>

                    <Footer>
                        <p style={{textAlign: "center", color: "black", fontWeight: 500}}>
                            <Text style={{fontWeight: 700}}> Questions? </Text>
                            Drop me a line to <a style={{color: "blue"}}>maxim163rus@gmail.com</a> ,
                            Copyright © 2021
                        </p>
                    </Footer>

                </Layout>
            </div>
        </Router>
    )
}


