import { getNavbarBtnImage, getNavbarData, getNavbarDropdownItems, getNavbarImage, getStartedButton } from "@/app/lib/navbarMethods/methods";
import Link from "next/link";

const Navbar = async () => {

    // const navbar = await getStrapiData("/api/chat-doc?populate[PageContent][on][components.navbar][populate]=*")
    const navbar = await getNavbarData()
    const navImage = await getNavbarImage()
    const navProductsBtn = await getNavbarBtnImage()
    const navDropdown = await getNavbarDropdownItems()
    const navGetStartedBtn = await getStartedButton()
    // console.log("Navbar: ", navGetStartedBtn.data.PageContent[0])

    return (
        <div className="flex items-center h-[80px] sticky top-0 z-[99]">
            <div className="max-w-[1140px] mx-auto w-full">
                <div className="flex items-center flex-nowrap justify-between py-[0.65rem] px-0">
                    <span className="flex items-center mr-4 text-xl py-[0.3125rem]">
                        <span className="inline-flex items-center">
                            <img src={`http://localhost:1337${navImage.data.PageContent[0].logo.logoImg.url}`} height={40} width={40} />
                            <span className="text-[20px] leading-[22px] ml-[10px]">{navImage.data.PageContent[0].logo.logoTitle}</span>
                        </span>
                    </span>
                    <div className="flex items-center flex-auto justify-end">
                        <button className="mr-[30px]">
                            <img className="h-[42px]" src={`http://localhost:1337${navProductsBtn.data.PageContent[0].button.btnImage.url}`} />
                        </button>
                        <div>
                            <div className="flex items-center flex-row">
                                {navDropdown.data.PageContent[0].dropdown.dropdownItem.map((item: any) => {
                                    return (
                                        <Link className="text-black text-[1rem] font-semibold mr-[30px]" key={item.id}
                                            href={{}}>
                                            {item.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <Link className="bg-[#6576db] text-white px-[29px] py-[9px] font-semibold leading-[22px] cursor-pointer rounded-[4px]" href={{}}>
                            {navGetStartedBtn.data.PageContent[0].getStartedButton.title}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;