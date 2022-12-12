
const HeaderItem = ({Icon,title}) => {
  return (
    <div className="group flex flex-col cursor-pointer items-center hover:text-white w-12 sm:w-20">
        <Icon className="h-6 mb-1 group-hover:animate-bounce m-0"/>
        <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem