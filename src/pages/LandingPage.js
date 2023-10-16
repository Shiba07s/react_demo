import { useCallback } from "react";

const LandingPage = () => {
  const onRectangle1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onComponent41Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="relative bg-paleturquoise w-full h-[1080px] overflow-hidden text-left text-[64px] text-red font-inter">
      <div className="absolute top-[262px] left-[0px] bg-royalblue-100 w-[1920px] h-[103px]" />
      <img
        className="absolute top-[-171px] left-[1881px] rounded-lg w-[301px] h-[106px] cursor-pointer"
        alt=""
        src="/rectangle-23.svg"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[262px] left-[0px] w-[1920px] h-[807px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/banner-3-1-1@2x.png"
        />
      </div>
      <div className="absolute top-[464px] left-[1249px] w-[100px] h-[100px] overflow-hidden" />
      <img
        className="absolute top-[0px] left-[1654px] w-[167px] h-[154px] object-cover"
        alt=""
        src="/logo6removebgpreview-1-1@2x.png"
      />
      <b className="absolute top-[11px] left-[388px] [background:linear-gradient(rgba(66,_123,_209,_0.9),_rgba(66,_123,_209,_0.9)),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Teacher Training  Support System `}</b>
      <img
        className="absolute top-[22px] left-[43px] w-[314px] h-[111px] object-cover"
        alt=""
        src="/logo5--copyremovebgpreview-1@2x.png"
      />
      <b className="absolute top-[91px] left-[470px] text-[48px]">
        Government Of Andhra Pradesh
      </b>
      <select className="absolute top-[180px] left-[1322px] w-64 h-[136px]" />
      <div className="absolute top-[279px] left-[420px] w-[100px] h-[100px] overflow-hidden" />
      <button
        className="cursor-pointer [border:none] p-0 bg-royalblue-200 absolute h-[7.69%] w-[11.82%] top-[15.56%] right-[2.03%] bottom-[76.76%] left-[86.15%] rounded-[20px]"
        onClick={onComponent41Click}
      >
        <b className="absolute top-[14.46%] left-[21.15%] text-21xl font-inter text-white text-left">
          Login
        </b>
      </button>
    </div>
  );
};

export default LandingPage;
