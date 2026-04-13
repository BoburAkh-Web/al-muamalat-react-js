import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import studentImg from "@assets/student-img.png";
const Hero = () => {
  return (
    <section className="relative w-full bg-[#009688] min-h-160 overflow-hidden flex items-center">
      <div className="max-w-360 mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-10 py-16">
        {/* CHAP TOMON: MATNLAR VA TUGMALAR */}
        <div className="flex flex-col justify-center z-10 text-white">
          {/* Badge (Seeking Knowledge) */}
          <div className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-lg w-fit mb-8 shadow-md">
            Seeking Knowledge is an Obligation in Islam
          </div>

          {/* Sarlavha */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Enhance Your Understanding of Islamic Ethics with Al-Muamalat
          </h1>

          {/* Pastki qism: Tugma va Reyting */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Tugma */}
            <button className="bg-[#FF6D33] hover:bg-[#e65a22] transition-colors text-white uppercase font-bold px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg">
              Students' Opinion
            </button>

            {/* Reyting va Talabalar */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {/* Bu yerga 3ta talaba rasmini qo'yasiz */}
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=1"
                  alt="user"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=2"
                  alt="user"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src="https://i.pravatar.cc/100?img=3"
                  alt="user"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400 text-sm">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-xs text-white opacity-90">
                  ( 10k+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* O'NG TOMON: RASYM VA BADGE */}
        <div className="relative flex justify-center md:justify-end items-end">
          {/* Asosiy talaba rasmi */}
          <img
            src={studentImg}
            alt="Student"
            className="relative z-10 max-h-125 object-contain"
          />

          {/* O'ng tarafdagi oq xabarnoma (250k Assisted Student) */}
          <div className="absolute top-10 right-0 md:right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 border border-white/50">
            <div className="bg-[#4FC3F7] p-3 rounded-xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="C8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-xl leading-none">
                250k
              </p>
              <p className="text-gray-500 text-xs">Assisted Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* FON EFFEKTLARI (DUMALOQLAR) - Agarda rasm sifatida qo'shishni xohlamasangiz */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
