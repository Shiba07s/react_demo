import { useCallback } from "react";

const Login = () => {
  const onLoginTextClick = useCallback(() => {
    // Please sync "Homepage duplicate" to the project
  }, []);

  const onClickhereTextClick = useCallback(() => {
    // Please sync "SIGNUP" to the project
  }, []);

  return (
    <div className="bg-paleturquoise w-[1920px] h-[1080px] overflow-hidden text-left text-13xl text-black font-inter">
      <div className="absolute top-[245px] left-[554px] rounded-[65px] bg-mediumorchid w-[871px] h-[835px]" />
      <img
        className="absolute top-[766px] left-[843px] w-[50px] h-11 object-cover"
        alt=""
        src="/captcha-1@2x.png"
      />
      <b className="absolute top-[270px] left-[938px] text-21xl inline-block text-cornflowerblue w-[133px] h-[55px]">
        Log In
      </b>
      <div className="absolute top-[430px] left-[697px] bg-white w-[510px] h-[67px]" />
      <div className="absolute top-[609px] left-[699px] bg-white w-[510px] h-[67px]" />
      <div className="absolute top-[373px] left-[697px] inline-block w-[268px] h-10">
        Mobile Number
      </div>
      <div className="absolute top-[562px] left-[699px] inline-block w-[148px] h-7">
        DOB
      </div>
      <div className="absolute top-[826px] left-[697px] bg-white w-56 h-16" />
      <b className="absolute top-[767px] left-[699px] inline-block w-[190px] h-11">
        Captcha
      </b>
      <div className="absolute top-[833px] left-[1066px] bg-white w-[199px] h-[55px]" />
      <b className="absolute top-[791px] left-[1062px] text-5xl inline-block w-[273px] h-[39px]">
        Enter Captcha
      </b>
      <div className="absolute top-[708px] left-[1004px] text-5xl font-semibold text-darkblue inline-block w-[294px] h-9">
        Forgot password ?
      </div>
      <div className="absolute top-[980px] left-[862px] rounded-[10px] h-[85px] flex flex-col items-start justify-start p-2.5 box-border">
        <button className="cursor-pointer [border:none] p-0 bg-darkblue relative rounded-xl w-[251px] h-[75px]" />
      </div>
      <div
        className="absolute top-[999px] left-[calc(50%_-_47px)] text-17xl font-semibold text-white text-center inline-block w-[178px] h-[52px] cursor-pointer"
        onClick={onLoginTextClick}
      >
        <p className="m-0">Login</p>
      </div>
      <img
        className="absolute top-[41px] left-[55px] w-[314px] h-[111px] object-cover"
        alt=""
        src="/logo5--copyremovebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[19px] left-[1659px] w-[167px] h-[154px] object-cover"
        alt=""
        src="/logo6removebgpreview-1-1@2x.png"
      />
      <div className="absolute top-[245px] left-[-11px] bg-royalblue-100 w-[1926px] h-[72px]" />
      <b className="absolute top-[14px] left-[458px] text-45xl [background:linear-gradient(rgba(66,_123,_209,_0.9),_rgba(66,_123,_209,_0.9)),_#000] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Teacher Training  Support System `}</b>
      <b className="absolute top-[95px] left-[553px] text-29xl text-red-100">
        Government Of Andhra Pradesh
      </b>
      <div className="absolute top-[440px] left-[732px] text-17xl inline-block w-[350px]">
        6371098987
      </div>
      <img
        className="absolute top-[833px] left-[704px] w-[209px] h-[50px] object-cover"
        alt=""
        src="/captcha2-1@2x.png"
      />
      <div className="absolute top-[846px] left-[1091px] text-[20px]">
        CAPTCHA
      </div>
      <div className="absolute top-[621px] left-[706px] inline-block w-[441px] h-[55px]">
        13/10/1998
      </div>
      <div className="absolute top-[503px] left-[706px] text-5xl text-red-200 inline-block w-[696px] h-10">
        Enter mobile number linked with Treasury ID.
      </div>
      <div className="absolute top-[925px] left-[686px] font-semibold inline-block w-[324px] h-[39px]">
        Dont have account?
      </div>
      <div
        className="absolute top-[925px] left-[1017px] font-semibold text-blue inline-block w-[213px] h-7 cursor-pointer"
        onClick={onClickhereTextClick}
      >
        Clickhere
      </div>
      <img
        className="absolute top-[367px] left-[675.54px] w-[22px] h-[13px]"
        alt=""
        src="/star-8.svg"
      />
      <img
        className="absolute top-[562px] left-[675.54px] w-[22px] h-[13px]"
        alt=""
        src="/star-8.svg"
      />
    </div>
  );
};

export default Login;
