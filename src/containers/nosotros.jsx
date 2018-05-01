import React, { Component } from 'react';
import { Badge, Button, Divider, Icon } from 'antd';

export default class Nosotros extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    decrease = () => {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    render() {
        return (
            <div>
                <h4>Nosotros</h4>
                <Divider></Divider>
                <Badge count={this.state.count}>
                    <h3>☼</h3>
                    <a href="#" className="head-example" />
                </Badge>
                <Button.Group>
                    <Button onClick={this.decrease}>
                        <Icon type="minus" />
                    </Button>
                    <Button onClick={this.increase}>
                        <Icon type="plus" />
                    </Button>
                </Button.Group>
            </div>
        );
    }
}