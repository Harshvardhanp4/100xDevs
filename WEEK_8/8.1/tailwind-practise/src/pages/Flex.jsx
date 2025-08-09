

export default function Flex(){
return (
    <>
        <div style={{display: 'flex', justifyContent: "center"}}>
      <div style={{backgroundColor: "red"}}>Hi</div>
      <div style={{backgroundColor: "green"}}>Hi</div>
      <div style={{backgroundColor: "yellow"}}>Hi</div>
      <div style={{backgroundColor: "blue"}}>Hi</div> 
    </div> 
    {/* this is default */}

    <div className='flex justify-center'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hi</div>
      <div className='bg-yellow-500'>Hi</div>
      <div className='bg-blue-500'>Hi</div> 
    </div>
    {/* this is how you do in tailwind */}
    </>
)
}