export const Card = ({ children,h=false }) => {
    return (
        <div className="relative group">
            {/* <div
                className={`absolute transition-all duration-[0.2s] ease-in bg-[rgba(255,_255,_255,1)] top-0 left-0 group-hover:top-1 group-hover:left-1 ${h ? 'w-fit' : 'w-[428.66px]'} flex ${h ? 'h-fit' : 'h-[166px]'} items-center justify-center ${h ? 'px-2' :'px-6'}`}
                style={{ boxSizing: "border-box", border: "1.5px solid #121212", borderRadius: " 8px" }}
            /> */}
            <div className={`relative transition-all duration-[0.2s] ease-in bg-transparent rounded items-center group-hover:-top-1 ${h ? 'w-fit' : 'w-[428.66px]'}  justify-center ${h ? 'px-2' :'px-6'} ${h ? 'h-fit' : 'h-[166px]'}`}>
                {children}
            </div>
        </div>
    )
}