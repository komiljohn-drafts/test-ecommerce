import CameraSvg from "./icons/camera";
import ComputerSvg from "./icons/computer";
import GamingSvg from "./icons/gaming";
import HeadphonesSvg from "./icons/headphones";
import PhoneSvg from "./icons/PhoneSvg";
import SmartWatchSvg from "./icons/smart-watch";

interface ICategory {
  icon: JSX.Element;
  text: string;
}

const categories: ICategory[] = [
  {
    icon: <PhoneSvg />,
    text: "Phones",
  },
  {
    icon: <ComputerSvg />,
    text: "Computers",
  },
  {
    icon: <SmartWatchSvg />,
    text: "SmartWatch",
  },
  {
    icon: <CameraSvg />,
    text: "Camera",
  },
  {
    icon: <HeadphonesSvg />,
    text: "HeadPhones",
  },
  {
    icon: <GamingSvg />,
    text: "Gaming",
  },
  {
    icon: <PhoneSvg />,
    text: "Phones",
  },
];

export default categories;
