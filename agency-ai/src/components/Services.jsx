import assets from "../assets/assets.js";
import Title from "./Title.jsx";
import ServiceCard from "./ServiceCard.jsx";
import {motion} from "motion/react"

const Services = () => {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='services'
             className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700">

            <img
                src={assets.bgImage2}
                alt=""
                className="absolute top-[110px] left-[-70px] -z-10 w-[500px] h-auto"
            />

            <Title
                title="How can we help?"
                desc="From strategy to execution, we craft digital solutions that move your business forward."
            />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
