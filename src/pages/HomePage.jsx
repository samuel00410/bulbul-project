import React from "react";
import Navbar from "../components/Navbar";
import bannerImg from "../assets/Images/bannerImg.png";

const HomePage = () => {
  return (
    <section className="flex flex-col sm:flex-row min-h-screen">
      <Navbar />
      <div className="bg-[#DCCCBC] flex-1">
        <div
          className="relative bg-no-repeat bg-cover bg-center h-[320px] sm:h-[640px]"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="text-[#FFFFFF] text-right absolute bottom-5 right-0 px-4">
            <h1 className=" text-4xl sm:text-[48px] font-bold tracking-tight leading-tight">
              <span className="block sm:inline">白頭翁</span>
              <span className="block sm:inline"> (Chinese</span>
              <span className="block sm:inline"> bulbul)</span>
            </h1>
            <p className="text-base sm:text-lg text-justify pl-4">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 px-12 py-16">
          <div className="flex gap-8">
            <div className="relative h-20">
              <h2 className="text-4xl font-bold">外觀</h2>
              {/* 圓圈造型 */}
              <div className="absolute -bottom-2 -right-4">
                <div className="relative w-6 h-6 rounded-full bg-[#AA666699]">
                  <div className="absolute w-3 h-3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] border rounded-full bg-[#DCCCBC]"></div>
                </div>
              </div>
            </div>

            <p className="font-normal tracking-tighter">
              白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
            </p>
          </div>
          <div className="flex gap-8">
            <div className="relative h-20">
              <h2 className="text-4xl font-bold">棲地</h2>
              {/* 圓圈造型 */}
              <div className="absolute -bottom-2 -right-4">
                <div className="relative w-6 h-6 rounded-full bg-[#AA666699]">
                  <div className="absolute w-3 h-3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] border rounded-full bg-[#DCCCBC]"></div>
                </div>
              </div>
            </div>

            <p className="font-normal tracking-tighter ">
              白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。
            </p>
          </div>
          <div className="flex gap-8">
            <div className="relative h-20">
              <h2 className="text-4xl font-bold">食性</h2>
              {/* 圓圈造型 */}
              <div className="absolute -bottom-2 -right-4">
                <div className="relative w-6 h-6 rounded-full bg-[#AA666699]">
                  <div className="absolute w-3 h-3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] border rounded-full bg-[#DCCCBC]"></div>
                </div>
              </div>
            </div>
            <p className="font-normal tracking-tighter ">
              以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
