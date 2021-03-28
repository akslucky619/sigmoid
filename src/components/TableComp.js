import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Table } from "antd";

class TableComp extends React.Component {
  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Cash Assets",
        className: "column-money",
        dataIndex: "money",
        align: "right",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
    ];

    const data = [
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
      {
        key: "1",
        name: "John Brown",
        money: "￥300,000.00",
        address: "New York No. 1 Lake Park",
      },
      {
        key: "2",
        name: "Jim Green",
        money: "￥1,256,000.00",
        address: "London No. 1 Lake Park",
      },
      {
        key: "3",
        name: "Joe Black",
        money: "￥120,000.00",
        address: "Sidney No. 1 Lake Park",
      },
    ];
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
      <Table
        columns={columns}
        dataSource={data}
        bordered
        // scroll={{ y: 800 }}
        {...config}
        title={() => "Header"}
        footer={() => "Footer"}
      />
    );
  }
}

export default TableComp;
