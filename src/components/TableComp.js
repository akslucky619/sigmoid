import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Table } from "antd";

class TableComp extends React.Component {
  render() {
    const { barData } = this.props;
    console.log(barData, "in table");
    const columns = [
      {
        title: "Publisher ID",
        dataIndex: "publisherId",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Impression Offered",
        className: "column-money",
        dataIndex: "impressions_offered",
        align: "right",
      },
    ];

    const data = [...barData];
    const config = {
      bordered: true,
      loading: false,
      pagination: { position: "bottom" },
      size: "default",
      title: undefined,
      showHeader: true,
      rowSelection: {},
      scroll: { y: 240 },
    };
    return (
      <div>
        <h1>Table Example</h1>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          // scroll={{ y: 800 }}
          {...config}
          title={() => "Header"}
          footer={() => "Footer"}
        />
      </div>
    );
  }
}

export default TableComp;
