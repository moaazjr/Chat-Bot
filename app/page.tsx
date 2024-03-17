"use client";

import { BotIcon, GrayRectangle, PersonIcon, Rectangle } from "@/assets";
import Message from "@/components/Message/Message";
import useMessages from "@/hooks/useMessages";
import Image from "next/image";

export default function Home() {
  const {
    isLoading,
    userMessage,
    messages,
    inputRef,
    handleSubmit,
    isHidden,
    setIsHidden,
  } = useMessages();

  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="text-[100px]">Welcome to Chatbot</h1>

      
      {isHidden && (
        <button
          onClick={() => setIsHidden(false)}
          className="fixed bottom-[30px] right-[30px]"
        >
          <Image
            className="w-[115px] h-[115px]"
            src={BotIcon}
            width={115}
            height={115}
            alt="Chat Bot Icon"
          />
        </button>
      )}

      
      {!isHidden && (
        <form
          onSubmit={handleSubmit}
          className="fixed bottom-[40px] right-[40px] w-[430px] min-h-[500px] bg-dark_blue rounded-3xl text-white overflow-y-auto flex flex-col justify-between pb-[24px]"
        >
          <div className="py-[12px] border-b border-[#C7C6C7]">
            <button
              type="button"
              onClick={() => setIsHidden(true)}
              className="text-xl absolute top-[19px] left-[17px]"
            >
              Close
            </button>

            <h2 className="text-[26px] text-center">
              <span className="size-3 rounded-full inline-block bg-main"></span>{" "}
              Chatbot
            </h2>
          </div>

          <div className="space-y-4 mb-5 max-h-[500px] overflow-y-auto">
            {messages.map((msg) => (
              <Message
                key={msg._id}
                msg={msg}
                isLoading={isLoading}
                userMessage={userMessage}
              />
            ))}

            {isLoading && (
              <>
                <span className="flex items-center gap-x-[7px] justify-start flex-row-reverse text-[17px]">
                  <Image
                    className="size-[35px]"
                    src={PersonIcon}
                    width={35}
                    height={35}
                    alt="Person Icon"
                  />
                  <span className="bg-main p-[10px] rounded-xl relative !rounded-br-none">
                    {userMessage}
                    <Image
                      className="size-2 absolute -bottom-[7px] right-0"
                      src={Rectangle}
                      width={8}
                      height={8}
                      alt="Triangle Icon"
                    />
                  </span>
                </span>

                <span className="flex items-center gap-x-[7px]">
                  <Image
                    className="size-[35px]"
                    src={BotIcon}
                    width={35}
                    height={35}
                    alt="Bot Icon"
                  />
                  <span className="bg-[#F4F5F4] bg-opacity-30 rounded-xl text-[17px] p-[10px]">
                    <div className="loader3">
                      <div className="circle1"></div>
                      <div className="circle1"></div>
                      <div className="circle1"></div>
                      <div className="circle1"></div>
                      <div className="circle1"></div>
                    </div>
                  </span>
                </span>
              </>
            )}
          </div>

          <div
            className={`flex items-center justify-between gap-x-[15px] pl-[12px] pr-[18px] mt-5`}
          >
            <input
              ref={inputRef}
              className="p-[14px] border border-main bg-[#40414F] rounded-[12px] outline-none caret-main w-full"
              type="text"
              placeholder="Type a new message"
            />
            <button
              className="text-[#A4A4A4] text-lg font-semibold"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
