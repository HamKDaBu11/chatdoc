import getSamplesHeading, { getSampleHeader, getSampleLinks, getSampleTypes } from "@/app/lib/sampleSectionMethods/methods"

const SampleSection = async () => {

    const sampleHeading = await getSamplesHeading()
    const sampleTypes = await getSampleTypes()
    const sampleLinks = await getSampleLinks()
    const sampleHeader = await getSampleHeader()
    console.log("sampleTypes: ", sampleHeader.data.PageContent[0].sampleTypes[0].sampleHeader.heading.title)

    return (
        <div className="pt-[120px] pb-[57px]">
            <div className="max-w-[1140px] mx-auto w-full">
                <h1 className="text-[#142132] text-[36px] font-bold leading-[40px] text-center mb-[30px]">{sampleHeading.data.PageContent[0].sampleHeading[0].heading.title}</h1>
                <p className="mb-[70px] text-[#3d434e] text-[20px] leading-[36px] text-center">{sampleHeading.data.PageContent[0].sampleHeading[0].heading.subHeading}</p>
                <div className="flex justify-around">
                    {sampleTypes.data.PageContent[0].sampleTypes.map((item : any) => {
                        return (
                            <div key={item.id} className="flex flex-col items-center cursor-pointer">
                                <div className="border-2 relative rounded-[7px] border-[#8794e4] mb-[30px]">
                                    <img src={`http://localhost:1337${item.sampleImg.formats.thumbnail.url}`} width={235} height={100}/>
                                    <div className="absolute bottom-[15px] left-[60px]">
                                        <span className="text-[20px] font-bold leading-[36px] mr-[8px]">{sampleLinks.data.PageContent[0].sampleTypes[0].sampleLink.title}</span>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.sampleHeader.heading}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SampleSection