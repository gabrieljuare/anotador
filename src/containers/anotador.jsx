import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';

import Nosotros from './nosotros';
import Ellos from './ellos';

export default class Anotador extends Component {
    render() {
        return (
            <div>
                <Row gutter={8}>
                    <Col span={12}>
                        <Nosotros></Nosotros>
                    </Col>
                    <Col span={12}>
                        <Ellos></Ellos>
                    </Col>
                </Row>
            </div>
        );
    }
}