import { SvgIcon } from "@mui/material"


const ArticleCard = ({text, icon}) => {
  return (
    <div className="w-full min-h-[300px] max-h-[400px] flex flex-col justify-center items-center shadow-md rounded-md bg-white-primary cursor-pointer hover:bg-slate-400 group">
    <span>
    <SvgIcon component={icon} 
    sx={{
      fontSize: "4rem",
      marginBottom: "1rem",
    }}
    />
    </span>
    <h1 className="text-lg lg:text-xl text-slate-gray font-semibold font-montserrat group-hover:text-black-secondary">{text}</h1>

    </div>
  )
}

export default ArticleCard
