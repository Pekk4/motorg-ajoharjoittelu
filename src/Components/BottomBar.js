const BottomBar = () => (
  <div className="absolute bottom-0 mx-auto left-0 right-0 border-orange-500 border-t-2">
    <div className="bg-gradient-to-b from-org-gray to-black grid grid-cols-3 ">
      <div className="flex items-center">
        <p className="m-auto"><a href="http://moottoripyora.org"><img src={require('../assets/images/moottoripyora.png')} alt="moottoripyora.org" /></a></p>
      </div>
      <div className="">
        <p className="m-5 text-center text-white text-xs"><a href="http://moottoripyora.org/motorg">© MotOrg ry</a></p>
      </div>
      <div className="flex items-center">
        <div className="m-auto grid grid-cols-3">
          <p className="mx-2"><a href="https://facebook.com/motorgry"><img className="w-[32px] h-[32px] border-white border-2 rounded-full" src={require("../assets/images/facebook.png")} alt="facebook" /></a></p>
          <p className="mx-2"><a href="https://instagram.com/motorgry"><img className="w-[32px] h-[32px] border-white border-2 rounded-full" src={require("../assets/images/instagram.png")} alt="facebook" /></a></p>
          <p className="mx-2"><a href="https://tiktok.com/@motorgry"><img className="w-[32px] h-[32px] border-white border-2 rounded-full bg-white" src={require("../assets/images/tiktok.png")} alt="facebook" /></a></p>
        </div>
      </div>
    </div>
  </div>
)

export default BottomBar