import { BotIcon, GrayRectangle, PersonIcon, Rectangle } from "@/assets";
import { Message as MessageProps } from "@/types";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Message({
  msg,
  isLoading,
  userMessage,
}: {
  msg: MessageProps;
  isLoading: boolean;
  userMessage: string;
}) {  

  return (
    <div className="space-y-1 p-2 pt-0 mt-[62px]">
      {msg.role === "user" && (
        <span className="flex items-center gap-x-[7px] justify-start flex-row-reverse text-[17px]">
          <Image
            className="size-[35px]"
            src={PersonIcon}
            width={35}
            height={35}
            alt="Person Icon"
          />
          <span className="bg-main p-[10px] rounded-xl relative !rounded-br-none">
            {msg.content}
            <Image
              className="size-2 absolute -bottom-[7px] right-0"
              src={Rectangle}
              width={8}
              height={8}
              alt="Triangle Icon"
            />
          </span>
        </span>
      )}
      {msg.role === "assistant" && (
        <span className="flex items-center gap-x-[7px] relative">
          <Image
            className="size-[35px]"
            src={BotIcon}
            width={35}
            height={35}
            alt="Bot Icon"
          />
          <TypeAnimation
            sequence={[`${msg.content}`]}
            cursor={false}
            speed={90}
            wrapper="span"
            className="bg-[#F4F5F4] bg-opacity-30 rounded-xl text-[17px] rounded-bl-none p-[10px]"
          />
          <Image
            className="absolute size-2 -bottom-[8px] left-[42px]"
            src={GrayRectangle}
            width={8}
            height={8}
            alt="Gray Triangle Icon"
          />
        </span>
      )}
    </div>
  );
}
