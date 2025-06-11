import getRevolvingText, { getChatWithDocumentsHeading, getFileTypes, getHeroBackgroundImage, getInstantAnswersWithCitedSources, getTryForFreeButton } from "@/app/lib/heroMethods/methods"

const Hero = async () => {
    const revolvingText = await getRevolvingText()
    const headingFirst = await getChatWithDocumentsHeading()
    const headingSecond = await getInstantAnswersWithCitedSources()
    const heroBtn = await getTryForFreeButton()
    const fileTypes = await getFileTypes()
    const heroBackgroundImage = await getHeroBackgroundImage()
    // console.log("Hero: ", .data.PageContent[0])

    return (
        <div>
            <div className="bg-gradient-to-b from-[#f6faff] to-[#eaf3ff]">
                <div className="flex items-center flex-col pt-[22px] max-w-[1140px] mx-auto w-full">
                    {revolvingText.data.PageContent[0].revolvingText.map((item: any) => {
                        return (
                            <div className="flex flex-row mb-[26px] items-center justify-center cursor-pointer" key={item.id}>
                                <div className="bg-[#d9e0f8] px-[8px] py-[1px] leading-[20px] rounded-md">
                                    <span className="font-semibold text-[11px] text-[#687add]">{item.chip.title}</span>
                                </div>
                                <span className="mx-[10px] text-[#6b6c6f] text-[18px] font-bold">{item.title}</span>
                                <img src={`http://localhost:1337${item.chip.arrow.url}`} />
                            </div>
                        )
                    })}
                    <div>
                        <h1 className="text-[60px] leading-[60px] text-[#142132] mb-[20px] font-bold text-center">
                            <p>
                                {headingFirst.data.PageContent[0].chatWithDocumentsHeading.title}
                            </p>
                            <br />
                            {headingSecond.data.PageContent[0].heroHeader[0].heading.title}
                        </h1>
                        <span className="inline-block text-[#3d434e] text-[18px] leading-[27px] mb-[20px] text-center whitespace-pre">{headingSecond.data.PageContent[0].heroHeader[0].heading.subHeading}</span>
                    </div>
                    <button className="flex bg-[#e9effb] border-[2px] rounded-md border-[#6758e5] py-[12px] px-[35px]">
                        <img src={`http://localhost:1337${heroBtn.data.PageContent[0].tryForFreeButton.btnImage.url}`} width={25}/>
                        <span className="text-[#6576db] font-semibold text-[24px] leading-[33px] pl-[15px]">{heroBtn.data.PageContent[0].tryForFreeButton.title}</span>
                    </button>
                    <div className="flex items-center justify-center gap-[10px] mt-[30px] mb-[20px]">
                        <span className="text-[#9ea0a5] text-[18px] leading-[27px]">{fileTypes.data.PageContent[0].fileTypes.subHeading}</span>
                        <div className="flex items-center justify-center gap-[10px]">
                            {fileTypes.data.PageContent[0].fileTypes.formatChip.map((item : any) => {
                                return (
                                    <div key={item.id} className="border-[1px] border-[#9d9df9] rounded-[17px] py-[1px] px-[18px]">
                                        <span className="text-[#9d9df9]">{item.title}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <img src={`http://localhost:1337${heroBackgroundImage.data.PageContent[0].heroImg.formats.large.url}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero