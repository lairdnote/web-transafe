import React, { useState } from "react";


import MainLayout from '../components/MainLayout'

import {  Textarea } from "flowbite-react";

import * as OpenCC from 'opencc-js';

function Welcome() {

  const [inputValue, setInputValue] = useState("")
  const [outputValue, setOutputValue] = useState("")
  
  const handleSubmmit = (event: any) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  const handleSubmit1 = () => {
    const converter = OpenCC.Converter({ from: 'cn', to: 'hk' });

    setOutputValue(converter(inputValue))

  }
  const handleSubmit2 = () => {
    const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });
    setOutputValue(converter(inputValue))

  }
  return (
    <>
      <MainLayout>
      <div className="bg-gray-800 m-4 dark:bg-gray-800  text-blue-50 mb-auto auto-cols-max h-4/6">


        <div className="flex-row mx-auto h-full">

        <Textarea id="input" className="max-h-screen  auto-cols-max h-2/6"  placeholder="请输入你的内容..." onChange={handleSubmmit}/>
      
        <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit1}> 简体 - 繁体 </button>
        <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit2}> 繁体 - 简体 </button>
        <Textarea id="output" className="max-h-screen  auto-cols-max h-3/6"  placeholder="请等待..." value={outputValue} />
        </div>
        </div>

      </MainLayout>
    </>
  )
}
export default Welcome;