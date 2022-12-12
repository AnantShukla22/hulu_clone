import Image from "next/image"
import logo from "../public/images/logo.png"
import HeaderItem from "../components/HeaderItem"
import {BadgeCheckIcon, CollectionIcon,HomeIcon,LightningBoltIcon,SearchIcon,UserIcon} from "@heroicons/react/outline"

const Header = () => {
  return (
    <header className="flex flex-col gap-4 justify-between items-center m-6  sm:flex-row ">
        <div className="flex justify-evenly items-center max-w-2xl">
            <HeaderItem title="Home" Icon={HomeIcon}/>
            <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
            <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
            <HeaderItem title="Collections" Icon={CollectionIcon}/>
            <HeaderItem title="Search" Icon={SearchIcon}/>
            <HeaderItem title="Account" Icon={UserIcon}/>
        </div>
    <Image
    className="object-contain sm:mr-7"
    src={logo}
    width={130}
    height={100}
    />
    </header>
  )
}

export default Header