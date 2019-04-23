import React, { Component } from 'react'
import { Row, Col, Select } from 'antd';

import { range } from 'lodash';

const Option = Select.Option;

export default class Discover extends Component {

  render() {
    let yearsRange  = range(parseInt(new Date().getFullYear()), 1989, -1);
    let yearOptions = [];
    yearsRange.forEach((year) =>{
        yearOptions.push(<Option value={year} key={year}>{year}</Option>);
    });

    console.log(yearOptions);

    return (
      <>
        <Row>
            <h1>Discover New Movies & TV Shows</h1>
            <Row>
                <Col>
                    Year
                    <Select defaultValue="None">
                        {yearOptions}
                    </Select>
                </Col>
            </Row>
        </Row>
      </>
    )
  }
}
