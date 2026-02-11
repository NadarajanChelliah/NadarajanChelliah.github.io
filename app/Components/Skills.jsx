import { skillsList } from "@/assets/skills"
import Image from "next/image"
import { useTheme } from './ThemeProvider'

const Skills = () => {
  const { isDark } = useTheme();
  return (
    <div id='skills' className="md:h-screen flex mx-auto my-10 justify-center scroll-mt-20"
    >
        <div className={`mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 
        sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5 `}>
            {skillsList.map(({icon,darkIcon,name},index)=>(
                <Image key={index} src={isDark && darkIcon ? darkIcon :icon} alt={name} decoding="async"
                className="h-12 w-max lg:h-16"/>
            ))}
        </div>
    </div>
  )
}

export default Skills
