import { features } from "../constants"
import { styles } from "../style"


const FeatureItems = ({img, name, content})=>(
    <div className="flex flex-col items-center max-w-[350px] bg-white p-6 rounded-[10px]">
      <img src={img} />
      <h4 className="font-space font-bold mt-3">{name}</h4>
      <p className="text-center text-black mt-4 font-space text-[16px]">{content}</p>
    </div>
)

const Features = () => {
  return (
    <section id="feature">
      <h2 className="font-space font-bold text-[35px] text-center sm:leading-[20px] leading-[40px]">What you stand to benefit</h2>
      <div className="flex sm:flex-row flex-col w-full my-8 gap-[10px]">
        {features.map((item)=>(
          <FeatureItems key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Features
