

function Navbar() {
  return (
    <div className="bg-[#ec2bb2] fixed w-full">
    <div className="header container m-auto  flex justify-between h-[60px] items-center">
        <div className="left text-srWhite font-bold text-[18px]">Bouquet<br /> Tara</div>
        <div className="right text-[17px] flex gap-7 ">
        <a href="" className="text-srWhite bg-[#e94462] px-4 py-2 rounded">Logout</a>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
