import React from 'react';

const HomePage = () => {
  const Investmentdata = [
    {
      id: 1,
      amount: '22,90,023,456',
      title: 'Invested value (Rs.)',
      color: 'yellow',
    },
    {
      id: 2,
      amount: '24,737',
      title: 'Current value (Rs.)',
      color: 'red',
    },
    {
      id: 3,
      amount: '1,837',
      title: 'Gain/Loss (Rs.)',
      color: 'blue',
    },
  ];
  return (
    <div className='bg-gray-100'>
      <div className='m-[30px]'>
        <h2 className='pt-[40px] pb-[20px] text-[18px] font-semibold text-[#252525]'>
          Investment Snapshot
        </h2>
        <div
          className='grid gap-4 mb-[30px]'
          style={{ gridTemplateColumns: '1fr 0.5fr' }}
        >
          <div className='bg-white rounded-xl w-full h-48'>
            <div className='grid grid-cols-4 gap-[12px] p-4 h-full '>
              {Investmentdata &&
                Investmentdata.length > 0 &&
                Investmentdata.map((i) => {
                  return (
                    <div className='border-2 border-gray-100 rounded-xl w-full h-full p-2'>
                      <h2 className='text-left p-4'>
                        <i
                          className={`pi pi-circle-fill text-xl text-gray-200`}
                        ></i>{' '}
                      </h2>
                      <div className='mt-4'>
                        <h3 className='text-[16px] font-bold text-[#252525]'>
                          {i.amount}
                        </h3>
                        <h3 className='text-[13px] mt-[4px] text-[#8C8C8C]'>
                          {i.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              <div className=' grid grid-rows-2 gap-[12px]  w-full h-full'>
                <div className='border-2 border-gray-100 rounded-xl p-4 '>
                  <h2 className='font-bold text-[13px] text-green-500'>
                    22.99%
                  </h2>
                  <h2 className=' text-[13px]'>
                    Abs returns <span>(%)</span>
                  </h2>
                </div>
                <div className='border-2 border-gray-100 rounded-xl p-4 '>
                  <h2 className='font-bold text-[13px] text-black'>22.99%</h2>
                  <h2 className=' text-[13px]'>
                    Abs returns <span>(%)</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-xl w-full h-48'>
            <h2 className='text-[15px] font-semibold text-[#252525]  border-b-2 border-gray-100 px-[20px] py-4 '>
              Relationship Manager
            </h2>
            <h2 className='flex gap-2 items-center font-medium text-[14px] text-[#252525] p-1 '>
              {' '}
              <i className={`pi pi-user  py-[10px] pl-[20px]`}></i>{' '}
              <p className='pl-4'>Satyaprakash Yadav</p>
            </h2>
            <h2 className='flex gap-2 items-center font-medium text-[14px] text-[#252525] p-1 '>
              {' '}
              <i className={`pi pi-phone  py-[10px] pl-[20px]`}></i>{' '}
              <p className='pl-4'>9820298202</p>
            </h2>
            <h2 className='flex gap-2 items-center font-medium text-[14px] text-[#252525] p-1 '>
              {' '}
              <i className={`pi pi-envelope  py-[10px] pl-[20px]`}></i>{' '}
              <p className='pl-4'>
                harshadapatkar.@optimumfinancialsolutions.com
              </p>
            </h2>
          </div>
        </div>
        {/* Top funds section */}
        <div className='grid grid-cols-2 gap-[30px]'>
          <div>
            <h2 className='pt-[40px] pb-[20px] text-[18px] font-semibold text-[#252525]'>
              Portfolio Allocation
            </h2>
            <div className='bg-white p-2 rounded-xl h-56'></div>
          </div>
          <div>
            <h2 className='pt-[40px] pb-[20px] text-[18px] font-semibold text-[#252525]'>
              Top funds
            </h2>
            <div className='bg-white p-2 rounded-xl h-56 grid grid-cols-2 gap-[20px]'>
              <div className='border-2 border-gray-100 rounded-xl w-full h-full p-2'>
                <h2 className='text-left p-4'>
                  <i
                    className={`pi pi-circle-fill text-[2rem] text-gray-200`}
                  ></i>{' '}
                </h2>
                <div className='mt-4'>
                  <h3 className='text-[13px] font-semibold text-[#252525] max-w-2/3'>
                    {/* {i.amount} */}SBI Tax Advantage Fund-III-reg(IDCW)
                  </h3>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    {/* {i.title} */} Equity - ELESS
                  </h3>
                </div>
                <div className='flex gap-2 justify-between items-center mt-8'>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    3 Year Returns
                  </h3>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    32.18%
                  </h3>
                </div>
              </div>
              <div className='border-2 border-gray-100 rounded-xl w-full h-full p-2'>
                <h2 className='text-left p-4'>
                  <i
                    className={`pi pi-circle-fill text-[2rem] text-gray-200`}
                  ></i>{' '}
                </h2>
                <div className='mt-4'>
                  <h3 className='text-[13px] font-semibold text-[#252525] max-w-2/3'>
                    {/* {i.amount} */}SBI Tax Advantage Fund-III-reg(IDCW)
                  </h3>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    {/* {i.title} */} Equity - ELESS
                  </h3>
                </div>
                <div className='flex gap-2 justify-between items-center mt-8'>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    3 Year Returns
                  </h3>
                  <h3 className='text-[13px] font-semibold mt-[4px] text-[#8C8C8C]'>
                    32.18%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
