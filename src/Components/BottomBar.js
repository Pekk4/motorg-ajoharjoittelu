const BottomBar = () => (
  <div class="absolute bottom-0 mx-auto left-0 right-0">
    <div class="bg-gradient-to-b from-org-gray to-black grid grid-cols-3 ">
      <div class="flex items-center">
        <p class="m-auto"><a href="http://moottoripyora.org"><img src={require('../assets/moottoripyora.png')} alt="moottoripyora.org" /></a></p>
      </div>
      <div class="">
        <p class="m-5 text-center text-white text-xs"><a href="http://moottoripyora.org/motorg">© MotOrg ry</a></p>
      </div>
      <div class="flex items-center">
        <div class="m-auto grid grid-cols-3">
          <p class="mx-2"><a href="https://facebook.com/motorgry"><img class="w-[32px] h-[32px] border-white border-2 rounded-full" src={require("../assets/facebook.png")} alt="facebook" /></a></p>
          <p class="mx-2"><a href="https://instagram.com/motorgry"><img class="w-[32px] h-[32px] border-white border-2 rounded-full" src={require("../assets/instagram.png")} alt="facebook" /></a></p>
          <p class="mx-2"><a href="https://tiktok.com/@motorgry"><img class="w-[32px] h-[32px] border-white border-2 rounded-full bg-white" src={require("../assets/tiktok.png")} alt="facebook" /></a></p>
        </div>
      </div>
    </div>
  </div>
)

export default BottomBar