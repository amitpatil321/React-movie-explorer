import React, { Component } from 'react'
import { Row, Col, Select } from 'antd';

import { range } from 'lodash/range';

const Option = Select.Option;

export default class Discover extends Component {

  render() {
    let yearsRange = range(1900,new Date().getFullYear, 1);
    return (
      <>
        <Row>
            <h1>Discover New Movies & TV Shows</h1>
            <Row>
                <Col>
                    Year
                    <Select defaultValue="None">
                    {
                        yearsRange.map(each => {
                            return <Option value={each}>{each}</Option>
                        })
                    }
                    </Select>
                </Col>
            </Row> 
        </Row>
      </>
    )
  }
}
