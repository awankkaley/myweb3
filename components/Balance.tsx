import React, { useState, useLayoutEffect } from 'react';
import { Skeleton, Table, Dropdown, Button } from 'antd';
import { useMoralis, useERC20Balances,useChain } from "react-moralis";
import { getEllipsisTxt } from 'helper/formatters';


const Balance = (props) => {
    const { data: assets } = useERC20Balances(props);
    const { Moralis } = useMoralis();
  const { switchNetwork, chainId, chain } = useChain();

    console.log(chainId);
    

    const columns = [
        {
            title: "",
            dataIndex: "logo",
            key: "logo",
            render: (logo) => (
                <img
                    src={logo || "https://etherscan.io/images/main/empty-token.png"}
                    alt="nologo"
                    width="28px"
                    height="28px"
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (name) => name,
        },
        {
            title: "Symbol",
            dataIndex: "symbol",
            key: "symbol",
            render: (symbol) => symbol,
        },
        {
            title: "Balance",
            dataIndex: "balance",
            key: "balance",
            render: (value, item) =>
                parseFloat(Moralis.Units.FromWei(value,item.decimals)).toFixed(6),
        },
        {
            title: "Address",
            dataIndex: "token_address",
            key: "token_address",
            render: (address) => getEllipsisTxt(address, 5),
        },
    ];
    return (
        <div style={{ width: "65vw", padding: "15px" }}>
            <h1>💰Token Balances</h1>
            <Skeleton loading={!assets}>
                <Table
                    dataSource={assets}
                    columns={columns}
                    rowKey={(record) => {
                        return record.token_address;
                    }}
                />
            </Skeleton>
        </div>
    );
};

export default Balance;

const styles = {
    account: {
        height: "42px",
        padding: "0 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        borderRadius: "12px",
        backgroundColor: "rgb(244, 244, 244)",
        cursor: "pointer",
    },
    text: {
        color: "#21BF96",
    },
    connector: {
        alignItems: "center",
        display: "flex",
        flexDirection: 'column' as 'column',
        height: "auto",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px 5px",
        cursor: "pointer",
    },
    icon: {
        alignSelf: "center",
        fill: "rgb(40, 13, 95)",
        flexShrink: "0",
        marginBottom: "8px",
        height: "30px",
    },
};


