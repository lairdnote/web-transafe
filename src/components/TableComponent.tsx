import React  from "react";
import { Table } from 'flowbite-react';

function TableComponent() {

    return (
        <Table>
  <Table.Head>
    <Table.HeadCell>
      Coin
    </Table.HeadCell>
    <Table.HeadCell>
      Total
    </Table.HeadCell>
    
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        HDO 
      </Table.Cell>
      <Table.Cell>
        3000
      </Table.Cell>
      <Table.Cell>
        <a
          href="/buy"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          兑换
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        HDO 
      </Table.Cell>
      <Table.Cell>
        1500
      </Table.Cell>
      <Table.Cell>
        <a
          href="/buy"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          兑换
        </a>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        HDO 
      </Table.Cell>
      <Table.Cell>
        500
      </Table.Cell>
      <Table.Cell>
        <a
          href="/buy"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          兑换
        </a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
    )
}

export default TableComponent