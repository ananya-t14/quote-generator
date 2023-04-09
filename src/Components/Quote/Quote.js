export default function Quote({data}) {
    return (<div className="text-white tilt-in-top-1 bg-[#3f0201] p-5 rounded-3xl max-w-[60vw] transition-all w-max">
        <div className= "font-cursive text-3xl text-[#c3a58b]">
            {data.text }
        </div>
        <div className="text-right mt-2 text-[#c3a58b50] font-[Sacramento]">
            ~ {data.author}
        </div>
    </div>)
}
