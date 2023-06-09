"use client";
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {

  const userHistory = [
    {
      round: 49,
      purchasedDateTime: "19 Nov 2022,23:59",
      drawnDateTime: "20 Nov 2022,22:10",
      boughtTicketCount: 3,
      isWinner: false
    },
    {
      round: 50,
      purchasedDateTime: "24 Nov 2022,23:59",
      drawnDateTime: "26 Nov 2022,22:10",
      boughtTicketCount: 1,
      isWinner: true
    },
    {
      round: 97,
      purchasedDateTime: "5 June 2023,20:59",
      drawnDateTime: null,
      boughtTicketCount: 1,
      isWinner: false
    }
  ]


  const [isMenuOpen, setMenu] = useState(false);
  const [historyValue, setHistory] = useState(0)
  const [userTransactions, setUserTransactions] = useState<{ round: number, purchasedDateTime: string, drawnDateTime: string | null, boughtTicketCount: number, isWinner: boolean }[]>(userHistory)



  return (
    <main className=" min-h-screen overflow-y-scroll w-full overflow-x-hidden relative">
      <div className='decoration-1 '/>
      <div className='decoration-2 '/>
      <div className='decoration-3 '/>
      <div className='decoration-4 '/>
      <div className='decoration-5 '/>
      <div className='decoration-6 '/>
      {isMenuOpen ? <div className='relative'>
        <div className='absolute w-full bg-gray-900 z-50 px-3 pb-3'>
          <Image onClick={() => setMenu((value) => value = false)} src="/cross.svg" className='ml-auto mr-2 mt-3 cursor-pointer ' alt='' width="20" height="20"></Image>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div>Trade</div>
              <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
            </div>
            <div className="flex gap-2">
              <div>Earn</div>
              <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
            </div>
            <div className="flex gap-2">
              <div>Win</div>
              <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
            </div>
          </div>
        </div>
      </div> : <div></div>}

      <div className=" md:px-24 py-4 flex justify-between border-b-2">
        <div className='flex gap-8' >
          <Image src="/logo.svg" alt='' width="142" height="47"></Image>
          <button className='flex items-center gap-2.5 invisible md:visible'>
            <div>Trade</div>
            <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
          </button>
          <button className='flex items-center gap-2.5 invisible md:visible'>
            <div>Earn</div>
            <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
          </button>
          <button className='flex items-center gap-2.5 invisible md:visible'>
            <div>Win</div>
            <Image src="arrow-down.svg" alt="" width="10" height="5"></Image>
          </button>

        </div>
        <div className='flex gap-4 invisible md:visible'>
          <Image src="wallet-icon.svg" alt="" width="40" height="32"></Image>
          <button className="connect-btn-bg px-6 rounded-lg "    >
            Connect Wallet</button>
        </div>
        <Image onClick={() => setMenu((value) => value = true)} className='absolute cursor-pointer float-right right-4 top-6 visible md:invisible md:w-0' src="menu.svg" alt="" width="40" height="32"></Image>

      </div>

      <div className='flex flex-col items-center mt-16 ' >
        <div className='text-4xl md:text-6xl font-semibold'> Qroniswap Lottery </div>
        <div className='mt-8 violet-txt text-4xl md:text-6xl'> $100,000</div>
        <div className='mt-8'>In Prizes!</div>
        <button className=' text-2xl my-24 px-14 py-2 rounded-3xl border-buy '>Buy Tickets</button>
      </div>

      <div className='flex flex-col items-center'>
        <div className='text-4xl font-semibold' >How to Play</div>
        <div className='w-8/12  md:w-5/12 text-xl mt-6 text-center subtitle'>If the digits on your ticket match the winning numbers in the correct order,
          you win a portion of the prize pool. Simple!</div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-around px-12 md:px-24 mt-16 '>
        <div className='flex flex-col items-center '>
          <div className='w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >
            <Image src="buy_ticket.svg" alt="" width="20" height="20"></Image>
          </div>
          <div className="text-xl font-semibold py-2.5">Buy Tickets</div>
          <div className='text-center subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >
            <Image src="wait_for_draw.svg" alt="" width="20" height="20"></Image>
          </div>
          <div className="text-xl font-semibold py-2.5">Wait for the draw</div>
          <div className='text-center subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >
            <Image src="check_for_prizes.svg" alt="" width="20" height="20"></Image>
          </div>
          <div className="text-xl font-semibold py-2.5">Check for prizes</div>
          <div className='text-center subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-24 ' >
        <div className='text-4xl md:text-6xl font-semibold'> Get your tickets now! </div>
        <div className='flex my-8 text-4xl md:text-6xl font-semibold'>
          <div className='flex'>
            <div className='violet-txt'>4</div>
            <div>d</div>
          </div>
          <div className='flex ml-6'>
            <div className='violet-txt'>9</div>
            <div>h</div>
          </div>
          <div className='flex ml-6'>
            <div className='violet-txt'>23</div>
            <div>min</div>
          </div>
        </div>
        <div className='text-xl'>Until the draw</div>

        <div className=' mx-12 md:mx-24 border-bg  p-3 mt-16 md:w-1/2' >
          <div className='flex flex-col  '>
            <div className='flex justify-between '>
              <div className='text-xs md:text-xl'>Next draw</div>
              <div className='text-xs md:text-xl'>Nov 12, 2022, 4:30pm</div>
            </div>
            <hr className="h-px my-4 border-0 bg-gray-700"></hr>
            <div className=' flex flex-col items-center'>
              <div className='font-semibold  text-4xl md:text-5xl'>Prize Pot</div>
              <div className='font-semibold  mt-8 violet-txt text-4xl'> $75,000</div>
              <div className='mt-8 text-lg'> 20,554 stars</div>
              <input type="number" className='bg-gray-600 rounded-lg px-2 placeholder-white outline-none py-1 mt-8' placeholder='Input ticket count'></input>
              <button className=' text-2xl my-8 px-14 py-2 rounded-3xl border-buy '>Buy Tickets</button>
            </div>
          </div>
        </div>

      </div>



      <div className='flex flex-col items-center mt-16'>
        <div className='font-semibold text-4xl md:text-6xl'>Finished Rounds</div>
        <div className='flex justify-center bg-white p-1 my-6 rounded-md'>
          <button onClick={() => setHistory((previousValue) => previousValue = 0)} className={` px-10 rounded-lg ${historyValue == 0 ? "connect-btn-bg" : "text-black"}`} >All history</button>
          <button onClick={() => setHistory((previousValue) => previousValue = 1)} className={` px-10 rounded-lg ${historyValue == 1 ? "connect-btn-bg" : "text-black"}`}>Your history</button>
        </div>
        {historyValue == 0 ?
          <div className=' mx-12 md:mx-24 border-bg  p-3  mt-16 md:w-1/2 ' >
            <div className='flex flex-col  '>
              <div className='flex justify-between items-center'>
                <div className='flex  flex-col'>
                  <div className="flex items-center ">
                    <div className='font-semibold text-2xl'>Round</div>
                    <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >
                      96
                    </div>
                  </div>
                  <div className='mt-2 subtitle'>Drawn Nov 12, 2022, 4:30pm </div>
                </div>
                <div className='text-xl'>TODO: Find pagination library</div>
              </div>
              <hr className="h-px my-4 border-0 bg-gray-700"></hr>
              <div className='flex flex-col md:flex-row items-center justify-around'>
                <div className='font-semibold text-2xl mb-2 md:mb-0'>Winning Number</div>
                <div className='flex'>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >9</div>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >8</div>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >4</div>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >1</div>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >7</div>
                  <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >0</div>
                </div>
              </div>
              <hr className="h-px my-4 border-0 bg-gray-700"></hr>
              <div className='grid grid-cols-3 justify-items-center'>
                <div className='flex flex-col  justify-start'>
                  <div className='text-lg font-semibold'>Gold</div>
                  <div className='text-lg font-semibold violet-txt'>0.070 BNB</div>
                  <div className='text-lg font-semibold'>$20</div>
                </div>
                <div className='flex flex-col justify-start'>
                  <div className='text-lg font-semibold'>Silver</div>
                  <div className='text-lg font-semibold violet-txt'>0.035 BNB</div>
                  <div className='text-lg font-semibold'>$10</div>
                </div>
                <div className='flex flex-col  justify-start'>
                  <div className='text-lg font-semibold'>Bronze</div>
                  <div className='text-lg font-semibold violet-txt'>0.018 BNB</div>
                  <div className='text-lg font-semibold'>$5</div>
                </div>
              </div>
              <div className="flex justify-center gap-2 items-center my-3">
                <div >Hide</div>
                <Image src="arrow-up.svg" alt="" width="10" height="5"></Image>
              </div>
            </div>
          </div> :
          <div className=' mx-12 md:mx-24 border-bg  p-3  mt-16 md:w-1/2 flex flex-col '>
            <div className='text-lg font-semibold mx-auto'>Recent Transactions</div>
            {userTransactions.length ? <div className='mb-3'>TODO: Find pagination library</div> : <div></div>}


            {userTransactions.length ?

              userTransactions.map((txn) =>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center gap-4">
                    <div className='flex items-center'>
                      <div>Round</div>
                      <div className='ml-3 w-10 h-10 connect-btn-bg rounded-3xl flex items-center justify-center' >
                        {txn.round}
                      </div>
                    </div>
                    <div>Bought {txn.purchasedDateTime}</div>
                  </div>
                  <div className='mt-3 flex justify-between'>
                    <div>Ticket count(s): {txn.boughtTicketCount}</div>
                    <div> {txn.drawnDateTime ? `Drawn ${txn.drawnDateTime}` : 'Pending lottery draw'}</div>
                  </div>
                  {txn.isWinner ? <button className=' w-fit mx-auto px-6 py-2 rounded-3xl border-buy mt-2'>Claim Prizes</button> : <div></div>}

                  <hr className="h-px my-4 border-0 bg-gray-700"></hr>
                </div>
              )

              : <div className='my-2'>No recent transactions</div>}
          </div>}

      </div>


      <div className="mx-12 md:mx-24 md:grid md:grid-cols-12 mt-16 justify-items-center items-center ">
        <div className='col-span-7 flex flex-col gap-3'>
          <div className='text-2xl font-semibold'>Winning Criteria</div>
          <div className='violet-txt font-semibold text-2xl'>The digits on your ticket must match in the correct order to win.</div>
          <div>Here’s an example lottery draw, with two tickets, A and B.</div>
          <div>Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.</div>
          <div>Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.</div>
          <div>Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.</div>
        </div>

        <Image src="winning_criteria_1.svg" alt="" className='col-span-5 mx-auto' width={400} height={273}></Image>

      </div>

      <div className="mx-12 md:mx-24   md:grid md:grid-cols-12  mt-16 justify-items-center items-center mb-24">
        <div className='col-span-7 flex flex-col gap-3'>
          <div className='text-2xl font-semibold'>Prize Funds</div>
          <div className='subtitle'>The prizes for each lottery round come from three sources:</div>
          <div className='text-2xl font-semibold'>$20 Gold</div>
          <div className='subtitle'>100% of the BNB paid by people buying tickets that round goes back into the prize pools.</div>
          <div className='text-2xl font-semibold'>$10 Silver</div>
          <div className='subtitle'>After every round, if nobody wins in one of the prize brackets, the unclaimed BNB for that bracket rolls over into the next round and are redistributed among the prize pools.</div>
          <div className='text-2xl font-semibold'>$5 Bronze</div>
          <div className='subtitle'>An average total of 35,000 BNB from the treasury is added to lottery rounds over the course of a week. This BNB is of course also included in rollovers! Read more in our guide to BNB Tokenomics</div>
        </div>

        <Image src="winning_criteria_2.svg" alt="" className='col-span-5 mx-auto ' width={400} height={350}></Image>

      </div>

      <div className='footer-bg px-12 md:px-24 py-16 flex flex-wrap justify-items-center gap-3'>
        <div className='flex flex-[3] flex-col'>
          <Image src="/logo.svg" alt='' width="142" height="47"></Image>
          <div className='subtitle text-sm mt-6'>Copyright © 2022 Qroniswap Inc.</div>
          <div className='subtitle text-sm mt-2'>All rights reserved</div>
          <div className="flex gap-3 mt-4 flex-wrap" >
            <Image src="/telegram.svg" alt='' width="18" height="18"></Image>
            <Image src="/discord.svg" alt='' width="18" height="18"></Image>
            <Image src="/twitter.svg" alt='' width="18" height="18"></Image>
            <Image src="/youtube.svg" alt='' width="18" height="18"></Image>
            <Image src="/instagram.svg" alt='' width="18" height="18"></Image>
          </div>
        </div>
        <div className='flex flex-1 flex-col '>
          <div className='font-semibold text-lg'>Product</div>
          <div className='subtitle text-sm mt-6'>Swap</div>
          <div className='subtitle text-sm mt-2'>Staking</div>
          <div className='subtitle text-sm mt-2'>Farming</div>
          <div className='subtitle text-sm mt-2'>Liquidity</div>
          <div className='subtitle text-sm mt-2'>NFT</div>
        </div>
        <div className='flex flex-1 flex-col'>
          <div className='font-semibold text-lg'>Support</div>
          <div className='subtitle text-sm mt-6'>FAQ</div>
          <div className='subtitle text-sm mt-2'>Discord</div>
          <div className='subtitle text-sm mt-2'>Tokenomics</div>
          <div className='subtitle text-sm mt-2'>Audits</div>
          <div className='subtitle text-sm mt-2'>Apply for Listing</div>
        </div>
        <div className='flex flex-[2] flex-col'>
          <div className='font-semibold text-lg mb-6'>Stay up to date</div>
          <div className="flex">
             <input type="text" className='bg-gray-600 rounded-lg px-2 placeholder-white outline-none py-1' placeholder='Your email address'></input>
          </div>
        </div>
      </div>
    </main>
  )
}
