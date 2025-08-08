

export function VideoCard(){
    return <div>
       <img src="/photo.jpg" alt="" />
       <div className="grid grid-cols-12">
        <div className="col-span-1">
            <img className = {"rounded-full w-20 h-20"} src="/photo.jpg" alt="" />
        </div>
        <div className="col-span-11 pl-5">
            <div>
                 Afro Beats | Beach Music | Chill Music
            </div>
           <div className="col-span-11 pl-5 text-gray-600 text-base">
           Beach DJ
        </div> 

        <div className="col-span-11 pl-5 text-gray-600 text-base">
           46M | 13 days ago
        </div> 
        </div>
        
        

       </div>
    </div>
}