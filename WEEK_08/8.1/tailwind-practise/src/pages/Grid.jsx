export default function Grid(){
    return (
        <>
        <div className="grid grid-cols-10">
            <div className="bg-red-500 col-span-4">hi</div>
            <div className="bg-yellow-500 col-span-4">hi</div>
            <div className="bg-green-500 col-span-2">hi</div>
        </div>
        
        <div className="flex">

            <div className="bg-red-500 w-[40%]">hi</div>
            <div className="bg-yellow-500 w-[40%]">hi</div>
            <div className="bg-green-500 w-[20%]">hi</div>
            
        </div>
        </>
    )
} 