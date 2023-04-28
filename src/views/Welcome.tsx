import React from "react";
import { Card } from 'flowbite-react'
import TableComponent from '../components/TableComponent';
import MainLayout from '../components/MainLayout'
function Welcome() {
  return (
    <>
      <MainLayout>
        <div className="mb-auto pt-10 justify-between flex flex-wrap  md:flex-wrap ... ">


          <Card href="#" className="bg-gradient-to-l  rotate-12 items-end " >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              步骤1
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-prose">
              Hi. 我们是代售小额HDO， 3000美金以下
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">

              交易方式：  使用USDT 到平台地址：

            </p>
            <p className="underline">0x3C4c444D98BDb92BC33666AA5FdA5a24E1171495

            </p>
          </Card>
          <Card href="#" className="bg-gradient-to-r  rotate-6 items-end" >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              步骤2
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-prose">
              Hi. 我们是代售小额HDO， 3000美金以下
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">

              交易方式：  使用USDT 到平台地址：

            </p>
            <p className="underline">0x3C4c444D98BDb92BC33666AA5FdA5a24E1171495

            </p>
          </Card>
          <Card href="#" className="bg-gradient-to-l  rotate-12 items-end" >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              步骤3
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-prose">
              Hi. 我们是代售小额HDO， 3000美金以下
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">

              交易方式：  使用USDT 到平台地址：

            </p>
            <p className="underline">0x3C4c444D98BDb92BC33666AA5FdA5a24E1171495

            </p>
          </Card>
          <Card href="#" className="bg-gradient-to-r  rotate-6 items-end" >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              步骤4
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 max-w-prose">
              Hi. 我们是代售小额HDO， 3000美金以下
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">

              交易方式：  使用USDT 到平台地址：

            </p>
            <p className="underline">0x3C4c444D98BDb92BC33666AA5FdA5a24E1171495

            </p>
          </Card>
        </div>
        <div className="text-8xl md-4 text-white  truncate text-center">

          Welcome
        </div>
        <div className="text-xl md-4 text-white  truncate text-center">

          服务时间会比较长 不超过12小时， 完成一笔交易后会继续下一笔。

        </div>
        <div className="bg-gray-800 rounded-lg shadow m-4 dark:bg-gray-800 w-full h-48  static bottom-0">
          <TableComponent />
        </div>


      </MainLayout>
    </>
  )
}
export default Welcome;